import {useEffect} from 'react'
import { useContractWrite } from 'wagmi'
import contractInterface from '../abi/abi.json'
import { useContractRead } from 'wagmi'
import {  ethers, BigNumber } from 'ethers'
//custom hook that returns a function to call the mint function of the contract using WAGMI hooks

export const useWeb3 = () => {
  const addressOrName = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  const mintPrice = 0.09
  const writeMint = useContractWrite({
    addressOrName,
    contractInterface,
    functionName: 'mintMany',

    onMutate({ args, overrides }) {
      console.log('Mutate', { args, overrides })
    },
  })

  const readTotalSupply = useContractRead({
    addressOrName,
    contractInterface,
    functionName: 'totalSupply',
  })

  const getCurrentSupply = () => {
    const currentSupply = readTotalSupply.isSuccess?  BigNumber.from(readTotalSupply.data).toNumber() : 0;
    return currentSupply
  }

  const mintNft = (mintAmount: number) => {
    if(mintAmount < 1) return;

    const {write, data, isError, isLoading, isSuccess, error} = writeMint;
    const totalCost = getMintPrice(mintAmount);
    
    write({
      args: [mintAmount],
      overrides: {
        value: ethers.utils.parseEther(totalCost),
      },
    })
    return {isError, data, isSuccess, isLoading, error}
  }

  const getMintPrice = (mintAmount: number) => {
    const totalPrice = (mintAmount * mintPrice * 100) / 100
    return isNaN(totalPrice) ? '0.00' : totalPrice.toFixed(2)
  }


  useEffect(() => {
    readTotalSupply.refetch()
  }, [mintNft])
  

  const totalSupply = getCurrentSupply()

  return {mintNft, getMintPrice, totalSupply}
}
