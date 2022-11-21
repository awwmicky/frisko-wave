import { Layer } from '@/components/layout'
import { GallerySlider } from '@/components/shared'
import { ProductDetail, ProductRecommend } from '@/containers'

const ProductItemPage = () => (
	<Layer className="mt-2 mb-10 flex flex-col gap-8">
		<div className="flex gap-4 flex-col relative lg:flex-row">
			<ProductGallery className="flex-[1_1_auto]" />
			<ProductDetail className="flex-[2_2_auto]" />
		</div>
		<ProductRecommend />
	</Layer>
)

const ProductGallery = ({ className="" }) => (
	<div className={`${ className }`}>
		<GallerySlider className="z-10 sticky top-0 -translate-x-1" />
	</div>
)

export default ProductItemPage
