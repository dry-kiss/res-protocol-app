import { Box, BoxProps, Text } from "@chakra-ui/layout"
import { Center, chakra, HStack, Tooltip } from "@chakra-ui/react"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { ethers } from "ethers"
import React, { useEffect, useState } from "react"
import { useReSourceTokenContract } from "../../services/web3/contracts"
import colors from "../../theme/foundations/colors"
import { textStyles } from "../../theme/textStyles"
import { useManagedCountUp } from "../../utils/useManagedCountUp"
import { GlyphLabel } from "../glyph/SourceGlyphLabel"
import Icon from "../Icon"

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
        <Tooltip label="Locked SOURCE" shouldWrapChildren>
          <Center {...pillContainerStyles} pr="60px" left={0} borderColor={colors.gray[700]}>
            <Box mx={1}>
              <Text variant="number" mx={2} id={LOCKED_REF} display="inline"></Text>
              <Icon
                size="xs"
                icon={faLock}
                display="inline"
                alignSelf="center"
                color={colors.gray[700]}
              />
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
