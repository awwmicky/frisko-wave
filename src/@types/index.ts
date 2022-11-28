// export type TImages = string | StaticImageData | SanityImageSource
export type TImages = string | any

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
	salesDiscount: string
	salesTime: string
}

export interface IProductDetail {
	images: TImages | Array<TImages>
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
