// import NextImage from 'next/image'
import NextLink from 'next/link'
import { FC } from 'react'
import { Typography, Button } from '@material-tailwind/react'
import type { IBanner } from '@/src/@types'
import { PATHS_ROOT } from '@/src/routes'
import { urlSrc } from '@/src/lib'
import { formatDate } from '@/src/utils'

interface IPFooterBanner {
	product: Omit<IBanner, 'name'>
}

const sx = {
	banner: 'relative bg-red-500 rounded-xl p-8 md:pt-20 grid gap-4 grid-cols-6',
	box1: {
		wrapper: 'col-span-full flex gap-2 md:flex-col flex-wrap md:flex-nowrap md:col-span-2',
		text2: 'basis-full order-[-1] md:order-2 !text-white md:text-7xl font-bold uppercase text-shadow-md [&>*]:inline-block',
		text3: 'md:order-3',
	},
	image: 'col-span-full sm:col-start-2 sm:col-end-[-2] md:col-start-3 md:col-end-[-3] md:scale-150 lg:absolute xl:scale-100 2xl:translate-y-[-20%]',
	box2: {
		wrapper: 'col-span-full flex flex-col text-center md:text-left md:col-start-[-3] md:col-end-[-1]',
		text2: 'font-bold md:text-5xl md:translate-x-[-0.075ch]',
		description: 'mb-4',
		link: 'z-[1] mt-auto [&>*]:text-red-500 [&>*]:capitalize',
	},
}

const FooterBanner: FC<IPFooterBanner> = ({ product }) => (
	<div className={`${ sx.banner }`}>
		<div className={`${ sx.box1.wrapper }`}>
			<Typography variant="small" color="white">{ product.sales?.discount }</Typography>
			<Typography variant="h2" className={`${ sx.box1.text2 }`}>
				<span className="translate-x-[-0.1ch]">{ product.lgText1 }</span>{' '}
				<span className="translate-x-[-0.05ch]">{ product.lgText2 }</span>
			</Typography>
			<Typography variant="small" color="white" className={`${ sx.box1.text3 }`}>
				{ formatDate(product.sales?.startDate as string, product.sales?.endDate as string) }
			</Typography>
		</div>

		<img
			src={ urlSrc(product.image).url() }
			alt={ product.model.current }
			className={`${ sx.image }`}
		/>

		<div className={`${ sx.box2.wrapper }`}>
			<Typography variant="small" color="white">{ product.smText }</Typography>
			<Typography variant="h2" color="white" className={`${ sx.box2.text2 }`}>{ product.mdText }</Typography>
			<Typography variant="paragraph" color="white" className={`${ sx.box2.description }`}>{ product.description }</Typography>

			<NextLink passHref href={ `${ PATHS_ROOT.shop.path }/${ product.model.current }` } className={`${ sx.box2.link }`}>
				<Button color="white">{ product.btnText }</Button>
			</NextLink>
		</div>
	</div>
)

export { FooterBanner }
