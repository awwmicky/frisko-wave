export interface IProductItem {
	id: number
	image: string | any
	image_alt: string
	category: string
	name: string
	price: number
	qty: number
}

export interface IDrawer {
	isOpen: boolean
	toggleDrawer: () => void
}
