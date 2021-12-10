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
  Lock,
  useGetLockSchedules,
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
  Filler,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Filler)

const BALANCE_REF = "BALANCE_REF"
const LOCKED_REF = "LOCKED_REF"

const WalletInfo = ({ ...rest }: BoxProps) => {
  const balance = useSourceBalance()
  const locked = useLockedSourceBalance()
  const lockSchedules = useGetLockSchedules()
  const { onOpen, onClose, isOpen } = useDisclosure()

  const device = useBreakpointValue({ base: "mobile", md: "desktop" })
  const isMobile = device === "mobile"

  console.log(Number(ethers.utils.formatEther(balance)))
  console.log(Number(ethers.utils.formatEther(locked)))

  useManagedCountUp({
    ref: BALANCE_REF,
    end: Number(ethers.utils.formatEther(balance)),
  })

  useManagedCountUp({
    ref: LOCKED_REF,
    end: Number(formatEther(locked)),
  })

  const formattedSchedules = formatSchedules(lockSchedules as Lock[], balance)

  const labels = Object.keys(formattedSchedules)

  const data = {
    labels,
    datasets: [
      {
        label: "Unlock Schedule",
        data: labels.map((label) => formattedSchedules[label]),
        fill: true,
        borderColor: colors.primary.dark,
        backgroundColor: colors.primary.softTransparent,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  }

  const showLock = Number(formatEther(locked)) > 0

  return (
    <Box {...rest}>
      <HStack spacing={-14} whiteSpace="nowrap">
        <HStack display={showLock ? "" : "none"}>
          <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} closeOnBlur={false}>
            <PopoverTrigger>
              <Center
                display={showLock ? "" : "none"}
                {...pillContainerStyles}
                pr="60px"
                left={0}
                borderColor={colors.gray[700]}
              >
                <Box _hover={{ cursor: "pointer" }} mx={1}>
                  <Text id={LOCKED_REF} variant="number" mx={2} display="inline" />
                  <FontAwesomeIcon icon={faLock} size="sm" color={colors.gray[700]} />
                </Box>
              </Center>
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

const formatSchedules = (lockSchedules: Lock[], balance: ethers.BigNumber) => {
  if (!lockSchedules || lockSchedules?.length === 0) return []
  const now = new Date().toDateString()
  let curBalance = Number(ethers.utils.formatEther(balance))
  let dates = {}
  dates[now] = curBalance
  for (var schedule of lockSchedules) {
    const date = new Date(
      Number(ethers.utils.formatUnits(schedule.expirationBlock, "wei")) * 1000,
    ).toDateString()
    curBalance += Number(ethers.utils.formatEther(schedule.amount))
    if (!dates[date]) {
      dates[date] = curBalance
    } else {
      dates[date] += Number(ethers.utils.formatEther(schedule.amount))
    }
  }
  return dates
}

export default React.memo(WalletInfo)
