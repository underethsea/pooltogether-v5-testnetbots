const { ethers } = require("ethers");
const { CONTRACTS } = require("../constants/contracts");
const { ADDRESS } = require("../constants/address.js");
const { CONFIG } = require("../constants/config")
const { ABI } = require("../constants/abi")
const { PROVIDERS } = require("../constants/providers")
const chainName = CONFIG.CHAINNAME

const assetIcons = {
  'POOL': "https://assets.coingecko.com/coins/images/14003/standard/PoolTogether.png?1696513732",
  'DAI': "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png?1696509996",
  'USDC': "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
  'WETH': "https://uploads-ssl.webflow.com/631993187031511c025c721d/633c1ccea93ff4709ab091c2_633be870ec7f86530e8e5419_WETH.png",
  'GUSD': "https://assets.coingecko.com/coins/images/5992/standard/gemini-dollar-gusd.png?1696506408",
  'WBTC': "https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png?1696507857",
  // Add more assets as needed
};
const vaultIcons = {
  'USDC': "https://app.cabana.fi/icons/pUSDC.e.svg",
  'WETH': "https://app.cabana.fi/icons/pWETH.svg",
  'DAI': "https://app.cabana.fi/icons/pDAI.svg",
  // ... add other mappings as needed
};

const geckoMap = {
  'POOL': 'pooltogether',
  'DAI': 'dai',
  'USDC': 'usd-coin',
  'WETH': 'ethereum',
  'GUSD': 'gemini-dollar',
  'WBTC': 'wrapped-bitcoin',
};

// Example usage:
const assetSymbol = 'WETH';
const geckoName = geckoMap[assetSymbol]; // This will be 'ethereum'

function matchVaultIcon(symbol, iconMap) {
  // Normalize the input symbol to uppercase and remove non-alphanumeric characters
  const normalizedSymbol = symbol.toUpperCase().replace(/[^A-Z0-9]/g, '');
  
  // Attempt to find a match in the iconMap keys
  const matchKey = Object.keys(iconMap).find(key => 
    normalizedSymbol.includes(key.toUpperCase())
  );
  
  return matchKey ? iconMap[matchKey] : ''; // Return the matched icon URL or an empty string if not found
}
function matchGecko(symbol, geckoMap) {
  // Normalize the symbol to remove extra characters
  const normalizedSymbol = symbol.replace(/[^a-zA-Z]/g, '');
  return geckoMap[normalizedSymbol] || ''; // Default to empty string if not found
}
async function go() {
  let vaults = [];
  for (let index = 0; index < ADDRESS[chainName].VAULTS.length; index++) {
    const vault = ADDRESS[chainName].VAULTS[index];
    const liquidationpair = await CONTRACTS.VAULTS[chainName][index].VAULT.liquidationPair();
    const name = await CONTRACTS.VAULTS[chainName][index].VAULT.name();
    const symbol = await CONTRACTS.VAULTS[chainName][index].VAULT.symbol();
    const decimals = await CONTRACTS.VAULTS[chainName][index].VAULT.decimals();
    const asset = await CONTRACTS.VAULTS[chainName][index].VAULT.asset();
    const assetContract = new ethers.Contract(asset,ABI.ERC20,PROVIDERS[CONFIG.CHAINNAME])
    const assetSymbol = await assetContract.symbol()
    const icon = assetIcons[assetSymbol] || ""
    const vaultIcon = matchVaultIcon(symbol, vaultIcons)
    const gecko = matchGecko(assetSymbol,geckoMap)
    vaults.push({
      VAULT: vault.VAULT,
      //LIQUIDATIONPAIR: vault.LIQUIDATIONPAIR,
      LIQUIDATIONPAIR: liquidationpair,
      SYMBOL: symbol,
      NAME: name,
      DECIMALS: decimals,
      ASSET: asset,
      ASSETSYMBOL: assetSymbol,
      ICON: icon,
      GECKO: gecko,
      VAULTICON: vaultIcon
    });
  }
  console.log(vaults)
}

go().catch((error) => {
  console.error(error);
});
