// import NextImage from 'next/image'
import NextLink from 'next/link'
import { FC, MouseEvent, useState, useEffect } from 'react'
import { Typography, IconButton, Card, CardHeader } from '@material-tailwind/react'
import { Icon } from '@/components/blocks'
import { QuantityCounter } from '@/components/shared'
import type { ICartDetail } from '@/src/@types'
import { PATHS_ROOT } from '@/src/routes'
import { useGlobalStore } from '@/src/store'
import { urlSrc } from '@/src/lib'

interface IPCartItemCard {
	item: Omit<ICartDetail, 'rating' | 'description'>
	idx: number
	className?: string
}

const sx = {
	card: 'p-4 grid gap-4 grid-cols-6 grid-row-1',
	image: 'm-0 row-start-2 [&>*]:h-full [&>*]:w-full [&>*]:object-contain sm:col-span-2 sm:row-start-1 sm:row-span-2',
	link: 'col-span-5 sm:col-span-3 col-start-1 sm:col-start-3 hover:underline active:no-underline [&>*]:font-bold',
	price: 'col-start-[-2] justify-self-end font-bold',
	qty: 'col-span-4 col-start-2 sm:col-span-3 sm:col-start-3 self-end justify-self-start',
	removeBtn: 'col-start-[-2] place-self-end',
}

const CartItemCard: FC<IPCartItemCard> = ({ item, idx }) => {
	const [ cartQty, setCartQty ] = useState(item.cartQty)
	const onUpdateCartQty = useGlobalStore((state) => state.onUpdateCartQty)
	const onRemoveFromCart = useGlobalStore((state) => state.onRemoveFromCart)

	const updateCartItemQty = (qty=1, val="") => {
		if (val === 'increment') return setCartQty((prev) => prev+1)
		if (val === 'decrement') return setCartQty((prev) => prev-1)
		setCartQty(qty)
	}

	const handleRemoveCartItem = (_e: MouseEvent<HTMLButtonElement>) => {
		onRemoveFromCart(idx)
	}

	useEffect(() => { setCartQty(item.cartQty) }, [ item.cartQty ])
	useEffect(() => {	onUpdateCartQty(idx, cartQty)}, [ onUpdateCartQty, idx, cartQty ])

	return (
		<Card className={`${ sx.card }`}>
			<CardHeader color="red" floated={false} className={`${ sx.image }`}>
				<img src={ urlSrc(item.images).url() } alt={ item.model.current } />
			</CardHeader>

			<NextLink passHref href={`${ PATHS_ROOT.shop.path }/${ item.model.current }`} className={`${ sx.link }`}>
				<Typography variant="h5">{ item.name }</Typography>
			</NextLink>

			<Typography variant="paragraph" className={`${ sx.price }`}>
				${ item.price }
			</Typography>

			<QuantityCounter productQty={ item.qty } cartQty={ cartQty } updateCartItemQty={ updateCartItemQty } size="sm" className={`${ sx.qty }`} />

			<IconButton onClick={ handleRemoveCartItem } variant="outlined" color="red" size="sm" className={`${ sx.removeBtn }`}>
				<Icon.Remove />
			</IconButton>
		</Card>
	)
}

export { CartItemCard }
