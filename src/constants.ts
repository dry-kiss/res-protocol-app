export const NETWORKS = {
  localhost: {
    chainId: "0x7a69",
    blockExplorer: "https://alfajores-forno.celo-testnet.org",
    rpcUrl: "http://" + window.location.hostname + ":8545",
    currencySymbol: "CELO",
    currencyName: "Celo",
  },
  "celo-alfajores": {
    chainId: "0xaef3",
    rpcUrl: `https://alfajores-forno.celo-testnet.org`,
    blockExplorer: "https://alfajores-blockscout.celo-testnet.org",
    currencySymbol: "A-CELO",
    currencyName: "Celo",
  },
  celo: {
    chainId: "0xa4ec",
    rpcUrl: `https://forno.celo.org`,
    blockExplorer: "https://explorer.celo.org",
    currencySymbol: "CELO",
    currencyName: "Celo",
  },
};
