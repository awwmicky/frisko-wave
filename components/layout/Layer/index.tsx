import { FC, PropsWithChildren } from 'react'

interface IPLayer extends PropsWithChildren {
	className?: string
	variant?: 'header' | 'footer'
}

const Layer: FC<IPLayer> = ({ children, className="", variant }) => {
	const varOption = (variant === 'header')
		? 'py-2 flex place-items-center place-content-between'
		: (variant === 'footer')
		? 'py-2'
		: ''
	return <div className={`container mx-auto ${ className } ${ varOption }`}>{ children }</div>
}

export { Layer }
