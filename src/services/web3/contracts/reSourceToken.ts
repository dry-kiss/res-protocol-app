import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useWeb3Context } from "web3-react"

import { CONTRACTS } from "../constants"
import { SourceToken, SourceToken__factory } from "../types"
import { useGetEthersProviderAndSigner } from "../utils/useGetEthersProviderAndSigner"

const APPROVED_VALUE = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

export const useReSourceTokenContract = () => {
  const context = useWeb3Context()
  const { provider, signer } = useGetEthersProviderAndSigner()
  const [contract, setContract] = useState<SourceToken>(getReSourceTokenContract(provider))

  useEffect(() => {
    setContract(getReSourceTokenContract(provider))
  }, [provider])

  return {
    contract,
    balanceOf: async () => {
      return contract.connect(signer).balanceOf(await signer.getAddress())
    },
    lockedBalanceOf: async () => {
      return (await contract.connect(signer).locks(await signer.getAddress())).totalAmount
    },
  }
}

export const getReSourceTokenContract = (provider: ethers.providers.Web3Provider) =>
  new ethers.Contract(
    CONTRACTS.SourceToken,
    SourceToken__factory.createInterface(),
    provider,
  ) as SourceToken
