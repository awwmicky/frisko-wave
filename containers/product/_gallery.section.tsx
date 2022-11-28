import { FC } from 'react'
import { GallerySlider } from '@/components/shared'

interface IPGallerySlider {
	images: Array<string>
	imgAlt: string
	className?: string
}

const ProductGallery: FC<IPGallerySlider> = ({ images=[], imgAlt, className="" }) => (
	<div className={`${ className }`}>
		<GallerySlider
			slides={ images }
			imgAlt={ imgAlt }
			className="z-10 sticky top-16 -translate-x-1"
		/>
	</div>
)

export { ProductGallery }
