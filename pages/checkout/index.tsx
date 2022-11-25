import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Typography, Button } from '@material-tailwind/react'
import { Layer } from '@/components/layout'
import { Icon } from '@/components/blocks'
import { checkoutContent } from '@/src/constants'
import { PATHS_ROOT } from '@/src/routes'
import { useGlobalStore } from '@/src/store'
import { runFireworks } from '@/src/utils'

const CheckoutPage = () => {
	const resetCart = useGlobalStore((state) => state.resetCart)
	const { status } = useRouter().query!
	const checkoutStatus = (status === 'success') ? 'success' : 'cancelled'

	useEffect(() => {
		if (status === 'success') {
			runFireworks()
			resetCart()
		}
	}, [ status ])

	return (
		<Layer className="h-full text-center my-10 flex flex-col place-content-center">
			<div className="bg-gray-300 px-8 py-16 rounded-xl flex flex-col gap-4 place-items-center">
				{ (status === 'success') ? <Icon.CheckoutSuccess /> : <Icon.CheckoutCancelled />}
				<Typography variant="h2" className="font-bold">{ checkoutContent[checkoutStatus].title }</Typography>
				<Typography variant="paragraph">{ checkoutContent[checkoutStatus].text }</Typography>

				<Typography variant="paragraph">
					<span>{ checkoutContent.link.text }</span>{' '}
					<a href={ checkoutContent.link.path } className="text-red-500 font-bold">
						{ checkoutContent.link.label }
					</a>
				</Typography>

				<NextLink passHref href={ PATHS_ROOT.shop.path } className="mt-10">
					<Button color="white">{ checkoutContent.btnText }</Button>
				</NextLink>
			</div>
		</Layer>
	)
}

export default CheckoutPage
