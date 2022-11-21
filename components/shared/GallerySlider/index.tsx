// react-image-gallery
import 'react-image-gallery/styles/css/image-gallery.css'
import { FC } from 'react'
import ImageGallery from 'react-image-gallery'
import type { IProductItem } from '@/src/@types'
import { images } from '@/src/constants'

interface IPGallerySlider {
	// children?: (item: IProductItem) => ReactElement
	slides?: Array<IProductItem>
	className?: string
}

const carouselSettings = {
	items: images,
	infinite: true,
	showNav: false,
	showFullscreenButton: true,
	useBrowserFullscreen: true,
	showPlayButton: false,
	// showBullets: true,
	// showIndex: false,
	// slideOnThumbnailOver: true,
	// disableThumbnailScroll: true,
	thumbnailPosition: 'left' as 'left',
	/*  */
	// autoPlay: true,
	// slideDuration: 450,
	// slideInterval: 3000,
}

const GallerySlider: FC<IPGallerySlider> = ({ className="" }) => (
	<div className={`${ className }`}>
		<ImageGallery { ...carouselSettings } />
	</div>
)

export { GallerySlider }
