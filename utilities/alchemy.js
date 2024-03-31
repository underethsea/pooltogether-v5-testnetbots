const { Network, Alchemy } = require("alchemy-sdk");
const sdk = require('api')('@alchemy-docs/v1.0#5duyw41qlfsv71w0');
require('dotenv').config(); // Adjust the path as needed to load your .env file
const { CONFIG } = require("../constants/config")
// Optional Config object, but defaults to demo api-key and eth-mainnet.
let net
if(CONFIG.CHAINID === 10){net = Network.OPT_MAINNET}else if (CONFIG.CHAINID===11155420){net = Network.OPT_SEPOLIA}
const settings = {
  apiKey: process.env.ALCHEMY_KEY, // Replace with your Alchemy API Key.
  network: net
};

const alchemy = new Alchemy(settings);

async function AlchemyGas() {
  try {
    const gasPrice = await alchemy.core.getGasPrice();
    console.log("alchemy gas price", gasPrice / 1e9);
    return gasPrice;
  } catch (error) {
    console.error("Error fetching gas price:", error);
    throw error; // Propagate the error
  }
}

//Required installation: npm install api --save
async function AlchemyTransactionReceipt(hash) {
  return new Promise((resolve, reject) => {
    sdk.ethGettransactionreceiptOptimism({
      id: 1,
      jsonrpc: '2.0',
      params: [hash], // Pass the hash variable directly
      method: 'eth_getTransactionReceipt'
    }, { apiKey: 'Erv1WtDTYU3T6qBme4L4b6vNMypwtY9Y' })
      .then(({ data }) => {
        resolve(data); // Resolve the Promise with the data
      })
      .catch(err => {
        reject(err); // Reject the Promise with an error if there's an issue
      });
  });
}

module.exports = { AlchemyGas, AlchemyTransactionReceipt };
