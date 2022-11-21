import { Icon, InfoIcon, TechIcon } from '@/components/blocks'

export const headerContent = {
	brand_logo: Icon.BrandLogo,
	brand_name: 'Frisco Wave',
}

export const footerContent = {
	text: {
		moreInfo: 'For more info',
		techUsed: 'Technologies used',
		madeBy: 'Concept project made by Michael Alvarez',
	},
	moreInfo: [
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
}
