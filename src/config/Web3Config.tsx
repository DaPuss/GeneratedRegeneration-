import { createClient, configureChains, chain } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_API

const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygonMumbai],
  [alchemyProvider({ alchemyId })]
)

export const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains: [chain.polygonMumbai],
      options: {
        appName: 'NFT_Project',
      },
    }),
    new WalletConnectConnector({
      chains: [chain.polygonMumbai],
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
