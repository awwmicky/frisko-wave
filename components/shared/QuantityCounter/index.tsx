import React, { FC, useState } from 'react'
import { Input, IconButton, Chip } from '@material-tailwind/react'
import { Icon } from '@/components/blocks'

interface IPQuantityCounter {
	className?: string
	size?: "sm" | "md" | "lg"
	qty: number
}

const QuantityCounter: FC<IPQuantityCounter> = ({ qty=0, size="md", className }) => {
	const [ counter, setCounter ] = useState(1)
	const [ MIN, MAX, isInStock ] = [ 1, qty, !!qty ]
	const handleCounter = (e: React.ChangeEvent<HTMLInputElement>) => setCounter(Number(e.target.value))
	const increment = () => (counter <= MAX) && setCounter((prev) => Number(prev)+1)
	const decrement = () => (counter >= MIN) && setCounter((prev) => Number(prev)-1)

	const inputSize = (size === 'sm') ? '!h-8 !w-8' : 'h-auto w-14'
	const inputProps = {
		containerProps: { className: `${ inputSize } min-w-min w-8 text-center` },
		className: 'px-1 text-center',
	}

	if (!isInStock) return <Chip color="red" value="Sold Out" className={`${ className }`} />

	return (
		<div className={ `flex gap-4 place-content-start ${ className }` }>
			<Input value={ counter } onChange={ handleCounter } type="number" min={ MIN } max={ MAX } {...inputProps} />
			<IconButton onClick={ increment } variant="text" size={ size } ripple={false} color="gray" className="px-4"><Icon.Plus /></IconButton>
			<IconButton onClick={ decrement } variant="text" size={ size } ripple={false} color="gray" className="px-4"><Icon.Minus /></IconButton>
		</div>
	)
}

export { QuantityCounter }
