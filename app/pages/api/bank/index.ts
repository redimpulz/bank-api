import zenginCode from 'zengin-code'
import { router, handlerOptions, nextResponseJson } from '@/server/api/edge'

export const config = {
  runtime: 'edge',
}

export default router
  .get((req) => {
    const data = Object.entries(zenginCode).map(([, value]) => ({
      code: value.code,
      name: value.name,
      kana: value.kana,
      hira: value.hira,
      roma: value.roma,
    }))
    return nextResponseJson(req)(data)
  })
  .handler(handlerOptions)
