import { Box, BoxProps, Text } from "@chakra-ui/layout"
import { Center, HStack, Tooltip } from "@chakra-ui/react"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ethers } from "ethers"
import React from "react"
import { useLockedSourceBalance, useSourceBalance } from "../../services/web3/contracts/sourceToken"
import { formatEther } from "../../services/web3/utils/ethers"
import colors from "../../theme/foundations/colors"
import { useManagedCountUp } from "../../utils/useManagedCountUp"
import { GlyphLabel } from "../glyph/SourceGlyphLabel"
import { atom, useRecoilState } from "recoil"

const BALANCE_REF = "BALANCE_REF"
const LOCKED_REF = "LOCKED_REF"

export const walletInfoAtom = atom({
  key: "walletInfoAtom",
  default: false,
})

const WalletInfo = ({ ...rest }: BoxProps) => {
  const balance = useSourceBalance()
  const locked = useLockedSourceBalance()
  const [toggleValue, setToggleSchedule] = useRecoilState(walletInfoAtom)

  const toggleScheduleGraph = () => {
    setToggleSchedule(!toggleValue)
  }

  useManagedCountUp({
    ref: BALANCE_REF,
    end: Number(ethers.utils.formatEther(balance)),
  })

  useManagedCountUp({
    ref: LOCKED_REF,
    end: Number(formatEther(locked)),
  })

  const showLock = Number(formatEther(locked)) > 0

  return (
    <>
      <Box {...rest}>
        <HStack spacing={-14} whiteSpace="nowrap">
          <Tooltip display={showLock ? "" : "none"} label="Locked SOURCE" shouldWrapChildren>
            <HStack display={showLock ? "" : "none"}>
              <Center
                display={showLock ? "" : "none"}
                {...pillContainerStyles}
                pr="60px"
                left={0}
                borderColor={colors.gray[700]}
              >
                <Box _hover={{ cursor: "pointer" }} mx={1} onClick={toggleScheduleGraph}>
                  <Text id={LOCKED_REF} variant="number" mx={2} display="inline" />
                  <FontAwesomeIcon icon={faLock} size="sm" color={colors.gray[700]} />
                </Box>
              </Center>
            </HStack>
          </Tooltip>
          <Tooltip label="Total SOURCE" shouldWrapChildren>
            <Center {...pillContainerStyles} right={0} borderColor="black">
              <GlyphLabel id={BALANCE_REF} mx={1} />
            </Center>
          </Tooltip>
        </HStack>
      </Box>
    </>
  )
}

const pillContainerStyles: BoxProps = {
  bgColor: "white",
  borderRadius: "2xl",
  border: "1px solid",
  py: 1,
  px: 2,
}

export default React.memo(WalletInfo)
