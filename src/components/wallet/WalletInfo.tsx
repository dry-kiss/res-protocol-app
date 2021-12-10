import { Box, BoxProps, Text } from "@chakra-ui/layout"
import {
  Center,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react"
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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js"
import faker from "faker"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend)

const BALANCE_REF = "BALANCE_REF"
const LOCKED_REF = "LOCKED_REF"

const WalletInfo = ({ ...rest }: BoxProps) => {
  const balance = useSourceBalance()
  const locked = useLockedSourceBalance()
  const { onOpen, onClose, isOpen } = useDisclosure()

  const device = useBreakpointValue({ base: "mobile", md: "desktop" })
  const isMobile = device === "mobile"

  useManagedCountUp({
    ref: BALANCE_REF,
    end: Number(ethers.utils.formatEther(balance)),
  })

  useManagedCountUp({
    ref: LOCKED_REF,
    end: Number(formatEther(locked)),
  })

  const labels = ["January", "February", "March", "April", "May", "June", "July"]

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  }

  const showLock = Number(formatEther(locked)) > 0

  return (
    <Box {...rest}>
      <HStack spacing={-14} whiteSpace="nowrap">
        <HStack display={showLock ? "" : "none"}>
          <Popover
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            // placement="left"
            closeOnBlur={false}
          >
            <PopoverTrigger>
              {/* <Tooltip display={showLock ? "" : "none"} label="Locked SOURCE" shouldWrapChildren> */}
              <Center
                display={showLock ? "" : "none"}
                {...pillContainerStyles}
                pr="60px"
                left={0}
                borderColor={colors.gray[700]}
              >
                <Box _hover={{ cursor: "pointer" }} mx={1} onClick={onOpen}>
                  <Text id={LOCKED_REF} variant="number" mx={2} display="inline" />
                  <FontAwesomeIcon icon={faLock} size="sm" color={colors.gray[700]} />
                </Box>
              </Center>
              {/* </Tooltip> */}
            </PopoverTrigger>
            <PopoverContent
              center
              w={isMobile ? "90vw" : "50vw"}
              mr={isMobile ? "0em" : "2em"}
              ml={isMobile ? "1em" : "2em"}
              mt="1em"
            >
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Unlock Schedule</PopoverHeader>
              <PopoverBody>
                <Line options={options} data={data} />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
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
