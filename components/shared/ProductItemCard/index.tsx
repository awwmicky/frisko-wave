import NextImage from 'next/image'
import NextLink from 'next/link'
import { FC } from 'react'
import { Typography, Button, Card, CardHeader, CardBody, CardFooter, Chip } from '@material-tailwind/react'
import type { IProductItem } from '@/src/@types'
import { PATHS_ROOT } from '@/src/routes'

interface IPProductItemCard {
	className?: string
	item: IProductItem
}

const ProductItemCard: FC<IPProductItemCard> = ({ className="", item }) => (
	<NextLink passHref href={ `${ PATHS_ROOT.shop.path }/${ item.id }` } className={`block h-full ${ className }`}>
		<Card className="h-full">
			<CardHeader color="red" className="relative h-56">
				<NextImage
					src={ item.image }
					alt={ item.image_alt }
					className="h-full object-contain"
				/>
			</CardHeader>

			<CardBody className="grid grid-cols-2 grid-rows-1 flex-1">
				<Typography variant="h5" className="col-span-full mb-2 text-center">
					{ item.name }
				</Typography>
				<Typography variant="paragraph" className="text-left">
					{ item.category }
				</Typography>
				<Typography variant="paragraph" className="text-right font-bold">
					${ item.price }
				</Typography>
			</CardBody>

			<CardFooter divider className="flex place-content-center py-2">
				{/* <Button color="red" size="sm" className="capitalize">Add To Cart</Button> */}
				{ (item.qty) ? (
					<Chip color="green" value="In Stock" className="!opacity-80" />
				) : (
					<Chip color="red" value="Out of Stock" className="!opacity-80" />
				)}
			</CardFooter>
		</Card>
	</NextLink>
)

export { ProductItemCard }
