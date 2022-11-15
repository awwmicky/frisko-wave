import { FC, PropsWithChildren, useMemo } from 'react'

interface IPLayer extends PropsWithChildren {
	className?: string
	variant?: 'header' | 'footer'
}

const Layer: FC<IPLayer> = ({ children, className, variant }) => {
	const varOption = useMemo(() => {
		if (variant === 'header') return 'py-2 flex place-items-center place-content-between'
		if (variant === 'footer') return ''
		return ''
	}, [ variant ])

	return <div className={`container mx-auto ${ className } ${ varOption }`}>{ children }</div>
}

export { Layer }
