// import { createContext, useContext, useEffect, useState } from 'react'
// import { useAccount, useConnect, useDisconnect } from 'wagmi'

// export const AccountContext = createContext({})

// export const AccountProvider = ({
//   children,
// }: {
//   children: React.ReactNode
// }) => {
//   const {
//     activeConnector,
//     connectAsync,
//     isConnected,
//     isDisconnected,
//     connectors,
//     error,
//     isConnecting,
//     pendingConnector,
//   } = useConnect({
//     onBeforeConnect(connector) {
//       console.log('Before Connect', connector)
//     },
//     onError(error) {
//       console.log('Error', error)
//     },
//   })

//   const { data, isError, isLoading } = useAccount()

//   const { disconnect } = useDisconnect({
//     onDisconnect() {
//       console.log('Disconnect')
//     },
//   })

//   const { data: accountQuery } = useAccount()

//   const [connectedAddr, setConnectedAddr] = useState('')
//   const [displayAddr, setDisplayAddr] = useState('')
//   const [connected, setConnected] = useState(false)
//   const [allowSignIn, setAllowSignIn] = useState(false)
//   const [netWorkName, setNetworkName] = useState('')
//   const [accountErrorMessage, setAccountErrorMessage] = useState('')

//   useEffect(() => {
//     if (error?.name === 'ConnectorNotFoundError') {
//       alert('MetaMask extension required to sign in')
//     }
//   }, [error, pendingConnector, isConnecting])

//   useEffect(() => {
//     if (isConnected && allowSignIn) {

//     if (isConnected) {
//       setConnectedAddr(accountQuery.address)
//       setDisplayAddr(getConcatAddress(accountQuery.address))
//       setConnected(true)
//     } else {
//       setConnectedAddr('')
//       setDisplayAddr('')
//       setConnected(false)
//     }
//   }, [isConnecting, isConnected])

//   const connectToMetaMask = async () => {
//     const c = await connectAsync(connectors[0])
//     if (c.chain.id) {
//       checkChain(c.chain.id)
//     }
//   }

//   const checkChain = (chainId: string | number) => {
//     const connectedNetwork = getSupportedNetworks(chainId)
//     if (connectedNetwork) {
//       setAllowSignIn(true)
//       setNetworkName(connectedNetwork)
//       return
//     }

//     setAccountErrorMessage('Please Connect To the Ethereum Network')
//     setAllowSignIn(false)
//     setNetworkName('')
//     disconnect()
//   }

//   connectors[0].onAccountsChanged = () => {
//     window.location.reload()
//   }

//   connectors[0].onChainChanged = (chainId: string | number) => {
//     const connectedNetwork = getSupportedNetworks(chainId)
//     if (typeof connectedNetwork == 'undefined') {
//       window.location.reload()
//     }
//   }

//   const getConcatAddress = (address: string) => {
//     return address
//       ? `${address.slice(0, 6)}..${address.slice(address.length - 4)}`
//       : ''
//   }

//   return (
//     <AccountContext.Provider
//       value={{
//         connected,
//         connectedAddr,
//         displayAddr,
//         connectToMetaMask,
//         disconnect,
//         pendingConnector,
//         isConnecting,
//         netWorkName,
//         accountErrorMessage,
//       }}
//     >
//       {children}
//     </AccountContext.Provider>
//   )
// }

// function getSupportedNetworks(chainId: string | number) {
//   const supportedNetworks = [
//     {
//       chainId: 1,
//       name: 'Mainnet',
//     },
//     {
//       chainId: 3,
//       name: 'Ropsten',
//     },
//     {
//       chainId: 4,
//       name: 'Rinkeby',
//     },
//     {
//       chainId: 42,
//       name: 'Kovan',
//     },
//     {
//       chainId: 5,
//       name: 'Goerli',
//     },
//     {
//       chainId: 1337,
//       name: 'Localhost 8545',
//     },
//     {
//       chainId: 31337,
//       name: 'Localhost 8545',
//     },
//   ]

//   const network = supportedNetworks.find(
//     (network) => network.chainId === parseInt(chainId)
//   )

//   return network ? network.name : undefined
// }

// export function useMetaMaskAccount() {
//   return useContext(AccountContext)
// }
