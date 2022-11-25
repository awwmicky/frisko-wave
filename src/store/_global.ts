import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { toast } from 'react-hot-toast'
import type { ICartDetail, IProductDetail } from '../@types'

interface IState {
	cartList: Array<ICartDetail>
	isCartOpen: boolean
	totalQuantities: number
	totalPrice: number
}

interface IAction {
	toggleCart: () => void
	showCart: () => void
	hideCart: () => void

	resetCart: () => void
	onUpdateCartQty: (id: number, qty?: number) => void
	onAddToCart: (idx: IProductDetail, qty?: number) => void
	onRemoveFromCart: (idx: number) => void
}

type TGlobalStore = IState & IAction
type TMiddleware = [ ['zustand/devtools', never] ]

const useGlobalStore = create<TGlobalStore, TMiddleware>( devtools((set) => ({
	cartList: [],
	isCartOpen: false,
	totalQuantities: 0,
	totalPrice: 0,

	toggleCart: () => set((prev) => ({ ...prev, isCartOpen: !prev.isCartOpen })),
	showCart: () => set((prev) => ({ ...prev, isCartOpen: true })),
	hideCart: () => set((prev) => ({ ...prev, isCartOpen: false })),

	resetCart: () => set((prev) => ({
		...prev,
		cartList: [],
		totalQuantities: 0,
		totalPrice: 0,
	})),

	onUpdateCartQty: (idx, qty=1) => set((prev) => {
		const cartItem = prev.cartList[idx]

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
	}),

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
	}),

	onRemoveFromCart: (idx) => set((prev) => {
		const cartItem = prev.cartList[idx]

		delete prev.cartList[idx]
		prev.cartList = prev.cartList.filter(Boolean)
		prev.totalQuantities -= cartItem.cartQty
		prev.totalPrice -= (cartItem.price * cartItem.cartQty)

		return { ...prev }
	}),
}), {
	name: 'GLOBAL_STORE',
}))

export { useGlobalStore }
