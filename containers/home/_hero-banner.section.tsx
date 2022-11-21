import NextImage from 'next/image'
import NextLink from 'next/link'
import { Typography, Button } from '@material-tailwind/react'
import { heroBanner } from '@/src/constants'
import { PATHS_ROOT } from '@/src/routes'

const sx = {
	banner: 'relative bg-gray-300 rounded-xl p-8 md:pt-20 grid gap-4 grid-cols-6 grid-rows-1',
	box1: {
		wrapper: 'col-span-full',
		text2: 'font-bold',
		span2: 'inline-block !text-white uppercase text-shadow-sm translate-x-[-0.125ch] md:block md:text-8xl',
	},
	image: 'col-span-full sm:col-start-2 sm:col-end-[-2] md:absolute md:col-start-3 md:col-end-[-3] md:scale-150 md:translate-y-2/3 lg:translate-y-1/3 xl:scale-100 xl:translate-y-10 2xl:translate-y-0',
	link: 'z-[1] col-span-full place-self-center [&>*]:capitalize md:row-start-[-1] md:row-end-[-1] md:place-self-start',
	description: 'col-span-full text-center md:text-left md:col-start-[-3] md:col-end-[-1] md:row-start-[-1] md:row-end-[-1] place-self-start',
}

const HeroBanner = () => {
	return (
		<div className={`${ sx.banner }`}>
			<div className={`${ sx.box1.wrapper }`}>
				<Typography variant="paragraph">{ heroBanner.smallText }</Typography>
				<Typography variant="h1" className={`${ sx.box1.text2 }`}>
					<span>{ heroBanner.midText }</span>{' '}
					<span className={`${ sx.box1.span2 }`}>{ heroBanner.largeText1 }</span>
				</Typography>
			</div>

			<NextImage src={ heroBanner.image } alt={ heroBanner.image_alt } className={`${ sx.image }`} />

			<NextLink passHref href={ `${ PATHS_ROOT.shop.path }/${ heroBanner.id }` } className={`${ sx.link }`}>
				<Button color="red">{ heroBanner.btnText }</Button>
			</NextLink>

			<Typography variant="paragraph" className={`${ sx.description }`}>{ heroBanner.description }</Typography>
		</div>
	)
}

export { HeroBanner }
// TODO: set data here
