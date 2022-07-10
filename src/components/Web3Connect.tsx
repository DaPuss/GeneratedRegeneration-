import React from 'react'
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Stack,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ButtonProps,
} from '@chakra-ui/react'

const Web3Connect = (props: ButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()
  const disconnectFunction = () => {
    disconnect()
  }
  if (isConnected) {
    return (
      <Button onClick={disconnectFunction}>
        Disconnect: {ensName ? `${ensName} (${address})` : address}
      </Button>
    )
  }

  return (
    <>
      <Button {...props} mt={4} onClick={onOpen}>
        Connect Wallet
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              {connectors.map((connector) => (
                <Button
                  disabled={!connector.ready}
                  key={connector.id}
                  onClick={() => connect({ connector })}
                >
                  {connector.name}
                  {!connector.ready && ' (unsupported)'}
                  {isLoading &&
                    connector.id === pendingConnector?.id &&
                    ' (connecting)'}
                </Button>
              ))}
            </Stack>

            {error && <div>{error.message}</div>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Web3Connect
