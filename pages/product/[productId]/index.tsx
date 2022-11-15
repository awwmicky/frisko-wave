// import React from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@material-tailwind/react'
import { Layer } from '@/components/layout'

const ProductItemPage = () => {
	const { productId } = useRouter().query
	// console.info('[id]', productId)
	return (
		<Layer>
			<Typography variant="h1">Product Item Page : <code>{ productId }</code></Typography>
		</Layer>
	)
}

export default ProductItemPage
