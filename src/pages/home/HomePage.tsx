import { Container, Flex, HStack, VStack } from "@chakra-ui/layout"
import { Heading, Image } from "@chakra-ui/react"
import { useWeb3Context } from "web3-react/dist/provider"
import homeImage from "../../assets/home.svg"
import { onlyDesktop } from "../../theme/utils/display"
import {
  ClaimSourceTokens,
  ConfigureWallet,
  ConnectWallet,
  IconList,
  WhereToBuy,
} from "./components"

const HomePage = () => {
  const isConnected = useWeb3Context().account

  return (
    <Container maxW="1440px" h="full" px={6}>
      <Flex placeContent="center" h={{ base: "initial", md: "full" }}>
        <HStack align="center" justify="space-between" my="50px">
          <VStack maxW="450px" spacing={10} alignItems="flex-start">
            <VStack alignItems="flex-start">
              <Heading size="xl">Welcome!</Heading>
              <Heading {...displayIf(isConnected)} size="header" color="gray.700" lineHeight="1.3">
                Come back soon for exciting new features such as underwriting, staking, delegating,
                and more!
              </Heading>
            </VStack>
            {isConnected ? (
              <>
                <ClaimSourceTokens />
                <ConfigureWallet />
                <WhereToBuy />
              </>
            ) : (
              <ConnectWallet />
            )}
            <IconList />
          </VStack>
          <Image display={onlyDesktop} src={homeImage} w="full" />
        </HStack>
      </Flex>
    </Container>
  )
}

const displayIf = (shouldDisplay?) => ({ display: Boolean(shouldDisplay) ? "inherit" : "none" })

export default HomePage
