import { useBigNumberState } from "../utils/ethers"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useWeb3Context } from "web3-react"
import { showConnectWalletToast } from "../../../components/toast/customToasts"
import { CONTRACTS } from "../constants"
import { TokenClaim } from "../types"
import { useGetEthersProviderAndSigner } from "../utils/useGetEthersProviderAndSigner"
import { TokenClaim__factory } from "../types/factories/TokenClaim__factory"

export const useTokenClaimContract = () => {
  const { provider, signer } = useGetEthersProviderAndSigner()
  const [contract, setContract] = useState<TokenClaim>(getTokenClaimContract(provider))

  useEffect(() => {
    setContract(getTokenClaimContract(provider))
  }, [provider])

  return {
    contract,
    getClaimTotal: async () => {
      if (!signer) return noWalletConnectedResponse()
      return contract.connect(signer).getClaimTotal(await signer.getAddress())
    },
    claim: async () => {
      if (!signer) return null
      return contract.connect(signer).claim()
    },
  }
}

export const useGetClaimTotal = () => {
  const [claimTotal, setClaimTotal] = useBigNumberState()
  const { getClaimTotal } = useTokenClaimContract()
  const { account } = useWeb3Context()

  useEffect(() => {
    if (account) getClaimTotal().then(setClaimTotal)
  }, [account, claimTotal, setClaimTotal])

  return claimTotal
}

export const useClaim = () => {
  return useTokenClaimContract().claim
}

const noWalletConnectedResponse = () => {
  showConnectWalletToast()
  return ethers.BigNumber.from(0)
}

export const getTokenClaimContract = (provider: ethers.providers.Web3Provider) =>
  new ethers.Contract(
    CONTRACTS.TokenClaim,
    TokenClaim__factory.createInterface(),
    provider,
  ) as TokenClaim
