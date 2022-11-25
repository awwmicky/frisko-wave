import type { NextApiRequest, NextApiResponse } from 'next'
import { StatusCodes } from 'http-status-codes'

const handleIndexRoute = (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  res.status(StatusCodes.OK).json({
    name: 'index route'
  })
}

export default handleIndexRoute
