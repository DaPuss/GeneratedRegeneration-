import { useContractWrite } from 'wagmi'
import contractInterface from '../abi/abi.json'
//custom hook that returns a function to call the mint function of the contract using WAGMI hooks

export const useMintContract = () => {
  const addressOrName = process.env.CONTRACT_ADDRESS
    ? process.env.CONTRACT_ADDRESS
    : ''
  const functionName = 'mint'

  const mint = useContractWrite({
    addressOrName,
    contractInterface,
    functionName,

    onMutate({ args, overrides }) {
      console.log('Mutate', { args, overrides })
    },
    onSuccess(data) {
      console.log('Success', data)
    },
  })

  return mint
}
