import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityQuery = sanityClient({
	apiVersion: '2022-03-10',
  useCdn: process.env.NODE_ENV === 'production',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(sanityQuery)

export const urlSrc = (source: SanityImageSource) => (
	builder.image(source)
)
