import { Children } from 'react'
import { Icon } from '@/components/blocks'

const StarRatings = ({ totalStars=0 }) => (
	<div className="flex">
		{ Children.toArray([...Array(5)].map((_, idx) => (
			((idx+1) <= totalStars) ? <Icon.StarFilled /> : <Icon.StarEmpty />))
		)}
	</div>
)

export { StarRatings }
