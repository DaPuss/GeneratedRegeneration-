declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CONTRACT_ADDRESS: string
      NEXT_PUBLIC_ALCHEMY_API: string
    }
  }
}

export {}
