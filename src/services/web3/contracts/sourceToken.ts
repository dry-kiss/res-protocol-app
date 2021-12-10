import { useBigNumberState } from "../utils/ethers"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useWeb3Context } from "web3-react"
import { showConnectWalletToast } from "../../../components/toast/customToasts"
import { CONTRACTS } from "../constants"
import { useGetEthersProviderAndSigner } from "../utils/useGetEthersProviderAndSigner"
import { useRecoilState } from "recoil"
import { refetchContractsAtom } from "../../../utils/useRefetchData"
import { SourceTokenV2 } from "../types/SourceTokenV2"
import { SourceTokenV2__factory } from "../types"

export const useSourceTokenContract = () => {
  const { provider, signer } = useGetEthersProviderAndSigner()
  const [contract, setContract] = useState<SourceTokenV2>(getSourceTokenContract(provider))

  useEffect(() => {
    setContract(getSourceTokenContract(provider))
  }, [provider])

  return {
    contract,
    balanceOf: async () => {
      if (!signer) return noWalletConnectedResponse()
      return contract.connect(signer).balanceOf(await signer.getAddress())
    },
    lockedBalanceOf: async () => {
      if (!signer) return noWalletConnectedResponse()
      return (await contract.connect(signer).locks(await signer.getAddress())).totalAmount
    },
    getLockSchedules: async () => {
      if (!signer) return noWalletConnectedResponse()
      return await contract.connect(signer).getLockSchedules(await signer.getAddress())
    },
  }
}

export interface Lock {
  amount: ethers.BigNumber
  expirationBlock: ethers.BigNumber
}

export const useLockedSourceBalance = () => {
  const [refetch, setRefetch] = useRecoilState(refetchContractsAtom)
  const [lockedSourceBalance, setLockedSourceBalance] = useBigNumberState()
  const { lockedBalanceOf } = useSourceTokenContract()
  const { account } = useWeb3Context()

  useEffect(() => {
    if (account && refetch.indexOf("SourceToken") !== -1) {
      lockedBalanceOf().then(setLockedSourceBalance)
      setRefetch(refetch.filter((val) => val !== "SourceToken"))
    }
  }, [refetch, account])

  useEffect(() => {
    if (account) lockedBalanceOf().then(setLockedSourceBalance)
  }, [account])

  return lockedSourceBalance
}

export const useGetLockSchedules = () => {
  const [refetch, setRefetch] = useRecoilState(refetchContractsAtom)
  const [lockSchedules, setLockSchedules] = useState<Lock[] | ethers.BigNumber>()
  const { getLockSchedules } = useSourceTokenContract()
  const { account } = useWeb3Context()

  useEffect(() => {
    if (account && refetch.indexOf("SourceToken") !== -1) {
      getLockSchedules().then(setLockSchedules)
      setRefetch(refetch.filter((val) => val !== "SourceToken"))
    }
  }, [refetch, account])

  useEffect(() => {
    if (account) getLockSchedules().then(setLockSchedules)
  }, [account])

  return lockSchedules
}

export const useSourceBalance = () => {
  const [refetch, setRefetch] = useRecoilState(refetchContractsAtom)
  const [sourceBalance, setSourceBalance] = useBigNumberState()
  const { balanceOf } = useSourceTokenContract()
  const { account } = useWeb3Context()

  useEffect(() => {
    if (account && refetch.indexOf("SourceToken") !== -1) {
      balanceOf().then(setSourceBalance)
      setRefetch(refetch.filter((val) => val !== "SourceToken"))
    }
  }, [refetch, account])

  useEffect(() => {
    if (account) balanceOf().then(setSourceBalance)
  }, [account])

  return sourceBalance
}

const noWalletConnectedResponse = () => {
  showConnectWalletToast()
  return ethers.BigNumber.from(0)
}

export const getSourceTokenContract = (provider: ethers.providers.Web3Provider) =>
  new ethers.Contract(
    CONTRACTS.SourceToken,
    SourceTokenV2__factory.createInterface(),
    provider,
  ) as SourceTokenV2
