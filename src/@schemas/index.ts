import * as z from 'zod'

const sanityImageModel = z.object({
	_type: z.string(),
	asset: z.object({
		_ref: z.string(),
		_type: z.string(),
 	})
})

const sanityImageOptions = z.union([
	sanityImageModel,
	z.array(sanityImageModel),
	z.array(z.string()),
	z.string(),
])

const bannerModel = z.object({
	image: sanityImageModel,
	name: z.string().nullable(),
	model: z.object({
		current: z.string(),
	}),
	smText: z.string(),
	mdText: z.string(),
	lgText1: z.string(),
	lgText2: z.string(),
	btnText: z.string(),
	description: z.string(),
	sales: z.object({
		discount: z.string(),
		startDate: z.union([
			z.date(),
			z.string(),
		]),
		endDate: z.union([
			z.date(),
			z.string(),
		]),
	}).nullish(),
})

const productModel = z.object({
	images: sanityImageOptions,
	name: z.string(),
	model: z.object({
		current: z.string(),
	}),
	category: z.enum([ 'speakers', 'headphones', 'earphones' ]),
	rating: z.object({
		totalStars: z.number(),
		totalReviews: z.number(),
	}).nullish(),
	description: z.string(),
	price: z.number(),
	qty: z.number(),
})

/*  */

export const bannerSchema = z.object({
	'heroBannerData': bannerModel.omit({
		mdText: true,
		sales: true,
	}),
	'footerBannerData': bannerModel,
})

export const productSchema = z.array(
	productModel.omit({
		rating: true,
		description: true,
	})
)

export const productModelSchema = z.array(
	productModel.pick({	model: true })
)

export const productItemSchema = z.object({
	'productDetail': productModel.omit({
		model: true,
		category: true,
	}),
	'productGallery': productModel.pick({
		images: true,
		model: true,
	}),
})
