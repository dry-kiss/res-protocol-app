import { useBigNumberState } from "../utils/ethers"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useWeb3Context } from "web3-react"
import { showConnectWalletToast } from "../../../components/toast/customToasts"
import { CONTRACTS } from "../constants"
import { SourceToken, SourceToken__factory } from "../types"
import { useGetEthersProviderAndSigner } from "../utils/useGetEthersProviderAndSigner"

export const useSourceTokenContract = () => {
  const { provider, signer } = useGetEthersProviderAndSigner()
  const [contract, setContract] = useState<SourceToken>(getSourceTokenContract(provider))

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
  }
}

export const useLockedSourceBalance = () => {
  const [lockedSourceBalance, setLockedSourceBalance] = useBigNumberState()
  const { lockedBalanceOf } = useSourceTokenContract()
  const { account } = useWeb3Context()

  useEffect(() => {
    if (account) lockedBalanceOf().then(setLockedSourceBalance)
  }, [account, lockedBalanceOf, setLockedSourceBalance])

  return lockedSourceBalance
}

export const useSourceBalance = () => {
  const [sourceBalance, setSourceBalance] = useBigNumberState()
  const { balanceOf } = useSourceTokenContract()
  const { account } = useWeb3Context()

  useEffect(() => {
    if (account) balanceOf().then(setSourceBalance)
  }, [account, balanceOf, setSourceBalance])

  return sourceBalance
}

const noWalletConnectedResponse = () => {
  showConnectWalletToast()
  return ethers.BigNumber.from(0)
}

export const getSourceTokenContract = (provider: ethers.providers.Web3Provider) =>
  new ethers.Contract(
    CONTRACTS.SourceToken,
    SourceToken__factory.createInterface(),
    provider,
  ) as SourceToken
