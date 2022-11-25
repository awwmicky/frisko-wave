import { FC } from 'react'
import { GallerySlider } from '@/components/shared'
import type { TImages } from '@/src/@types'

interface IPGallerySlider {
	images: Array<TImages>
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
