import { FC, Children, ReactElement } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import type { IProductItemCard } from '@/src/@types'

interface IPCarouselSlider {
	children?: (item: IProductItemCard) => ReactElement
	data?: Array<IProductItemCard>
}

const screenSize = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
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

const carouselProps = {
  // ssr: true, // means to render carousel on server-side,
	swipeable: false,
  draggable: false,
  showDots: true,
  infinite: true,
  responsive: screenSize,
  slidesToSlide: 2,
  // autoPlay: props.deviceType !== 'mobile' ? true : false,
  autoPlaySpeed: 1000,
  keyBoardControl: true,
  customTransition: 'all 0.5s',
  transitionDuration: 500,
  // deviceType: props.deviceType,
  removeArrowOnDeviceType: ['tablet', 'mobile'],
  containerClass: 'rmc-container py-6',
	sliderClass: 'rmc-track',
  itemClass: 'rmc-item px-2',
  dotListClass: 'rmc-dot-list',
}

const CarouselSlider: FC<IPCarouselSlider> = ({ children, data=[] }) => (
	<Carousel { ...carouselProps }>
		{ Children.toArray(data.map((item) => children?.(item))) }
	</Carousel>
)

export { CarouselSlider }
