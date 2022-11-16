import NextLink from 'next/link'
import { Typography, Button } from '@material-tailwind/react'

const content = {
	smallText: 'Boast Immortal 1000D',
	midText: 'Wireless',
	largeText1: 'Headphone',
	btnText: 'Shop wireless headphone',
	description: `\
	The game begins here. With Immortal 1000D\
	gaming headphones, don't just play the\
	game - feel it, live it, and own it. Level up\
	your audio game with 7.1 Channel.\
	`,
	image: '/',
	image_alt: 'bi-1000d',
}

const HeroBanner = () => {
	return (
		<div className="relative bg-gray-300 rounded-xl p-8 pt-20 grid gap-4 grid-cols-3 grid-rows-1">
			<div className="col-span-full row-span-1">
				<Typography variant="lead">{ content.smallText }</Typography>
				<Typography variant="h3" className="text-5xl font-bold">{ content.midText }</Typography>
				<Typography variant="h1" className="!text-white text-9xl font-bold uppercase text-shadow-sm translate-x-[-0.125ch]">
					{ content.largeText1 }
				</Typography>
			</div>

			<img src={ content.image } alt={ content.image_alt } className="absolute col-start-2 col-end-3 row-start-1 row-end-2" />

			<NextLink passHref href={ '/product/1' } className="row-start-[-1] row-end-[-1] place-self-start">
				<Button color="red" className="capitalize">{ content.btnText }</Button>
			</NextLink>

			<div className="col-start-[-2] col-end-[-1] row-start-[-1] row-end-[-1] place-self-start">
				<Typography variant="paragraph">{ content.description }</Typography>
			</div>
		</div>
	)
}

export { HeroBanner }
