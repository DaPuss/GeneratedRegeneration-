import { useContractRead } from 'wagmi'
import contractInterface from '../abi/abi.json'

export const useCurrentSupply = () => {
  const addressOrName = process.env.CONTRACT_ADDRESS || ''
  const functionName = 'totalSupply'

  const totalSupply = useContractRead({
    addressOrName,
    contractInterface,
    functionName,
    onSuccess(data) {
      console.log('Success', data)
    },
  })

  return totalSupply
}
