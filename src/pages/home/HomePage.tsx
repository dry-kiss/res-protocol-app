import { Container, Stack, VStack } from "@chakra-ui/layout"
import { Center, Heading, Image } from "@chakra-ui/react"
import { useWeb3Context } from "web3-react/dist/provider"
import homeImage from "../../assets/home.svg"
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
    <Container maxW="1440px" h="full">
      <Center h="full">
        <Stack
          justify="space-between"
          direction={{ base: "column", md: "row-reverse" }}
          align={{ base: "center", md: "flex-start" }}
        >
          <Image src={homeImage} width={{ base: "full", md: "60%" }} />
          <VStack maxW="450px" spacing={10} alignItems="flex-start">
            <VStack alignItems="flex-start">
              <Heading size="xl">Welcome!</Heading>
              <Heading size="header" color="gray.700" lineHeight="1.3">
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
        </Stack>
      </Center>
    </Container>
  )
}

export default HomePage
