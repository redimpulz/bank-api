import zenginCode from 'zengin-code'
import httpStatus from 'http-status-codes'
import { router, handlerOptions, nextResponseJson } from '@/server/api/edge'

export const config = {
  runtime: 'edge',
}

export default router
  .get((req) => {
    const params = new URL(req.url).searchParams
    const code = params.get('code') ?? ''
    const codes = Object.keys(zenginCode)
    if (!codes.includes(code)) {
      return nextResponseJson(req)('Not Found', {
        status: httpStatus.NOT_FOUND,
      })
    }
    const bank = zenginCode[code]
    const data = {
      code: bank.code,
      name: bank.name,
      kana: bank.kana,
      hira: bank.hira,
      roma: bank.roma,
      branches: Object.entries(bank.branches).map(([, value]) => ({
        code: value.code,
        name: value.name,
        kana: value.kana,
        hira: value.hira,
        roma: value.roma,
      })),
    }
    return nextResponseJson(req)(data)
  })
  .handler(handlerOptions)
