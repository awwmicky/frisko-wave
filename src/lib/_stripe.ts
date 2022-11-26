import type Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'
import { toast } from 'react-hot-toast'
import ky from 'ky'
import { ICartDetail } from '@/src/@types'

export const getStripe = async () => {
	const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
	const stripePromise = await loadStripe(stripeKey)
  return stripePromise
}

export const createStripeCheckout = async (cartList: Array<ICartDetail> = []) => {
	if (!cartList.length) return
	const [ URI_STRIPE, URI_OPTIONS ] = ['/api/stripe', { json: { cartList }}]

	try {
		const stripe = await getStripe()
		const result = await ky.post(URI_STRIPE, URI_OPTIONS).json() as Stripe.Checkout.Session
		toast.loading('Redirecting...')
		console.debug('[stripe]', { sessionId: result.id })
    stripe!.redirectToCheckout({ sessionId: result.id })
	} catch (error) {
		const reason = error as Error
		console.warn('[error]', reason)
		toast.error('Somthing went wrong... Try again')
	}
}
