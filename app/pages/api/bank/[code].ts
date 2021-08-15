import handler from '@/server/api/handler';
import zenginCode from 'zengin-code';

export default handler().get((req, res) => {
  const code = req.query.code.toString();

  const codes = Object.keys(zenginCode);
  if (!codes.includes(code)) {
    res.status(400).end();
    return;
  }

  const bank = zenginCode[code];
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
  };
  res.json(data);
});
