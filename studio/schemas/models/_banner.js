const banner = {
  title: 'Banner',
  name: 'banner',
  type: 'document',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
		{
      title: 'Name',
      name: 'name',
      type: 'string',
			validation: (Rule) => Rule.required(),
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
      title: 'Small Text',
      name: 'smText',
      type: 'string',
    },
    {
      title: 'Mid Text',
      name: 'mdText',
      type: 'string',
    },
    {
      title: 'Large Text 1',
      name: 'lgText1',
      type: 'string',
    },
    {
      title: 'Large Text 2',
      name: 'lgText2',
      type: 'string',
    },
		{
      title: 'Button Text',
      name: 'btnText',
      type: 'string',
    },
		{
      title: 'Description',
      name: 'description',
      type: 'text',
    },
		{
			title: 'Sales',
			name: 'sales',
			type: 'object',
			fields: [
				{
					title: 'Discount',
					name: 'discount',
					type: 'string',
				},
				{
					title: 'Start Date',
					name: 'startDate',
					type: 'date',
					options: {
						dateFormat: 'MMM D',
					},
				},
				{
					title: 'End Date',
					name: 'endDate',
					type: 'date',
					options: {
						dateFormat: 'MMM D',
					},
				},
			],
		},
  ],
}

export { banner }
