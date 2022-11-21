import { Children } from 'react'
import { Typography } from '@material-tailwind/react'
import { Layer } from '@/components/layout'
import { ProductItemCard } from '@/components/shared'
import { productList } from '@/src/constants'

// grid-flow-row-dense
// transition duration-100 hover:scale-105 active:scale-100
const ProductPage = () => {
	return (
		<Layer className="mt-2 mb-10 flex flex-col gap-10">
			<Typography variant="h1" className="text-center font-bold">Product Page</Typography>
			<div className="my-10 grid gap-x-6 gap-y-12 grid-cols-6">
				{ Children.toArray(productList.map((item) => (
					<ProductItemCard item={ item } className="col-span-6 sm:col-span-3 lg:col-span-2" />
				))) }
			</div>
			{/* <div className="py-10 flex flex-wrap gap-x-6 gap-y-16 place-content-start">
				{ Children.toArray(productList.map((item) => (
					<ProductItemCard item={ item } className="flex-auto basis-80" />
				))) }
			</div> */}
		</Layer>
	)
}

export default ProductPage
