import { Children } from 'react'
import { Typography } from '@material-tailwind/react'
import { footerContent } from '@/src/constants'
import { Layer } from '../'

const Footer = () => (
  <footer>
    <Layer className="py-2">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:place-content-between">
				<div className="flex flex-col sm:order-2">
					<Typography variant="paragraph" className="text-center sm:text-right font-bold">
						{ footerContent.text.moreInfo }
					</Typography>
					<div className="flex gap-2 place-content-center sm:place-content-end">
						{ Children.toArray(footerContent.moreInfo.map((item) => (
							<a title={ item.title } href={ item.link } className="relative h-full flex place-items-center after:absolute after:top-[110%] after:block after:w-full after:border-b-4 hover:after:border-b-black active:after:border-b-blue-gray-200 after:border-b-transparent">
								<item.icon />
							</a>
						))) }
					</div>
				</div>

				<div className="flex flex-col sm:order-1">
					<Typography variant="paragraph" className="text-center sm:text-left font-bold">
						{ footerContent.text.techUsed }
					</Typography>
					<div className="flex gap-2 place-items-center place-content-center sm:place-content-start">
						{ Children.toArray(footerContent.technologies.map((item) => (
							<a title={ item.title } href={ item.link } className="relative h-full flex place-items-center after:absolute after:top-[110%] after:block after:w-full after:border-b-4 hover:after:border-b-black active:after:border-b-blue-gray-200 after:border-b-transparent">
								<item.icon />
							</a>
						))) }
					</div>
				</div>
			</div>

			<Typography variant="small">
				<code className="block text-center">{ footerContent.text.madeBy }</code>
			</Typography>
    </Layer>
  </footer>
)

export { Footer }
