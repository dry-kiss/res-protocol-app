import { Flex, HStack, StackProps } from "@chakra-ui/layout"
import { useWeb3Context } from "web3-react"
import Button from "./Button"
import AddressInfo from "./wallet/AddressInfo"
import useConnectWallet from "./wallet/useConnectWallet"
import { Image } from "@chakra-ui/react"
import { gradients } from "../theme/foundations/colors"
import { useEffectOnce } from "react-use"

const metaMaskIcon = "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"

export const Header = () => {
  const context = useWeb3Context()
  const connectWallet = useConnectWallet()

  useEffectOnce(() => {
    if (!context.active) connectWallet()
  })

  return (
    <Flex justifyContent="flex-end" {...containerStyles}>
      <HStack align="center" spacing={6}>
        {context.library && (
          <>
            <AddressInfo />
          </>
        )}
        {!context.library && (
          <Button
            size="md"
            onClick={async () => await connectWallet()}
            background={gradients.primary}
            justifyContent="space-between"
            rightIcon={<Image width="2em" src={metaMaskIcon} />}
          >
            Connect Wallet
          </Button>
        )}
      </HStack>
    </Flex>
  )
}

export const headerHeight = 51

const containerStyles: StackProps = {
  px: { base: 4, md: 6 },
  py: { base: 2, md: 3 },
  justify: "space-between",
  alignItems: "center",
  borderBottom: "solid 1px",
  borderColor: "gray.300",
  bgColor: "white !important",
  height: headerHeight,
  position: "fixed",
  w: "100vw",
  zIndex: 1,
}

export default Header
