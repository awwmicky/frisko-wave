// import type { StateCreator } from 'zustand'
// import { devtools, persist, PersistOptions } from 'zustand/middleware'
import { toast } from 'react-hot-toast'
import type { ICartDetail, IProductDetail } from '@/src/@types'
import type { TStore } from './'
import * as local from 'idb-keyval'

interface ICartState {
	cartList: Array<ICartDetail>
	isCartOpen: boolean
	totalQuantities: number
	totalPrice: number
}

interface ICartAction {
	toggleCart: () => void
	showCart: () => void
	hideCart: () => void
	emptyCart: () => void

	onAddToCart: (idx: IProductDetail, qty?: number) => void
	onUpdateCartQty: (id: number, qty?: number) => void
	onRemoveFromCart: (idx: number) => void
}

type TCartStore = ICartState & ICartAction

const initialState: ICartState = {
	cartList: [],
	isCartOpen: false,
	totalQuantities: 0,
	totalPrice: 0,
}

const createCartStore: TStore<TCartStore> = (set) => ({
	...initialState,

	toggleCart: () => set((prev) => ({ ...prev, isCartOpen: !prev.isCartOpen }), false, 'toggle_cart'),
	showCart: () => set((prev) => ({ ...prev, isCartOpen: true }), false, 'show_cart'),
	hideCart: () => set((prev) => ({ ...prev, isCartOpen: false }), false, 'hide_cart'),

	emptyCart: async () => {
		await local.del('GLOBAL_STORE')
    console.debug('[local]', await local.get('GLOBAL_STORE'))
		set((prev) => ({ ...prev, ...initialState }), false, 'empty_cart')
	},

	onAddToCart: (product, qty=1) => set((prev) => {
		const cartId = prev.cartList.findIndex((item) => (item.model.current === product.model.current))
		const cartItem = prev.cartList[cartId]

		if (!cartItem) {
			if (!product.qty) {
				toast(`${ product.name }\n is out of stock.`, { icon: '⚠' })
				return prev
			}
			prev.cartList.push({ ...product, cartQty: qty })
		} else {
			if (cartItem.cartQty + qty > product.qty) {
				toast(`${ product.name }\n has a max limit of ${ product.qty }.`, { icon: '⚠' })
				return prev
			}
			prev.cartList[cartId].cartQty += qty
		}

		prev.totalQuantities += qty
		prev.totalPrice += product.price * qty
		toast.success(`${ qty } ${ product.name }\n added to the cart.`)

		return { ...prev }
	}, false, 'on_add_to_cart'),

	onUpdateCartQty: (idx, qty=1) => set((prev) => {
		const cartItem = prev.cartList[idx]

		if (!cartItem) return prev

		const diffQty = Math.abs(cartItem.cartQty - qty)

		if (cartItem.cartQty < qty) {
			prev.cartList[idx].cartQty += diffQty
			prev.totalQuantities += diffQty
			prev.totalPrice += cartItem.price * diffQty
		}

		if (cartItem.cartQty > qty) {
			prev.cartList[idx].cartQty -= diffQty
			prev.totalQuantities -= diffQty
			prev.totalPrice -= cartItem.price * diffQty
		}

		return { ...prev }
	}, false, 'on_update_cart_qty'),

	onRemoveFromCart: (idx) => set((prev) => {
		const cartItem = prev.cartList[idx]

		delete prev.cartList[idx]
		prev.cartList = prev.cartList.filter(Boolean)
		prev.totalQuantities -= cartItem.cartQty
		prev.totalPrice -= (cartItem.price * cartItem.cartQty)

		return { ...prev }
	}, false, 'on_remove_from_cart'),
})

export type { TCartStore }
export { createCartStore }
