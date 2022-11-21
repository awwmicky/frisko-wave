// react-multi-carousel
import 'react-multi-carousel/lib/styles.css'
import { FC, Children, ReactElement } from 'react'
import Carousel from 'react-multi-carousel'
import type { IProductItem } from '@/src/@types'
// import images from './_images.json'

interface IPReactMultiCarousel {
	children?: (item: IProductItem) => ReactElement
	slides?: Array<IProductItem>
}

const screenSize = {
	monitor: {
		breakpoint: { max: 3000, min: 1280 },
    items: 4,
	},
  laptop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const carouselSettings = {
	// ssr: true, // means to render carousel on server-side,
  responsive: screenSize,
	swipeable: false,
  draggable: false,
  showDots: true,
  infinite: true,
  keyBoardControl: false,
  slidesToSlide: 2,
  /*  */
	// autoPlay: props.deviceType !== 'mobile' ? true : false,
	// autoPlay: true,
  autoPlaySpeed: 3000,
  customTransition: 'all 0.5s',
  transitionDuration: 500,
  // deviceType: props.deviceType,
  removeArrowOnDeviceType: ['tablet', 'mobile'],
  containerClass: 'rmc-container z-0 py-6',
	sliderClass: 'rmc-track', // flex gap-2
  itemClass: 'rmc-item px-2 md:px-4', // px-6
  dotListClass: 'rmc-dot-list',
	// renderDotsOutside: true,
}
// gap-x-6 gap-y-12

const CarouselSlider: FC<IPReactMultiCarousel> = ({ children, slides=[] }) => (
	<Carousel { ...carouselSettings }>
		{ Children.toArray(slides.map((item) => children?.(item))) }
		{/* { Children.toArray(slides.map(children)) } */}
	</Carousel>
)

export { CarouselSlider }
