# DApp for exchanging tokens

Uses Resource Protocol and allows you to exchange tokens and manage wallets

## Tech stack

- React
- TypeScript
- Hardhat
- Web3.js
- GraphQL
- Apollo

## How to start app

> install dependencies

```bash
yarn
```

> update env

```bash
  REACT_APP_NETWORK_NAME=localhost
  REACT_APP_SOURCE_ADDRESS=<_local_SOURCE_address>
```

> start the app

```bash
yarn start
```

📱 dapp will be hosted at `http:localhost:3001`

> Add hardhat-network to your metamask with the following:

1. Network Name: `hardhat network`
2. New RPC URL: `http://127.0.0.1:8545`
3. Chain ID: `31337`
4. Currency Symbol (Optional): `CELO`
5. Block Explorer URL (Optional): `https://alfajores-blockscout.celo-testnet.org`
