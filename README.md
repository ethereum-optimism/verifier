# Verifier

Run an Optimistic Ethereum Verifier and Fraud Prover with minimal configuration.
This repository currently supports the Kovan testnet.

## Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [npm](https://nodejs.org/en/download/) - optional

## Instructions

The configuration options are in the file `docker-compose.env`.

The Fraud Prover needs a private key to be able to send a transaction
containing the fraud proof. To automatically create a key, run the commands:

```bash
$ npm install
$ npm run create-key
```

This will create a key, print the address and populate the `L1_WALLET_KEY`
variable in `docker-compose.env` with the key. Fund the address with Kovan ETH.
Do not use this address on mainnet. To print the address again, rerun the
command `$ npm run create-key`.

The variables that need to be set are `ETH1_HTTP` and `L1_NODE_WEB_3_URL`.

- `ETH1_HTTP` is the Ethereum RPC server that will be used by the verifier
- `L1_NODE_WEB_3_URL` is the Ethereum RPC server that will be used by the fraud prover

These must be set to Ethereum nodes that have synced the Kovan testnet.

To start the Verifier and the Fraud Prover, run the command:

```bash
$ npm start
```
