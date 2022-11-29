import type { NextPage } from 'next'
import NextLink from 'next/link'
import { useEffect } from 'react'
import { Typography, Button } from '@material-tailwind/react'
import { Layer } from '@/components/layout'
import { Icon } from '@/components/blocks'
import { checkoutContent } from '@/src/constants'
import { PATHS_ROOT } from '@/src/routes'
import { useGlobalStore } from '@/src/store'
import { runFireworks } from '@/src/utils'

interface IPCheckout {
	status: "success" | "cancelled"
}

const CheckoutPage: NextPage<IPCheckout> = ({ status }) => {
	const emptyCart = useGlobalStore((state) => state.emptyCart)

	useEffect(() => {
		if (status !== 'success') return
		runFireworks()
		emptyCart()
	}, [ status, emptyCart ])

	return (
		<Layer className="h-full text-center my-10 flex flex-col place-content-center">
			<div className="bg-gray-300 px-8 py-16 rounded-xl flex flex-col gap-4 place-items-center">
				{ (status === 'success') ? <Icon.CheckoutSuccess /> : <Icon.CheckoutCancelled />}
				<Typography variant="h2" className="font-bold">{ checkoutContent[status].title }</Typography>
				<Typography variant="paragraph">{ checkoutContent[status].text }</Typography>

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

CheckoutPage.getInitialProps = (ctx) => {
	const { status } = ctx.query as Pick<IPCheckout, 'status'>
  return { status }
}

export default CheckoutPage
