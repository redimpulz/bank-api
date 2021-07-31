interface Branch {
  code: string;
  name: string;
  kana: string;
  hira: string;
  roma: string;
}

interface Bank {
  code: string;
  name: string;
  kana: string;
  hira: string;
  roma: string;
  branches: {
    [key: string]: Branch;
  };
}

interface ZenginCode {
  [key: string]: Bank;
}

declare module 'zengin-code' {
  const zenginCode: ZenginCode;
  export default zenginCode;
}
