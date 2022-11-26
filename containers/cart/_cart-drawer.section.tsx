import NextLink from 'next/link'
import { Children, MouseEvent, useState } from 'react'
import { Typography, Button, IconButton } from '@material-tailwind/react'
import { Icon } from '@/components/blocks'
import { PATHS_ROOT } from '@/src/routes'
import { createStripeCheckout } from '@/src/lib'
import { useGlobalStore } from '@/src/store'
import { delay } from '@/src/utils'
import { CartItemCard } from '../'

const content = {
	cartEmpty: 'Your shopping bag is empty',
	btnText1: 'Continue Shopping',
	btnText2: 'Pay With Stripe',
}

const sx = {
	sidebar: 'z-[11] fixed right-0 bg-white border-l h-full max-w-full w-[430px] p-8 flex flex-col gap-4',
	cartHeader: 'mr-4 flex gap-4 place-items-center place-content-between',
	cartEmpty: 'flex gap-4 flex-col text-center',
	cartList: 'px-1 pb-2 flex flex-col gap-4 overflow-y-scroll',
	box: {
		wrapper: 'mt-auto mr-4 grid gap-4 grid-col-2 grid-row-2',
		text: 'col-start-1 font-bold',
		subtotal: 'col-start-[-0] text-right font-bold',
		payBtnText: 'row-start-2 col-span-2 [&>svg]:mx-auto',
	},
}

const CartDrawer = () => {
	const [ isLoading, setLoading ] = useState(false)
	const { cartList, isCartOpen, hideCart, totalQuantities, totalPrice } = useGlobalStore((state) => state)
	const isDrawerOpen = isCartOpen ? 'flex' : 'hidden'

	const onCheckout = async (_e: MouseEvent<HTMLButtonElement>) => {
		setLoading(true)
		await createStripeCheckout(cartList)
		await delay('', 1500).then(() => setLoading(false))
	}

	return (
		<aside className={`${ sx.sidebar } ${ isDrawerOpen }`}>
			<div className={`${ sx.cartHeader }`}>
				<IconButton onClick={ hideCart } variant="text" color="gray" size="sm"><Icon.LeftArrow /></IconButton>
				<Typography variant="paragraph" className="font-bold">Your Cart</Typography>
				<Typography variant="paragraph" color="red" className="font-bold">{ `(${ totalQuantities } items)` }</Typography>
			</div>

			{ (!cartList.length) ? (
				<div className={ sx.cartEmpty }>
					<Typography variant="lead">{ content.cartEmpty }</Typography>
					<NextLink passHref href={ PATHS_ROOT.shop.path }>
						<Button onClick={ hideCart } color="gray">{ content.btnText1 }</Button>
					</NextLink>
				</div>
			) : (
				<>
					<div className={`${ sx.cartList }`}>
						{ Children.toArray(cartList.map((item, idx) => <CartItemCard item={ item } idx={ idx } />)) }
					</div>

					<div className={`${ sx.box.wrapper }`}>
						<Typography variant="h5" className={`${ sx.box.text }`}>Subtotal</Typography>
						<Typography variant="h5" className={`${ sx.box.subtotal }`}>${ totalPrice }</Typography>
						<Button	onClick={ onCheckout } disabled={ isLoading } color="red" size="lg" className={`${ sx.box.payBtnText }`}>
							{ (isLoading) ? <Icon.Loading /> : content.btnText2 }
						</Button>
					</div>
				</>
			)}
		</aside>
	)
}

export { CartDrawer }
