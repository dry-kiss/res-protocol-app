import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { showConnectWalletToast } from "../../../components/toast/showConnectWalletToast"
import { CONTRACTS } from "../constants"
import { SourceToken, SourceToken__factory } from "../types"
import { useGetEthersProviderAndSigner } from "../utils/useGetEthersProviderAndSigner"

export const useReSourceTokenContract = () => {
  const { provider, signer } = useGetEthersProviderAndSigner()
  const [contract, setContract] = useState<SourceToken>(getReSourceTokenContract(provider))

  useEffect(() => {
    setContract(getReSourceTokenContract(provider))
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
    claimTokens: async () => {
      /*if (!signer)*/ return showConnectWalletToast()
      // add claim tokens call here
    },
  }
}

const noWalletConnectedResponse = () => {
  showConnectWalletToast()
  return ethers.BigNumber.from(0)
}

export const getReSourceTokenContract = (provider: ethers.providers.Web3Provider) =>
  new ethers.Contract(
    CONTRACTS.SourceToken,
    SourceToken__factory.createInterface(),
    provider,
  ) as SourceToken
