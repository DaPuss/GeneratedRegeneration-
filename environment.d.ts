declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CONTRACT_ADDRESS: string
    }
  }
}

export {}
