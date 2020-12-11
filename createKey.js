const {Wallet} = require('@ethersproject/wallet')
const fs = require('fs/promises')

const KEY = 'L1_WALLET_KEY'

;(async () => {
  const wallet = Wallet.createRandom()
  const address = await wallet.getAddress()
  const key = wallet.privateKey

  const file = await fs.readFile('docker-compose.env', 'utf-8')
  const lines = file.split('\n')

  const out = []
  for (let line of lines) {
    if (line === `#${KEY}=`)
      line = `${KEY}=${key}`;
    out.push(line)
  }
  await fs.writeFile('docker-compose.env', out.join('\n'), 'utf-8')
})().catch(err => {
  console.log(err)
  process.exit(1)
})
