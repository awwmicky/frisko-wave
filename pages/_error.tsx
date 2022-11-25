import type { NextPage, NextPageContext } from 'next'
import NextLink from 'next/link'
import type { ReactElement, ReactNode } from 'react'
import { Typography, Button } from '@material-tailwind/react'
import { Meta, Layer } from '@/components/layouts'
import { PATHS_ROOT } from '@/src/routes'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface IPError {
  statusCode?: number
}

const Error: NextPageWithLayout<IPError> = ({ statusCode }) => (
	<div className="h-full flex gap-4 flex-col place-content-center place-items-center">
		<Typography variant="h1">Error :: <code>{statusCode}</code></Typography>

		<Typography variant="lead">We are sorry! There was a problem</Typography>

		<NextLink passHref href={ PATHS_ROOT.home.path }>
			<Button color="red">Go back home</Button>
		</NextLink>
	</div>
)

Error.getLayout = (page: ReactElement) => (
  <>
    <Meta title="𝙴𝚛𝚛𝚘𝚛 𝙿𝚊𝚐𝚎 | ✖" />
    <Layer className="s1">{ page }</Layer>
  </>
)

Error.getInitialProps = ({ res, err }: NextPageContext) => ({
  statusCode: res?.statusCode || err?.statusCode || 404
})

export default Error
