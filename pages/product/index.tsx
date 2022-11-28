import type { NextPage, GetServerSideProps } from 'next'
import { Children } from 'react'
import { Typography } from '@material-tailwind/react'
import { Layer } from '@/components/layout'
import { ProductItemCard } from '@/containers'
import type { IProductDetail } from '@/src/@types'
import { productQuery } from '@/src/@queries'
import { productSchema } from '@/src/@schemas'
import { sanityQuery } from '@/src/lib'

interface IPProduct {
	productList: Array<Omit<IProductDetail, 'rating' | 'description'>>
}

const ProductPage: NextPage<IPProduct> = ({ productList }) => {
	return (
		<Layer className="mt-2 mb-10 flex flex-col gap-10">
			<Typography variant="h1" className="text-center font-bold">
				Product Page
			</Typography>

			<div className="my-10 grid gap-x-6 gap-y-12 grid-cols-12">
				{ Children.toArray(productList.map((item) => (
					<ProductItemCard
						item={ item }
						className="col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-3"
					/>
				)))}
			</div>
		</Layer>
	)
}


const getServerSideProps: GetServerSideProps = async () => {
	const productList = await sanityQuery.fetch(productQuery)
		.then((result) => productSchema.parse(result))

	if (!productList) return {
		notFound: true, props: null,
	}

	return {
		props: { productList },
	}
}

export default ProductPage
export { getServerSideProps }
