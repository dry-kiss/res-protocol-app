import { Text, VStack } from "@chakra-ui/layout"
import {
  Button,
  Heading,
  IconButton,
  IconButtonProps,
  Image,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ethers } from "ethers"
import { useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import gateio from "../../assets/exchanges/gate-io.png"
import pancakeswap from "../../assets/exchanges/pancakeswap.png"
import ubeswap from "../../assets/exchanges/ubeswap.png"
import source from "../../assets/glyphs/source.svg"
import useConnectWallet from "../../components/wallet/useConnectWallet"
import { useLockedSourceBalance } from "../../services/web3/contracts/sourceToken"
import { useClaim, useGetClaimTotal } from "../../services/web3/contracts/tokenClaim"
import { requestAddToken } from "../../services/web3/utils/metamask"
import { refetchContractsAtom } from "../../utils/useRefetchData"

const metaMaskIcon = "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"

export const ConnectWallet = () => {
  const connectWallet = useConnectWallet()

  return (
    <VStack align="flex-start" w="full">
      <Heading>Connect your wallet</Heading>
      <Button
        w="full"
        maxW="300px"
        onClick={async () => await connectWallet()}
        justifyContent="space-between"
        colorScheme="primary"
        rightIcon={<Image width="1.5em" src={metaMaskIcon} />}
      >
        MetaMask
      </Button>
    </VStack>
  )
}

export const ClaimSourceTokens = () => {
  const [loading, setLoading] = useState(false)
  const setRefetch = useSetRecoilState(refetchContractsAtom)

  const claimTotal = useGetClaimTotal()
  const claim = useClaim()
  const hasClaim = Number(claimTotal.toString()) > 0

  const claimTokens = async () => {
    const tx = await claim()
    if (tx) {
      setLoading(true)
      await tx.wait()
      setLoading(false)
      setRefetch(["SourceToken"])
    }
  }

  if (!hasClaim) return <></>

  return (
    <VStack align="flex-start" w="full">
      <Heading>You have {ethers.utils.formatEther(claimTotal)} SOURCE to claim</Heading>
      {claimTotal && (
        <Button
          w="full"
          maxW="300px"
          variant="primary"
          colorScheme="primary"
          onClick={async () => await claimTokens()}
          isLoading={loading}
          justifyContent="space-between"
          rightIcon={<Image width="1.5em" src={source} />}
        >
          Claim SOURCE
        </Button>
      )}
    </VStack>
  )
}

export const ConfigureWallet = () => {
  return (
    <VStack align="flex-start" w="full">
      <Heading>Configure wallet</Heading>
      <Text variant="caption" maxW="200px">
        Don't see your SOURCE tokens in MetaMask?
      </Text>
      <Button
        w="full"
        maxW="300px"
        variant="outline"
        colorScheme="gray"
        onClick={requestAddToken}
        justifyContent="space-between"
        rightIcon={<Image width="1.5em" src={metaMaskIcon} />}
      >
        Import SOURCE address
      </Button>
    </VStack>
  )
}

const iconStyles: any = {
  borderColor: "gray !important",
  borderWidth: "1px !important",
  colorScheme: "blue",
  variant: "outline",
  target: "_blank",
  size: "lg",
  as: "a",
}

export const WhereToBuy = () => {
  return (
    <VStack align="flex-start">
      <Heading>Where to buy</Heading>
      <Text variant="caption" maxW="200px">
        SOURCE can be traded on these exchanges
      </Text>
      <Wrap spacing={4} justifyContent="space-between">
        <Icon
          href={"https://pancakeswap.finance/swap"}
          aria-label="Pancakeswap"
          icon={<Image width="1.5em" src={pancakeswap} />}
        />
        <Icon
          href={"https://app.ubeswap.org/#/swap"}
          aria-label="Ubeswap"
          icon={<Image width="1.5em" src={ubeswap} />}
        />
        <Icon
          href={"https://www.gate.io/trade/SOURCE_USDT"}
          aria-label="GateIO"
          icon={<Image width="1.5em" src={gateio} />}
        />
      </Wrap>
    </VStack>
  )
}

export const IconList = () => {
  return (
    <>
      <Text
        as="a"
        target="_blank"
        color="purple.dark"
        href={"https://resource.finance/"}
        _hover={{ textDecoration: "underline" }}
      >
        Learn more about ReSource
      </Text>
      <Wrap spacing={4}>
        <Icon
          href={"https://t.me/theresourcenetwork"}
          aria-label="Telegram"
          icon={<FontAwesomeIcon icon={faTelegram} />}
        />
        <Icon
          href={"https://discord.com/invite/UuTCRuuZMP"}
          aria-label="Discord"
          icon={<FontAwesomeIcon icon={faDiscord} />}
        />
        <Icon
          href={"https://twitter.com/resourcemutual"}
          aria-label="Twitter"
          icon={<FontAwesomeIcon icon={faTwitter} />}
        />
        <Icon
          href={"https://www.facebook.com/resourcenetwork1"}
          aria-label="Facebook"
          icon={<FontAwesomeIcon icon={faFacebook} />}
        />
        <Icon
          {...iconStyles}
          href={"https://www.linkedin.com/company/resourcenetwork/"}
          aria-label="Linkedin"
          icon={<FontAwesomeIcon icon={faLinkedin} />}
        />
        <Icon
          href={"https://github.com/ReSource-Network/"}
          aria-label="Github"
          icon={<FontAwesomeIcon icon={faGithub} />}
        />
        <Icon
          href={"https://re-source.medium.com/"}
          aria-label="Medium"
          icon={<FontAwesomeIcon icon={faMedium} />}
        />
      </Wrap>
    </>
  )
}

const Icon = (props: IconButtonProps & { href: string }) => (
  <WrapItem>
    <IconButton {...iconStyles} {...props} />
  </WrapItem>
)
