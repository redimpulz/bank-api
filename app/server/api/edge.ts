import httpStatus from 'http-status-codes'
import { createEdgeRouter } from 'next-connect'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

import cors from 'edge-cors'

export const router = createEdgeRouter<NextRequest, NextFetchEvent>()

export const handlerOptions = {
  onError: (err: unknown, req: NextRequest, _: NextFetchEvent) => {
    console.log(err)
    return nextResponseJson(req)('Internal Server Error', {
      status: httpStatus.INTERNAL_SERVER_ERROR,
    })
  },
  onNoMatch: (req: NextRequest, _: NextFetchEvent) => {
    const { method } = req
    return nextResponseJson(req)(`Method ${method} Not Allowed`, {
      status: httpStatus.METHOD_NOT_ALLOWED,
    })
  },
}

export const nextResponseJson =
  (req: NextRequest) => (body: any, init?: ResponseInit) => {
    return cors(req, NextResponse.json(body, init))
  }
