import { Box, BoxProps } from "@chakra-ui/layout"
import { ethers } from "ethers"
import {
  Lock,
  useGetLockSchedules,
  useSourceBalance,
} from "../../services/web3/contracts/sourceToken"
import colors from "../../theme/foundations/colors"
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
import { atom } from "recoil"
import homeImage from "../../assets/home.svg"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Filler)

export const walletInfoAtom = atom({
  key: "walletInfoAtom",
  default: false,
})

const UnlockScheduleGraph = ({ ...rest }: BoxProps) => {
  const balance = useSourceBalance()
  const lockSchedules = useGetLockSchedules()

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
        backgroundColor: colors.primary.lightTransparent,
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
        // text: "Unlock Schedule",
        // fullSize: true,
        // display: true,
        display: false,
      },
    },
  }

  return (
    <>
      <Box
        {...rest}
        style={{ backgroundImage: `url(${homeImage})` }}
        h="100%"
        backgroundRepeat="no-repeat"
        backgroundPositionY="center"
        backgroundPosition="center"
        backgroundSize="50%"
        alignItems="center"
        w="full"
      >
        <Line options={options} data={data} />
      </Box>
    </>
  )
}

const formatSchedules = (lockSchedules: Lock[], balance: ethers.BigNumber) => {
  if (!lockSchedules || lockSchedules?.length === 0) return []
  const now = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
  let curBalance = Number(ethers.utils.formatEther(balance))
  let dates = {}
  dates[now] = curBalance
  for (var schedule of lockSchedules) {
    const date = new Date(
      Number(ethers.utils.formatUnits(schedule.expirationBlock, "wei")) * 1000,
    ).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    curBalance += Number(ethers.utils.formatEther(schedule.amount))
    if (!dates[date]) {
      dates[date] = curBalance
    } else {
      dates[date] += Number(ethers.utils.formatEther(schedule.amount))
    }
  }
  return dates
}

export default UnlockScheduleGraph
