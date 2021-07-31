declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_VERCEL_URL: string;
  }
}

declare type PromiseResult<T> = T extends Promise<infer U> ? U : T;
