import { Children } from 'react'
import { Typography } from '@material-tailwind/react'
import { InfoIcon, TechIcon } from '@/components/blocks'
import { Layer } from '../Layer'

const content = {
	resource: [
		{ title: 'Portfolio', link: 'https://aww-micky.web.app/', icon: InfoIcon.Portfolio },
		{ title: 'Codebase', link: 'https://github.com/awwmicky/frisco-wave', icon: InfoIcon.Codebase },
	],
	technologies: [
		{ title: 'Next.js', link: 'https://nextjs.org/', icon: TechIcon.NextJs },
		{ title: 'TypeScript', link: 'https://typescriptlang.org/', icon: TechIcon.TypeScript },
		{ title: 'React', link: 'https://reactjs.org/', icon: TechIcon.React },
		{ title: 'Tailwind CSS', link: 'https://tailwindcss.com/', icon: TechIcon.TailwindCss },
		{ title: 'Sanity', link: 'https://sanity.io/', icon: TechIcon.Sanity },
		{ title: 'Stripe', link: 'https://stripe.com/', icon: TechIcon.Stripe },
	],
	name: 'Concept project made by Michael Alvarez',
}

const Footer = () => (
  <footer>
    <Layer className="py-2">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:place-content-between">
				<div className="flex flex-col sm:order-2">
					<b className="text-center sm:text-right">For more info</b>
					<div className="flex gap-2 place-content-center sm:place-content-end">
						{ Children.toArray(content.resource.map((item) => (
							<a title={ item.title } href={ item.link } className="relative h-full flex place-items-center after:absolute after:top-[110%] after:block after:w-full after:border-b-4 hover:after:border-b-black active:after:border-b-blue-gray-200 after:border-b-transparent">
								<item.icon />
							</a>
						))) }
					</div>
				</div>
				<div className="flex flex-col sm:order-1">
					<b className="text-center sm:text-left">Technologies used</b>
					<div className="flex gap-2 place-items-center place-content-center sm:place-content-start">
						{ Children.toArray(content.technologies.map((item) => (
							<a title={ item.title } href={ item.link } className="relative h-full flex place-items-center after:absolute after:top-[110%] after:block after:w-full after:border-b-4 hover:after:border-b-black active:after:border-b-blue-gray-200 after:border-b-transparent">
								<item.icon />
							</a>
						))) }
					</div>
				</div>
			</div>
			<Typography variant="small">
				<code className="block text-center">{ content.name }</code>
			</Typography>
    </Layer>
  </footer>
)

export { Footer }
