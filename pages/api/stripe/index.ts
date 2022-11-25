import type { NextApiRequest, NextApiResponse } from 'next'
import { StatusCodes } from 'http-status-codes'
import Stripe from 'stripe'
import { logger } from '@/src/lib'

const SANITY_URL_IMAGES = 'https://cdn.sanity.io/images/vfxfwnaw/production/'
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
	apiVersion: '2022-11-15',
})

const METHOD = {
	// GET: 'GET',
	POST: 'POST',
	// PUT: 'PUT',
	// PATCH: 'PATCH',
	// DELETE: 'DELETE',
}

const handleStripeRoute = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
  const { method } = req

	try {
		switch (method) {
			case METHOD.POST: {

				const params = checkoutParams(req)
				console.info(`[${method}`, params)
				// Stripe.Checkout.Session
				const session = await stripe.checkout.sessions.create(params)
				logger.info(`[session]`, session)
				res.status(200).json(session)
				break
			}
			default: {
				res.setHeader('Allow', ['POST'])
				// res.setHeader('Allow', ['GET', 'PUT', 'PATCH', 'DELETE'])
				res.status(StatusCodes.METHOD_NOT_ALLOWED).end(`Method ${method} Not Allowed`)
				break
			}
		}
	} catch (error) {
		const reason = error as Error
		// console.warn('[issue]', reason)
		logger.error(!!reason, reason.message)
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(reason.message)
	}
}

// checkoutItems, baseUrl
const checkoutParams = (req: NextApiRequest): Stripe.Checkout.SessionCreateParams => ({
	submit_type: 'pay',
	mode: 'payment',
	payment_method_types: ['card'],
	billing_address_collection: 'auto',
	shipping_options: [{
		shipping_rate: 'shr_1Kn3IaEnylLNWUqj5rqhg9oV'
	}],
	line_items: req.body.map((item: any) => {
		const img = item.image[0].asset._ref
		const newImage = img.replace('image-', SANITY_URL_IMAGES).replace('-webp', '.webp')

		return {
			price_data: {
				currency: 'usd',
				product_data: {
					name: item.name,
					images: [newImage],
				},
				unit_amount: item.price * 100,
			},
			adjustable_quantity: {
				enabled:true,
				minimum: 1,
			},
			quantity: item.quantity
		}
	}),
	success_url: `${req.headers.origin}/checkout?status=success`,
	cancel_url: `${req.headers.origin}/checkout?status=cancelled`,
})

export default handleStripeRoute
