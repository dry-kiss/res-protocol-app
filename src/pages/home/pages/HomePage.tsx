import { VStack, HStack } from "@chakra-ui/layout"
import {
  Heading,
  Image,
  Center,
  Button,
  Container,
  IconButton,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import {
  faDiscord,
  faFacebook,
  faGithub,
  faLinkedin,
  faMedium,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import homeImage from "../../../assets/home.svg"
import { CONTRACTS } from "../../../services/web3/constants"
import { gradients } from "../../../theme/foundations/colors"

const metaMaskIcon = "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"

const HomePage = () => {
  const device = useBreakpointValue({ base: "mobile", md: "desktop" })
  const isMobile = device === "mobile"

  const requestAddToken = async () => {
    const _window = window as any

    await _window.ethereum.request({
      method: "wallet_watchAsset",

      params: {
        type: "ERC20",
        options: {
          address: CONTRACTS.SourceToken,
          symbol: "SOURCE",
          decimals: 18,
          image: "http://staging.resource.finance/favicon.ico",
        },
      },
    })
  }

  return (
    <Center h="100vh">
      <VStack>
        <Image src={homeImage} display={isMobile ? "" : "none"} />
        <HStack w="100%" justifyContent="center">
          <VStack
            alignItems="flex-start"
            w={isMobile ? "80%" : "100%"}
            maxW={isMobile ? "650px" : "420px"}
          >
            <Heading size="xl">Success!</Heading>
            <Heading size="subtitle" color="gray" mb="1em !important" maxW="350px">
              Congratulations on being a SOURCE holder, come back soon for staking, underwriting,
              and more!
            </Heading>
            <Button
              as={"a"}
              href={"https://resource.finance/"}
              target={"_blank"}
              size="lg"
              colorScheme="primary"
              variant="outline"
              justifyContent="space-between"
              rightIcon={<FontAwesomeIcon icon={faBookOpen} />}
            >
              Learn More
            </Button>
            <Button
              size="lg"
              background={gradients.primary}
              justifyContent="space-between"
              onClick={requestAddToken}
              w="max-content"
              rightIcon={<Image width="2em" src={metaMaskIcon} />}
            >
              Add SOURCE to wallet
            </Button>
            <Wrap w="100%" justifyContent="space-between" mt="1em !important">
              <WrapItem>
                <IconButton
                  variant="outline"
                  as={"a"}
                  href={"https://t.me/theresourcenetwork"}
                  target={"_blank"}
                  colorScheme="primary"
                  aria-label="Telegram"
                  size="lg"
                  icon={<FontAwesomeIcon icon={faTelegram} />}
                />
              </WrapItem>
              <WrapItem>
                <IconButton
                  variant="outline"
                  as={"a"}
                  href={"https://discord.com/invite/UuTCRuuZMP"}
                  target={"_blank"}
                  colorScheme="primary"
                  aria-label="Discord"
                  size="lg"
                  icon={<FontAwesomeIcon icon={faDiscord} />}
                />
              </WrapItem>
              <WrapItem>
                <IconButton
                  variant="outline"
                  as={"a"}
                  href={"https://twitter.com/resourcemutual"}
                  target={"_blank"}
                  colorScheme="primary"
                  aria-label="Twitter"
                  size="lg"
                  icon={<FontAwesomeIcon icon={faTwitter} />}
                />
              </WrapItem>
              <WrapItem>
                <IconButton
                  variant="outline"
                  as={"a"}
                  href={"https://www.facebook.com/resourcenetwork1"}
                  target={"_blank"}
                  colorScheme="primary"
                  aria-label="Facebook"
                  size="lg"
                  icon={<FontAwesomeIcon icon={faFacebook} />}
                />
              </WrapItem>
              <WrapItem>
                <IconButton
                  variant="outline"
                  as={"a"}
                  href={"https://www.linkedin.com/company/resourcenetwork/"}
                  target={"_blank"}
                  colorScheme="primary"
                  aria-label="Linkedin"
                  size="lg"
                  icon={<FontAwesomeIcon icon={faLinkedin} />}
                />
              </WrapItem>
              <WrapItem>
                <IconButton
                  variant="outline"
                  as={"a"}
                  href={"https://github.com/ReSource-Network/"}
                  target={"_blank"}
                  colorScheme="primary"
                  aria-label="Github"
                  size="lg"
                  icon={<FontAwesomeIcon icon={faGithub} />}
                />
              </WrapItem>
              <WrapItem>
                <IconButton
                  variant="outline"
                  as={"a"}
                  href={"https://re-source.medium.com/"}
                  target={"_blank"}
                  colorScheme="primary"
                  aria-label="Medium"
                  size="lg"
                  icon={<FontAwesomeIcon icon={faMedium} />}
                />
              </WrapItem>
            </Wrap>
          </VStack>
          <VStack alignItems="flex-start" w="50%" display={isMobile ? "none" : ""}>
            <Image src={homeImage} />
          </VStack>
        </HStack>
      </VStack>
    </Center>
  )
}

export default HomePage
