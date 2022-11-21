import NextLink from 'next/link'
import { Typography, Button } from '@material-tailwind/react'
import { Layer } from '@/components/layout'
import { Icon } from '@/components/blocks'
import { checkoutContent } from '@/src/constants'
import { PATHS_ROOT } from '@/src/routes'

// success || fail
const CheckoutPage = () => {
	return (
		<Layer className="h-full text-center my-10 flex flex-col place-content-center">
			<div className="bg-gray-300 px-8 py-16 rounded-xl flex flex-col gap-4 place-items-center">
				<Icon.CheckoutSuccess />
				<Typography variant="h2" className="font-bold">{ checkoutContent.title }</Typography>
				<Typography variant="paragraph">{ checkoutContent.text1 }</Typography>
				<Typography variant="paragraph">
					<span>{ checkoutContent.text2 }</span>{' '}
					<a href={ checkoutContent.link.path } className="text-red-500 font-bold">
						{ checkoutContent.link.label }
					</a>
				</Typography>
				<NextLink passHref href={ PATHS_ROOT.shop.path } className="mt-10">
					<Button color="red">{ checkoutContent.btnText }</Button>
				</NextLink>
			</div>
		</Layer>
	)
}

export default CheckoutPage
