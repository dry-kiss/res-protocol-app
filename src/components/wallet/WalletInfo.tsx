import { Box, BoxProps } from "@chakra-ui/layout"
import { Center, HStack, Tooltip } from "@chakra-ui/react"
import { ethers } from "ethers"
import React, { useEffect, useState } from "react"
import { useGetUnderwriterWalletInfoQuery } from "../../generated/subgraph/graphql"
import { useReSourceTokenContract } from "../../services/web3/contracts"
import { useGetMyWalletAddress } from "../../services/web3/utils/useGetMyWalletAddress"
import colors from "../../theme/foundations/colors"
import { useManagedCountUp } from "../../utils/useManagedCountUp"
import { GlyphLabel } from "../glyph/SourceGlyphLabel"

const BALANCE_REF = "BALANCE_REF"
const COLLATERAL_REF = "COLLATERAL_REF"
const LOCKED_REF = "LOCKED_REF"

const WalletInfo = ({ ...rest }: BoxProps) => {
  const [balance, setBalance] = useState(ethers.BigNumber.from(0))
  const [locked, setLocked] = useState(ethers.BigNumber.from(0))
  const { balanceOf, lockedBalanceOf } = useReSourceTokenContract()

  useEffect(() => {
    balanceOf().then(setBalance)
    lockedBalanceOf().then(setLocked)
  }, [])

  useManagedCountUp({
    ref: BALANCE_REF,
    end: Number(ethers.utils.formatEther(balance)),
  })

  useManagedCountUp({
    ref: LOCKED_REF,
    end: Number(ethers.utils.formatEther(locked)),
  })

  return (
    <Box {...rest}>
      <HStack spacing={-14}>
        {/* <Tooltip label="Staked SOURCE" shouldWrapChildren>
          <Center
            {...pillContainerStyles}
            pr="60px"
            left={0}
            borderColor={colors.blue.main}
          >
            <GlyphLabel id={COLLATERAL_REF} color={colors.blue.main} mx={1} />
          </Center>
        </Tooltip> */}
        <Tooltip label="Locked SOURCE balance" shouldWrapChildren>
          <Center {...pillContainerStyles} pr="60px" left={0} borderColor={colors.blue.main}>
            <GlyphLabel id={LOCKED_REF} color={colors.blue.main} mx={1} />
          </Center>
        </Tooltip>
        <Tooltip label="Total SOURCE balance" shouldWrapChildren>
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
