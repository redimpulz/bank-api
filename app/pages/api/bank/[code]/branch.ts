import handler from '@/server/api/handler';
import zenginCode from 'zengin-code';

export default handler().get((req, res) => {
  const code = req.query.code as string;
  const { branches } = zenginCode[code];
  const data = Object.entries(branches).map(([, value]) => ({
    code: value.code,
    name: value.name,
    kana: value.kana,
    hira: value.hira,
    roma: value.roma,
  }));
  res.json(data);
});
