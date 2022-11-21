import { imageExample } from '../assets'

export const productList = [
	{ id: 1, image: imageExample, image_alt: 'bpp-50', category: 'speakers', name: 'Boast PartyPal 50', price: 56, qty: 1, },
	{ id: 2, image: imageExample, image_alt: 'br-451', category: 'headphones', name: 'Boast Rockerz 451', price: 49, qty: 3, },
	{ id: 3, image: imageExample, image_alt: 'bi-1000d', category: 'headphones', name: 'Boast Immortal 1000D', price: 50, qty: 0, },
	{ id: 4, image: imageExample, image_alt: 'bbh-242', category: 'earphones', name: 'Boast BassHeads 242', price: 34, qty: 5, },
	{ id: 5, image: imageExample, image_alt: 'bad-281p', category: 'earphones', name: 'Boast AirDopes 281 Pro', price: 69, qty: 5, },
	{ id: 6, image: imageExample, image_alt: 'bbh-900', category: 'headphones', name: 'Boast BassHeads 900', price: 49, qty: 2, },
	{ id: 7, image: imageExample, image_alt: 'br-333', category: 'earphones', name: 'Boast Roackerz 333', price: 55, qty: 0, },
]

export const cartList = [
	productList[2],
	productList[1],
]

export const productItem3 = {
	id: 3,
	images: [ '/' ], // x4
	image_alt: 'bi-1000d',
	category: 'headphones',
	name: 'Boast Immortal 1000D',
	rating: {
		totalStars: 4,
		totalReviews: 20,
	},
	description: `\
	The game begins here.\
	With Immortal 1000D gaming headphones, don't just play the game - feel it, live it, and own it.\
	Level up your audio game with 7.1 Channel Surround Sound and Dolby Atmos that unleashes the winning beast inside you.\
	Equipped with 50mm drivers, get a powerful 360° gaming experience like no other.\
	Now, you can conquer every game with a sound that provides position accuracy and abstracts.\
	Your everyday gaming is now double the fun with its RGB LED lights.\
	Its lightweight and ergonomic build ensure you have a comfortable bender with your friend.\
	Don't look further, level up with Boast Immortal 1000D headphones.\
	`,
	price: 50,
	qty: 6,
	btnText1: 'Add To Cart',
	btnText2: 'Buy Now',
}
