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

const HomePage = () => {
  const device = useBreakpointValue({ base: "mobile", md: "desktop" })
  const isMobile = device === "mobile"

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
              colorScheme="blue"
              justifyContent="space-between"
              rightIcon={<FontAwesomeIcon icon={faBookOpen} />}
            >
              Learn More
            </Button>
            <Wrap w="100%" justifyContent="space-between" mt="1em !important">
              <WrapItem>
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
              </WrapItem>
              <WrapItem>
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
              </WrapItem>
              <WrapItem>
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
              </WrapItem>
              <WrapItem>
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
              </WrapItem>
              <WrapItem>
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
              </WrapItem>
              <WrapItem>
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
              </WrapItem>
              <WrapItem>
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
