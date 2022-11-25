export const bannerQuery = `{\
	"heroBannerData": *[_type == "banner" && !defined(salesTime)][0],
	"footerBannerData":	*[_type == "banner" && defined(salesTime)][0],
}\
`

export const productQuery = `\
*[_type == "product"] {
	images[0],
	name,
	category,
	model {
		current,
	},
	price,
	qty,
}\
`

export const productModelQuery = `\
*[_type == "product"] {
	model {
		current,
	}
}\
`

export const productItemQuery = `{\
	"productDetail": *[_type == "product" &&	model.current == $modelId] {
		images[0],
		name,
		rating,
		description,
		price,
		qty,
	}[0],
	"productGallery": *[_type == "product" &&	model.current == $modelId] {
		"images": images[].asset -> url,
		model {
			current,
		}
	}[0],
}\
`
