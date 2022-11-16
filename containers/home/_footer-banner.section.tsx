import NextLink from 'next/link'
import { Typography, Button } from '@material-tailwind/react'

const content = {
	salesDiscount: '20% OFF',
	salesTime: '15 Nov - 7 Dec',
	largeText1: 'Fine',
	largeText2: 'Smile',
	image: '/',
	image_alt: 'br-451',
	smallText: 'Boast Rockerz 451',
	midText: 'Summer Sale',
	description: `\
	company that's grown from 270 to 480\
	employees in the last 12 months.
	`,
	btnText: 'Shop Now',
}

const FooterBanner = () => {
	return (
		<div className="bg-red-500 rounded-xl p-8 pt-20 grid gap-4 grid-cols-3 grid-rows-1">
			<div className="col-start-1 col-end-2 flex flex-col gap-2">
				<Typography variant="small" color="white">{ content.salesDiscount }</Typography>
				<Typography variant="h2" className="!text-white text-7xl leading-[1] font-bold uppercase text-shadow-md">
					<span className="block translate-x-[-0.1ch]">{ content.largeText1 }</span>
					<span className="block translate-x-[-0.05ch]">{ content.largeText2 }</span>
				</Typography>
				<Typography variant="small" color="white">{ content.salesTime }</Typography>
			</div>

			<img src={ content.image } alt={ content.image_alt } className="col-start-2 col-end-3" />

			<div className="col-start-[-2] col-end-[-1] flex flex-col">
				<Typography variant="small" color="white">{ content.smallText }</Typography>
				<Typography variant="h2" color="white" className="text-5xl font-bold">{ content.midText }</Typography>
				<Typography variant="paragraph" color="white" className="mb-4">{ content.description }</Typography>

				<NextLink passHref href={ '/product/1' } className="mt-auto">
					<Button color="white" className="text-red-500 capitalize">
						{ content.btnText }
					</Button>
				</NextLink>
			</div>
		</div>
	)
}

export { FooterBanner }
