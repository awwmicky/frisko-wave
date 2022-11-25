import React, { FC, ChangeEvent } from 'react'
import { Input, IconButton, Chip } from '@material-tailwind/react'
import { Icon } from '@/components/blocks'

interface IPQuantityCounter {
	productQty: number
	cartQty: number
	updateCartItemQty: (qty: number, val: string) => void
	// setCartQty?: React.Dispatch<React.SetStateAction<number>>
	className?: string
	size?: "sm" | "md" | "lg"
}

const QuantityCounter: FC<IPQuantityCounter> = ({
	productQty=0,
	cartQty=1,
	updateCartItemQty,
	size="md",
	className
}) => {
	const [ MIN, MAX, isInStock ] = [ 1, productQty, Boolean(productQty) ]
	const inputSize = (size === 'sm') ? '!h-8 !w-10' : 'h-auto w-12'

	const handleInputQty = (e: ChangeEvent<HTMLInputElement>) => {
		const num = Number(e.target.value)
		if (num < MIN) return updateCartItemQty(MIN, '')
		if (num > MAX) return updateCartItemQty(MAX, '')
		if (MIN <= num && num <= MAX) return updateCartItemQty(num, '')
	}

	const incrementQty = () => (cartQty < MAX) && updateCartItemQty(1, 'increment')
	const decrementQty = () => (cartQty > MIN) && updateCartItemQty(1, 'decrement')

	if (!isInStock) return <Chip value={"Sold Out"} color="red" className={`${ className }`} />

	return (
		<div className={ `flex gap-4 place-content-start ${ className }` }>
			<Input value={ cartQty } onChange={ handleInputQty } type="number" min={ MIN } max={ MAX } containerProps={{ className: `${ inputSize } min-w-min [&>input]:px-1 [&>input]:text-center` }} />
			<IconButton onClick={ incrementQty } variant="text" size={ size } ripple={false} color="gray" className="px-4"><Icon.Plus /></IconButton>
			<IconButton onClick={ decrementQty } variant="text" size={ size } ripple={false} color="gray" className="px-4"><Icon.Minus /></IconButton>
		</div>
	)
}

export { QuantityCounter }
