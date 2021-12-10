import { Box, BoxProps, Text } from "@chakra-ui/layout"
import { Center, HStack, Tooltip } from "@chakra-ui/react"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ethers } from "ethers"
import React, { useEffect, useState } from "react"
import {
  useLockedSourceBalance,
  useSourceBalance,
  useSourceTokenContract,
} from "../../services/web3/contracts/sourceToken"
import { formatEther } from "../../services/web3/utils/ethers"
import colors from "../../theme/foundations/colors"
import { useManagedCountUp } from "../../utils/useManagedCountUp"
import { GlyphLabel } from "../glyph/SourceGlyphLabel"

const BALANCE_REF = "BALANCE_REF"
const LOCKED_REF = "LOCKED_REF"

const WalletInfo = ({ ...rest }: BoxProps) => {
  const balance = useSourceBalance()
  const locked = useLockedSourceBalance()

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
    <Box {...rest}>
      <HStack spacing={-14}>
        <Tooltip display={showLock ? "" : "none"} label="Locked SOURCE" shouldWrapChildren>
          <Center
            display={showLock ? "" : "none"}
            {...pillContainerStyles}
            pr="60px"
            left={0}
            borderColor={colors.gray[700]}
          >
            <Box mx={1}>
              <Text id={LOCKED_REF} variant="number" mx={2} display="inline" />
              <FontAwesomeIcon icon={faLock} size="sm" color={colors.gray[700]} />
            </Box>
          </Center>
        </Tooltip>
        <Tooltip label="Total SOURCE" shouldWrapChildren>
          <Center {...pillContainerStyles} right={0} borderColor="black">
            <GlyphLabel id={BALANCE_REF} mx={1} />
          </Center>
        </Tooltip>
      </HStack>
    </Box>
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
