import { FC, Children, useState } from 'react'
import { Typography, Button, IconButton } from '@material-tailwind/react'
import { Icon } from '@/components/blocks'
import type { IDrawer } from '@/src/@types'
import { cartList } from '@/src/constants'
import { CartItemCard } from './'

interface IPCartDrawer extends IDrawer { }

const content = {
	btnText: 'Pay With Stripe',
}

const CartDrawer: FC<IPCartDrawer> = ({ isOpen, toggleDrawer }) => {
	const [ list, setList ] = useState(cartList)
	const subtotal = list.reduce((acc, curr) => (!!curr.qty) ? (acc + curr.price) : acc, 0)
	const isDrawerOpen = isOpen ? 'flex' : 'hidden'
	const removeItem = (index: number) => setList((prev) => {
		delete prev[index]
		const newList = prev.filter(Boolean)
		return newList
	})

	return (
		<aside className={`z-[11] fixed right-0 bg-white border-l h-full max-w-full w-[430px] p-8 flex flex-col gap-4 ${ isDrawerOpen }`}>
			<div className="mr-4 flex gap-4 place-items-center place-content-between">
				<IconButton onClick={ toggleDrawer } variant="text" color="gray" size="sm"><Icon.LeftArrow /></IconButton>
				<Typography variant="paragraph" className="font-bold">Your Cart</Typography>
				<Typography variant="paragraph" color="red" className="font-bold">{ `(${ cartList.length } items)` }</Typography>
			</div>

			<div className="px-1 pb-2 flex flex-col gap-4 overflow-y-scroll">
				{ Children.toArray(list.map((item, idx) => (
					<CartItemCard
						item={ item }
						removeItem={ () => removeItem(idx) }
					/>
				))) }
			</div>

			<div className="mt-auto mr-4 grid gap-4 grid-col-2 grid-row-2">
				<Typography variant="h5" className="col-start-1 font-bold">Subtotal</Typography>
				<Typography variant="h5" className="col-start-[-0] text-right font-bold">${ subtotal }</Typography>
				<Button color="red" size="lg" className="row-start-2 col-span-2">{ content.btnText }</Button>
			</div>
		</aside>
	)
}

export { CartDrawer }
// TODO: set data here
