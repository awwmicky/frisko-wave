import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
// export type TImages = string | StaticImageData | SanityImageSource
export type TImages = string | SanityImageSource

export interface IBanner {
	image: TImages
	name: string
	model: Record<'current', string>
	smText: string
	mdText: string
	lgText1: string
	lgText2: string
	btnText: string
	description: string
	sales?: {
		discount: string
		startDate: Date | string
		endDate: Date | string
	} | null
}

export interface IProductDetail {
	// images: Array<TImages> | TImages
	images: Array<string> | Array<SanityImageSource> | SanityImageSource
	name: string
	model: Record<'current', string>
	category: 'speakers' | 'headphones' | 'earphones'
	rating?: Record<'totalStars' | 'totalReviews', number> | null
	description: string
	price: number
	qty: number
}

// Pick<IProductDetail, 'images' | 'name' | 'price' | 'qty'>
export interface ICartDetail extends IProductDetail {
	cartQty: number
}
