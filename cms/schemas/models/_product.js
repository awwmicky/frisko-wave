const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{
        type: 'image'
      }],
      options: {
        hotspot: true,
      }
    },
		{
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Model (Slug)',
      name: 'model',
      type: 'slug',
      options: {
        source: 'name',
				slugify: (input) => input
					.slice(0, 90)
					.match(/[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g)
					.reduce((acc, curr, idx, arr) => {
						if (Number(curr)) acc += (!!arr[idx+1]) ? `-${curr}-` : `-${curr}`
						else acc += curr.charAt(0).toLowerCase()
						return acc
					}, '')
      }
    },
		{
			title: 'Category',
			name: 'category',
			type: 'string',
			options: {
				layout: 'dropdown',
				list: [
					{
						title: 'Speakers',
						value: 'speakers',
					},
					{
						title: 'Headphones',
						value: 'headphones',
					},
					{
						title: 'Earphones',
						value: 'earphones',
					},
				],
			},
		},
		{
			title: 'Rating',
			name: 'rating',
			type: 'object',
			fields: [
				{
					title: 'Total Stars',
					name: 'totalStars',
					type: 'number',
					validation: Rule => Rule
						.min(0)
						.max(5)
						.warning('Star ratings must be between 0-5')
				},
				{
					title: 'Total Reviews',
					name: 'totalReviews',
					type: 'number',
				},
			],
		},
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
		{
      title: 'Price',
      name: 'price',
      type: 'number',
    },
		{
			title: 'Quantity',
			name: 'qty',
			type: 'number',
			validation: Rule => Rule
				.min(0)
				.warning('Quantity should never go below 0')
		},
  ]
}

export { product }
