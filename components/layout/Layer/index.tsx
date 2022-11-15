import { FC, PropsWithChildren } from 'react'

interface IPLayer extends PropsWithChildren {
	className?: string
}

const Layer: FC<IPLayer> = ({ children, className }) => (
	<div className={`container mx-auto ${ className || "" }`}>
		{ children }
	</div>
)

export { Layer }
