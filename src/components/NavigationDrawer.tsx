import React, { useEffect } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'

import Logo from './Logo'

type Props = {
  placement: 'left' | 'right'
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  btnRef: React.RefObject<HTMLButtonElement>
  footer?: React.ReactNode
}

const NavigationDrawer = ({
  placement = 'right',
  isOpen,
  children,
  onClose,
  btnRef,
  footer,
}: Props) => {
  const closeDrawer = useBreakpointValue({ base: 'false', md: 'true' })

  useEffect(() => {
    if (closeDrawer) onClose()
  }, [closeDrawer, onClose])

  return (
    <Flex>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" mx={15} my={15} />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default NavigationDrawer
