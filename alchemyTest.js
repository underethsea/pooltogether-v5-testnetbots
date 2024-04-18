const{ Network, Alchemy } =require("alchemy-sdk");
const sdk = require('api')('@alchemy-docs/v1.0#5duyw41qlfsv71w0');
const {ethers} = require('ethers')
const {PROVIDERS} = require('./constants/providers')
// Optional config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "", // Replace with your Alchemy API Key.
  network: Network.OPT_SEPOLIA, // Replace with your network.
};
const alchemy = new Alchemy(settings);
//const hash = "0xa9b22b45d19e8a63e4380dbc9682950a44031e22ea3c24267c0b90ca03356e2c"
const hash="0xaeb541912b538a21c67f2c200badae45f1e4de1a27f696595e3c2df5337b8481"
//PROVIDERS["OPSEPOLIA"].getTransactionReceipt(hash).then(go=>{console.log(go)})
//console.log(tx)


alchemy.core.getTransactionReceipt(hash)
/*sdk.ethGettransactionreceiptOptimism(
{ id: 1,
      jsonrpc: '2.0',
      params: [hash], // Pass the hash variable directly
      method: 'eth_getTransactionReceipt'
})*/
  .then(go=>console.log(go));
console.log("sdf")
