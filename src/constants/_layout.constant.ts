import { InfoIcon, TechIcon } from '@/components/blocks'

export const headerContent = {
	brand_name: 'Frisko Wave',
}

export const footerContent = {
	text: {
		moreInfo: 'For more info',
		techUsed: 'Technologies used',
		madeBy: 'Concept project made by Michael Alvarez',
	},
	moreInfo: [
		{ title: 'Portfolio', icon: InfoIcon.Portfolio, link: 'https://aww-micky.web.app/' },
		{ title: 'Codebase', icon: InfoIcon.Codebase, link: 'https://github.com/awwmicky/frisko-wave' },
	],
	technologies: [
		{ title: 'Next.js', icon: TechIcon.NextJs, link: 'https://nextjs.org/' },
		{ title: 'TypeScript', icon: TechIcon.TypeScript, link: 'https://typescriptlang.org/' },
		{ title: 'React', icon: TechIcon.React, link: 'https://reactjs.org/' },
		{ title: 'Tailwind CSS', icon: TechIcon.TailwindCss, link: 'https://tailwindcss.com/' },
		{ title: 'Zustand', icon: TechIcon.Zustand, link: 'https://zustand-demo.pmnd.rs/' },
		{ title: 'Sanity', icon: TechIcon.Sanity, link: 'https://sanity.io/' },
		{ title: 'Stripe', icon: TechIcon.Stripe, link: 'https://stripe.com/' },
	],
}
