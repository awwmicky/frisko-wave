import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import { Layer } from '@/components/layout'
import * as PItem from '@/containers/product'
import type { IProductDetail } from '@/src/@types'
import { productModelQuery, productItemQuery, productQuery } from '@/src/@queries'
import { logger, sanityQuery } from '@/src/lib'

interface IPProductItem {
	productList: Array<Omit<IProductDetail, 'rating' | 'description'>>
	productDetail: Omit<IProductDetail, 'model' | 'category'>
	productGallery: Pick<IProductDetail, 'images' | 'model'>
}

interface IStaticParams extends ParsedUrlQuery {
	modelId: string
}

const ProductItemPage: NextPage<IPProductItem> = ({
	productList,
	productDetail,
	productGallery
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
  const productList = await sanityQuery.fetch(productModelQuery) as Array<Pick<IProductDetail, 'model'>>
  const paths = productList.map((item) => ({ params: { modelId: item.model.current }}))

  return { paths, fallback: 'blocking', }
}

const getStaticProps: GetStaticProps<IPProductItem, IStaticParams> = async (ctx) => {
	const { modelId } = ctx.params!
	const queryParams = { modelId }

	const productList = await sanityQuery
		.fetch(productQuery) as Array<Omit<IProductDetail, 'rating' | 'description'>>

  const productItem = await sanityQuery
		.fetch(productItemQuery, queryParams) as Pick<IPProductItem, 'productDetail' | 'productGallery'>
	const { productDetail, productGallery } = productItem

	// logger.info(productItem)

	if (!modelId || !productList || !productDetail || !productGallery) return {
		notFound: true, props: null,
	}

  return {
    props: { productList,	productDetail, productGallery },
  }
}

// as Array<IProductDetail>
// as Pick<IPProductItem, 'productList'>
// as Array<Omit<IProductDetail, 'rating' | 'description'>>

export default ProductItemPage
export { getStaticPaths, getStaticProps }
