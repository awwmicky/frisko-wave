import { Layer } from '@/components/layout'
import * as Home from '@/containers/home'

const HomePage = () => (
	<Layer className="my-10 flex flex-col gap-20">
		<Home.HeroBanner />
		<Home.ProductList />
		<Home.FooterBanner />
	</Layer>
)

export default HomePage
