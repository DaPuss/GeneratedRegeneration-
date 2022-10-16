import { useEffect } from 'react'
import { useContractWrite } from 'wagmi'
import contractInterface from '../abi/abi.json'
import { useContractRead } from 'wagmi'
import { ethers, BigNumber } from 'ethers'
import { useToast } from '@chakra-ui/react'
import { useAccount } from 'wagmi'

//custom hook that returns a function to call the mint function of the contract using WAGMI hooks

export const useWeb3 = () => {
  const { address } = useAccount()
  const toast = useToast()
  const addressOrName = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  const mintPrice = 0.05
  const writeMint = useContractWrite({
    addressOrName,
    contractInterface,
    functionName: 'mint',
    onError(error) {
      toast({
        title: 'Error.',
        description: formatError(error.message),
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    },
    onSuccess() {
      toast({
        title: 'Successful.',
        description: "You've minted your NFT.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    },
  })

  const formatError = (error: string): string => {
    if (error.includes('Max mint')) {
      return "You've reached the maximum allowence for this wallet."
    }
    if (error.includes('Insufficient funds')) {
      return 'Insufficient funds provided for this transaction.'
    }
    if (error.includes('Max supply reached')) {
      return 'The maximum supply has been meet, better luck next time.'
    }
    return error
  }

  const readTotalSupply = useContractRead({
    addressOrName,
    contractInterface,
    functionName: 'totalSupply',
  })

  const getCurrentSupply = () => {
    const currentSupply = readTotalSupply.isSuccess
      ? BigNumber.from(readTotalSupply.data).toNumber()
      : 0
    return currentSupply
  }

  const mintNft = (mintAmount: number) => {
    if (mintAmount < 1) return
    const { write, data, isError, isLoading, isSuccess, error } = writeMint
    const totalCost = getMintPrice(mintAmount)
    write({
      args: [address, mintAmount],
      overrides: {
        value: ethers.utils.parseEther(totalCost),
        gasLimit: 500000,
      },
    })
    return { isError, data, isSuccess, isLoading, error }
  }

  const getMintPrice = (mintAmount: number) => {
    const totalPrice = (mintAmount * mintPrice * 100) / 100
    return isNaN(totalPrice) ? '0.00' : totalPrice.toFixed(2)
  }

  useEffect(() => {
    readTotalSupply.refetch()
  }, [mintNft])

  const totalSupply = getCurrentSupply()

  return { mintNft, getMintPrice, totalSupply }
}
