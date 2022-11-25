import { loadStripe } from '@stripe/stripe-js'
import { toast } from 'react-hot-toast'
import ky from 'ky'

export const getStripe = async () => {
	const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
	const stripePromise = await loadStripe(stripeKey)
  return stripePromise
}

export const createStripeCheckout = async (cartList=[]) => {
	const [ URI_STRIPE, URI_OPTIONS ] = ['/api/stripe', { json: cartList, }]

	try {
		const stripe = await getStripe()
		const result = await ky.post(URI_STRIPE, URI_OPTIONS).json() as any
		toast.loading('Redirecting...')
    stripe!.redirectToCheckout({ sessionId: result.id })
	} catch (error) {
		const reason = error as Error
		console.warn('[error]', reason)
		toast.error('Somthing went wrong... Try again')
	}
}
