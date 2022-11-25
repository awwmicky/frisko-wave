import { imageExample } from '../assets'
import { images } from './_images'

export const productList = [
	{ images: [ imageExample ], model: { current: 'bpp-50' }, category: 'speakers' as const, name: 'Boast PartyPal 50', price: 56, qty: 1, },
	{ images: [ imageExample ], model: { current: 'br-451' }, category: 'headphones' as const, name: 'Boast Rockerz 451', price: 49, qty: 3, },
	{ images: [ imageExample ], model: { current: 'bi-1000-d' }, category: 'headphones' as const, name: 'Boast Immortal 1000 D', price: 52, qty: 0, },
	{ images: [ imageExample ], model: { current: 'bbh-242' }, category: 'earphones' as const, name: 'Boast BassHeads 242', price: 34, qty: 5, },
	{ images: [ imageExample ], model: { current: 'bad-281-p' }, category: 'earphones' as const, name: 'Boast AirDopes 281 Pro', price: 69, qty: 5, },
	{ images: [ imageExample ], model: { current: 'bbh-900' }, category: 'headphones' as const, name: 'Boast BassHeads 900', price: 49, qty: 2, },
	{ images: [ imageExample ], model: { current: 'br-333' }, category: 'earphones' as const, name: 'Boast Rockerz 333', price: 55, qty: 0, },
]

export const productDetail = {
	images: images, // x4
	model: { current: 'bi-1000-d' },
	name: 'Boast Immortal 1000 D',
	category: 'headphones' as const,
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
	price: 52,
	qty: 6,
}

export const cartList = [
	productList[2],
	productList[1],
]
