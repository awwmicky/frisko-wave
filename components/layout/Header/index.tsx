// import React from 'react'
import { Typography, IconButton } from '@material-tailwind/react'
import { Icon } from '@/components/blocks'
import { Layer } from '../Layer'

const content = {
	brand_name: 'Frisco Wave',
	icon: () => <Icon.Shopping size={20} />,
}

const Header = () => (
  <header>
    <Layer variant="header">
      <Typography><code>{content.brand_name}</code></Typography>
			<IconButton variant="outlined" color="red"><content.icon /></IconButton>
    </Layer>
  </header>
)

export { Header }
