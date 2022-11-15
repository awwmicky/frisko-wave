import Head from 'next/head'

interface IPMeta {
  title?: string
  description?: string
}

const content = {
	title: '𝚆𝚎𝚋 𝙰𝚙𝚙 | 🐜',
	description: 'Learning to use Next.js',
	keywords: 'next.js, typescript, react, tailwindcss, sanity, stripe',
	url_domain: '',
	url_name: 'http://localhost:3000/',
	img_thumbnail: '',
	img_alt: '🎈',
}

const Meta = ({
  title = content.title,
  description = content.description,
}: IPMeta) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content={content.keywords} />
    {/*  */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={content.url_name} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property="og:image" content="/thumbnail.png" />
    {/*  */}
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" type="image/png" href="/favicon.png" />
  </Head>
)

export { Meta }

/*  
SEO TOOLS
- facebook :: https://developers.facebook.com/tools/debug/
- twitter :: https://cards-dev.twitter.com/validator
- linkedin :: https://www.linkedin.com/post-inspector/
- OG type :: https://ogp.me/#types
---
Max file size: 5 MB
Minimum image dimensions: 1200 (w) x 627 (h)
Recommended ratio: 1.91:1
*/