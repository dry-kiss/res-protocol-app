import { useWeb3Context } from "web3-react"
import { requestAddNetwork } from "../../services/web3/utils/metamask"

const useConnectWallet = () => {
  const context = useWeb3Context()

  return async () => {
    Promise.all([
      requestAddNetwork(), //
      context.setFirstValidConnector(["MetaMask"]),
    ])
  }
}

export default useConnectWallet
