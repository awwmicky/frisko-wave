import type { NextPage, GetServerSideProps } from 'next'
import { Layer } from '@/components/layout'
import * as Home from '@/containers/home'
import type { IBanner, IProductDetail } from '@/src/@types'
import { bannerQuery, productQuery } from '@/src/@queries'
import { sanityQuery } from '@/src/lib'

interface IPHome {
	productList: Array<Omit<IProductDetail, 'rating' | 'description'>>
	heroBannerData: Omit<IBanner, 'name' | 'mdText' | 'salesDiscount' | 'salesTime'>
	footerBannerData: Omit<IBanner, 'name'>
}

const HomePage: NextPage<IPHome> = ({
 productList,
 heroBannerData,
 footerBannerData
}) => (
	<Layer className="my-10 flex flex-col gap-20">
		<Home.HeroBanner product={ heroBannerData } />
		<Home.ProductList list={ productList } />
		<Home.FooterBanner product={ footerBannerData } />
	</Layer>
)


const getServerSideProps: GetServerSideProps = async () => {
	const productList = await sanityQuery.fetch(productQuery) as Pick<IPHome, 'productList'>
	const bannerData = await sanityQuery.fetch(bannerQuery) as Pick<IPHome, 'heroBannerData' | 'footerBannerData'>
	const { heroBannerData, footerBannerData } = bannerData

	if (!productList || !heroBannerData || !footerBannerData) return {
		notFound: true, props: null,
	}

	return {
		props: { productList, heroBannerData, footerBannerData, },
	}
}

export default HomePage
export { getServerSideProps }
