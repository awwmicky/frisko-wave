import Head from 'next/head'

interface IPMeta {
  title?: string
  description?: string
}

const content = {
	// title: '𝚆𝚎𝚋 𝙰𝚙𝚙 | 🐜',
	title: 'Frisko Wave | eCommerce App',
	description: `Be an audio head, find the product that best fits the way you music needs. You'll rock until the beat drops.`,
	keywords: 'next.js, typescript, react, tailwindcss, zustand, sanity, stripe',
	// url_name: 'http://localhost:3000/',
	url_name: 'https://frisko-wave-app.vercel.app/',
	url_domain: '',
	img_thumbnail: '',
	img_thumbnail_alt: '🖼',
	img_favion: '',
	img_favicon_alt: 'ℹ',
}

const Meta = ({
  title = content.title,
  description = content.description,
}: IPMeta) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		{/*  */}
    <title>{ title }</title>
    <meta name="title" content={ title } />
    <meta name="description" content={ description } />
    <meta name="keywords" content={ content.keywords } />
    {/*  */}
    <meta property="og:title" content={ title } />
    <meta property="og:description" content={ description } />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={ content.url_name } />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property="og:image" content="/thumbnail.png" />
    {/*  */}
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" type="image/png" href="/favicon.png" />
		<link rel="mask-icon" type="image/svg+xml" href="/favicon.svg" />
  </Head>
)

export { Meta }
