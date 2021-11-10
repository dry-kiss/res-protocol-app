import { VStack, HStack } from "@chakra-ui/layout"
import { Heading, Image, Center, Button, Container, IconButton } from "@chakra-ui/react"
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

const metaMaskIcon = "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"

const HomePage = () => {
  const requestAddToken = async () => {
    const _window = window as any

    await _window.ethereum.request({
      method: "wallet_watchAsset",

      params: {
        type: "ERC20",
        options: {
          address: CONTRACTS.ReSourceToken,
          symbol: "SOURCE",
          decimals: 18,
          image: "http://staging.resource.finance/favicon.ico",
        },
      },
    })
  }

  return (
    <Center h="100vh">
      <HStack w="80%" justifyContent="center">
        <VStack alignItems="flex-start" w="50%" maxW="420px">
          <Heading size="xl">Success!</Heading>
          <Heading size="subtitle" color="gray" mb="1em !important" maxW="350px">
            Congradulations on being a SOURCE holder, come back soon for staking, underwriting, and
            more!
          </Heading>
          <Button
            size="lg"
            colorScheme="blue"
            justifyContent="space-between"
            onClick={requestAddToken}
            w="max-content"
            rightIcon={<Image width="2em" src={metaMaskIcon} />}
          >
            Add SOURCE to wallet
          </Button>
          <Button
            as={"a"}
            href={"https://resource.finance/"}
            target={"_blank"}
            size="lg"
            colorScheme="blue"
            justifyContent="space-between"
            rightIcon={<FontAwesomeIcon icon={faBookOpen} />}
          >
            Learn More
          </Button>
          <HStack w="100%" justifyContent="space-between" mt="1em !important">
            <IconButton
              variant="outline"
              as={"a"}
              href={"https://t.me/theresourcenetwork"}
              target={"_blank"}
              colorScheme="blue"
              aria-label="Telegram"
              size="lg"
              icon={<FontAwesomeIcon icon={faTelegram} />}
            />
            <IconButton
              variant="outline"
              as={"a"}
              href={"https://discord.com/invite/UuTCRuuZMP"}
              target={"_blank"}
              colorScheme="blue"
              aria-label="Discord"
              size="lg"
              icon={<FontAwesomeIcon icon={faDiscord} />}
            />
            <IconButton
              variant="outline"
              as={"a"}
              href={"https://twitter.com/resourcemutual"}
              target={"_blank"}
              colorScheme="blue"
              aria-label="Twitter"
              size="lg"
              icon={<FontAwesomeIcon icon={faTwitter} />}
            />
            <IconButton
              variant="outline"
              as={"a"}
              href={"https://www.facebook.com/resourcenetwork1"}
              target={"_blank"}
              colorScheme="blue"
              aria-label="Facebook"
              size="lg"
              icon={<FontAwesomeIcon icon={faFacebook} />}
            />
            <IconButton
              variant="outline"
              as={"a"}
              href={"https://www.linkedin.com/company/resourcenetwork/"}
              target={"_blank"}
              colorScheme="blue"
              aria-label="Linkedin"
              size="lg"
              icon={<FontAwesomeIcon icon={faLinkedin} />}
            />
            <IconButton
              variant="outline"
              as={"a"}
              href={"https://github.com/ReSource-Network/"}
              target={"_blank"}
              colorScheme="blue"
              aria-label="Github"
              size="lg"
              icon={<FontAwesomeIcon icon={faGithub} />}
            />
            <IconButton
              variant="outline"
              as={"a"}
              href={"https://re-source.medium.com/"}
              target={"_blank"}
              colorScheme="blue"
              aria-label="Medium"
              size="lg"
              icon={<FontAwesomeIcon icon={faMedium} />}
            />
          </HStack>
        </VStack>
        <VStack alignItems="flex-start" w="50%">
          <Image src={homeImage} />
        </VStack>
      </HStack>
    </Center>
  )
}

export default HomePage
