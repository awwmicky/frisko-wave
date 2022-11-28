import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import { Layer } from '@/components/layout'
import * as PItem from '@/containers/product'
import type { IProductDetail } from '@/src/@types'
import { productModelQuery, productQuery, productItemQuery } from '@/src/@queries'
import { productModelSchema, productSchema, productItemSchema } from '@/src/@schemas'
import { sanityQuery } from '@/src/lib'

interface IPProductItem {
	productList: Array<Omit<IProductDetail, 'rating' | 'description'>>
	productGallery: Pick<IProductDetail, 'images' | 'model'>
	productDetail: Omit<IProductDetail, 'model' | 'category'>
}

interface IStaticParams extends ParsedUrlQuery {
	modelId: string
}

const ProductItemPage: NextPage<IPProductItem> = ({
	productList,
	productGallery,
	productDetail
}) => (
	<Layer className="mt-2 mb-10 flex flex-col gap-8">
		<div className="s flex gap-4 flex-col relative lg:flex-row lg:min-h-[50vh]">
			<PItem.ProductGallery
				images={ productGallery.images }
				imgAlt={ productGallery.model.current }
				className="flex-[1] max-w-lg mx-auto"
			/>
			<PItem.ProductDetail
				item={ productDetail }
				className="flex-[2]"
			/>
		</div>
		<PItem.ProductRecommend list={ productList } />
	</Layer>
)


const getStaticPaths: GetStaticPaths = async () => {
  const productList = await sanityQuery.fetch(productModelQuery)
		.then((result) => productModelSchema.parse(result))
  const paths = productList.map((item) => ({ params: { modelId: item.model.current }}))

  return { paths, fallback: 'blocking', }
}

const getStaticProps: GetStaticProps<IPProductItem, IStaticParams> = async (ctx) => {
	const { modelId } = ctx.params!
	const queryParams = { modelId }

	const productList = await sanityQuery.fetch(productQuery)
		.then((result) => productSchema.parse(result))
  const productItem = await sanityQuery.fetch(productItemQuery, queryParams)
		.then((result) => productItemSchema.parse(result))
	const { productGallery, productDetail } = productItem

	// logger.info(productDetail, '[detail]')

	if (!modelId || !productList || !productGallery || !productDetail) return {
		notFound: true, props: null,
	}

  return {
    props: { productList,	productGallery, productDetail },
  }
}

export default ProductItemPage
export { getStaticPaths, getStaticProps }
