import handler from '@/server/api/handler'
import zenginCode from 'zengin-code'

export default handler().get((_, res) => {
  const data = Object.entries(zenginCode).map(([, value]) => ({
    code: value.code,
    name: value.name,
    kana: value.kana,
    hira: value.hira,
    roma: value.roma,
  }))
  res.json(data)
})
