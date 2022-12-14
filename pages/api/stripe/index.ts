import type { NextApiRequest, NextApiResponse } from 'next'
import { StatusCodes } from 'http-status-codes'
import Stripe from 'stripe'
import { ICartDetail } from '@/src/@types'
import { urlSrc } from '@/src/lib'

interface IExtNextApiRequest extends NextApiRequest {
	body: Record<'cartList', Array<ICartDetail>>
}

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
	apiVersion: '2022-11-15',
})

const METHOD = {
	// GET: 'GET' as const,
	POST: 'POST' as const,
	// PUT: 'PUT' as const,
	// PATCH: 'PATCH' as const,
	// DELETE: 'DELETE' as const,
}

const handleStripeRoute = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		switch (req.method) {
			case METHOD.POST: {
				const params = checkoutParams(req)
				// console.info(`[${req.method}`, params)
				const session = await stripe.checkout.sessions.create(params)
				// logger.info(session, '[session]')
				res.status(StatusCodes.OK).json(session)
				break
			}
			default: {
				res.setHeader('Allow', [ 'POST' ])
				// res.setHeader('Allow', ['GET', 'PUT', 'PATCH', 'DELETE'])
				res.status(StatusCodes.METHOD_NOT_ALLOWED).send(`Method ${ req.method } Not Allowed`)
				break
			}
		}
	} catch (error) {
		const reason = error as Error
		// console.warn('[issue]', reason)
		// logger.error(reason.message, '[reason]')
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(reason.message)
	}
}

const checkoutParams = (req: IExtNextApiRequest): Stripe.Checkout.SessionCreateParams => ({
	submit_type: 'pay',
	mode: 'payment',
	payment_method_types: ['card'],
	billing_address_collection: 'auto',
	customer_email: 'payment@test-mode.com',
	shipping_options: [
		{ shipping_rate: process.env.NEXT_PUBLIC_STRIPE_SHIPPING_RATE_ID_1 },
		{ shipping_rate: process.env.NEXT_PUBLIC_STRIPE_SHIPPING_RATE_ID_2 },
	],
	line_items: req.body.cartList.map((item) => ({
		price_data: {
			currency: 'usd',
			product_data: {
				name: item.name,
				images: [ urlSrc(item.images).url() ],
			},
			unit_amount: item.price * 100,
		},
		adjustable_quantity: {
			enabled: true,
			maximum: item.qty,
		},
		quantity: item.cartQty,
	})),
	custom_text: {
		submit: {
			message: `\
			This is a payment test-mode. Use this temporary info to fill out fields ::\
			# 4242 4242 4242 4242	# 1234 # 567 # name # 12345\n
			`
		},
	},
	success_url: `${req.headers.origin}/checkout?status=success`,
	cancel_url: `${req.headers.origin}/checkout?status=cancelled`,
})

export default handleStripeRoute
