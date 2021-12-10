import { BoxProps, HStack, Text } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/react"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"
import { useWeb3Context } from "web3-react"
import colors from "../theme/foundations/colors"
import { onlyDesktop } from "../theme/utils/display"
import Icon from "./Icon"

const Footer = ({ ...rest }: BoxProps) => {
  const active = useWeb3Context().active
  const [label, setLabel] = useState("Not connected")
  const [iconColor, setIconColor] = useState("Not connected")

  useEffect(() => {
    setLabel(active ? "Live" : "Not connected")
    setIconColor(active ? colors.green.main : colors.gray.cement)
  }, [active])

  return (
    <Flex {...footerStyles} {...rest}>
      <HStack>
        <Text>ReSource Protocol</Text>
        <Text display={onlyDesktop} color="gray.500">
          SOURCE dApp
        </Text>
      </HStack>
      <HStack>
        <Text>{label}</Text>
        <Icon icon={faCircle} color={iconColor} boxSize="24px" />
      </HStack>
    </Flex>
  )
}

export const footerHeight = 41

const footerStyles: BoxProps = {
  px: { base: 4, md: 6 },
  py: { base: 2, md: 3 },
  justifyContent: "space-between",
  borderTop: "solid 1px",
  borderColor: "primary.main",
  bgColor: "white !important",
  height: footerHeight,
  bottom: 0,
  position: "fixed",
  w: "full",
}

export default Footer
