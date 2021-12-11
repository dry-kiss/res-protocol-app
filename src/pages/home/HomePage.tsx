import { Box, Container, Flex, HStack, VStack } from "@chakra-ui/layout"
import { CloseButton, Heading, Image, useBreakpointValue } from "@chakra-ui/react"
import { useRecoilState } from "recoil"
import { useWeb3Context } from "web3-react/dist/provider"
import homeImage from "../../assets/home.svg"
import UnlockScheduleGraph from "../../components/wallet/UnlockScheduleGraph"
import { walletInfoAtom } from "../../components/wallet/WalletInfo"
import colors from "../../theme/foundations/colors"
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
  const device = useBreakpointValue({ base: "mobile", md: "desktop" })
  const isMobile = device === "mobile"
  const [graphToggle, setToggleSchedule] = useRecoilState(walletInfoAtom)

  return (
    <Container maxW="1440px" h="full" px={6}>
      <Flex placeContent="center" h={{ base: "initial", md: "full" }}>
        <HStack
          align="center"
          justify="space-between"
          m={isMobile ? "0" : "0em 5em"}
          my="50px"
          w="100%"
        >
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
          {graphToggle ? (
            <Box
              w="full"
              borderRadius="2xl"
              border="1px solid"
              borderColor={colors.gray.cement}
              padding=".5em"
            >
              <HStack justifyContent="space-between" mt=".5em">
                <Heading ml="1em">Unlock Schedules</Heading>
                <CloseButton onClick={() => setToggleSchedule(false)} />
              </HStack>
              <UnlockScheduleGraph padding="1em" display={onlyDesktop} />
            </Box>
          ) : (
            <Image display={onlyDesktop} src={homeImage} w="full" />
          )}
        </HStack>
      </Flex>
    </Container>
  )
}

const displayIf = (shouldDisplay?) => ({ display: Boolean(shouldDisplay) ? "inherit" : "none" })

export default HomePage
