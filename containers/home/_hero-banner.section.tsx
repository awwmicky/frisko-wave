// import NextImage from 'next/image'
import NextLink from 'next/link'
import { FC } from 'react'
import { Typography, Button } from '@material-tailwind/react'
import type { IBanner } from '@/src/@types'
import { urlSrc } from '@/src/lib'
import { PATHS_ROOT } from '@/src/routes'

interface IPHeroBanner {
	product: Omit<IBanner, 'name' | 'mdText' | 'salesDiscount' | 'salesTime'>
}

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

const HeroBanner: FC<IPHeroBanner> = ({ product }) => (
	<div className={`${ sx.banner }`}>
		<div className={`${ sx.box1.wrapper }`}>
			<Typography variant="paragraph">{ product.smText }</Typography>
			<Typography variant="h1" className={`${ sx.box1.text2 }`}>
				<span>{ product.lgText1 }</span>{' '}
				<span className={`${ sx.box1.span2 }`}>{ product.lgText2 }</span>
			</Typography>
		</div>

		<img src={ urlSrc(product.image).url() } alt={ product.model.current } className={`${ sx.image }`} />

		<NextLink passHref href={ `${ PATHS_ROOT.shop.path }/${ product.model.current }` } className={`${ sx.link }`}>
			<Button color="red">{ product.btnText }</Button>
		</NextLink>

		<Typography variant="paragraph" className={`${ sx.description }`}>{ product.description }</Typography>
	</div>
)

export { HeroBanner }
