// react-image-gallery
import 'react-image-gallery/styles/css/image-gallery.css'
import { FC } from 'react'
import ImageGallery from 'react-image-gallery'

interface IPGallerySlider {
	slides: Array<string>
	imgAlt: string
	className?: string
}

const carouselSettings = {
	infinite: true,
	showNav: false,
	showFullscreenButton: true,
	useBrowserFullscreen: true,
	showPlayButton: false,
	slideOnThumbnailOver: true,
	thumbnailPosition: 'left' as const,
	/*  */
	// autoPlay: true,
	// slideDuration: 450,
	// slideInterval: 3000,
}

const GallerySlider: FC<IPGallerySlider> = ({ slides=[], imgAlt="", className="" }) => {
	const items = slides?.map((item, idx) => ({
		original: item,
    thumbnail: item,
		originalAlt: imgAlt,
		thumbnailAlt: `${imgAlt}-${idx}`,
		originalClass: 'rig-original',
		thumbnailClass: 'rig-thumbnail hover:border-gray-300 [&.active]:border-red-500',
	}))

	return (
		<div className={`${ className }`}>
			<ImageGallery items={ items } { ...carouselSettings } />
		</div>
	)
}

export { GallerySlider }
