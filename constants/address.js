const GetChainName = (chain) => {
  if(chain === 11155420){return "OPSEPOLIA"}
  else if(chain === 10){return "OPTIMISM"}
  else if(chain === 420){return "OPGOERLI"}
  
}


const ADDRESS = {
      OPSEPOLIA: {
      PRIZEPOOLSUBGRAPH: 'https://api.studio.thegraph.com/query/63100/pt-v5-op-sepolia/v0.0.6',
        PRIZETOKEN: {
          ADDRESS: "0xD5C2a983D320a881F21Dc68fd89f905Ff1517B2C",
          SYMBOL: "WETH",
          NAME: "WETH",
          DECIMALS: 18,
          GECKO: "weth",
        },
  LIQUIDATIONROUTER: '0xB485D92896944D3f8Dd73A1a61371CDaDb1021f5',
  TOKENFAUCET: '0x22c319d8D70ce238363168DF63F8f9bdd643Dcb9',
  TWABCONTROLLER: '0xB2549f4e7b919004b31925FD4271459273DE8A89',
  VAULTFACTORY: '0x65741e6C8fbCcD3d4BEC7E2179417236FbD33d3A',
  RNG: '0x3a4532a394f322d1b6Af7C88bAB377Fab8F39AaE',
  PRIZEPOOL: '0x31547D3c38F2F8dC92421C54B173F3B27Ab26EbB',
  DRAWMANAGER: '0x1bEbF92C4502341785DDDe63d2f770954CA38e33',
  CLAIMERFACTORY: '0xfF4aD3cb82De6e979B9b0b97D6596058dA26Ca81',
  CLAIMER: '0x189231eBe184a40A8AFb1659985C6D976729780D',
  VAULTS: [
  {
    VAULT: '0x8f8484f30F7A72c8059E6BD709f898606e38DedA',
    LIQUIDATIONPAIR: '0x34BA71d2FCa7D49C581c9c6982C53f1A650158D2',
    SYMBOL: 'pDAI-LY-T',
    NAME: 'Prize DAI Low Yield',
    DECIMALS: 18,
    ASSET: '0x8261Cb9519DD1D80B5ce66B0887C6fCEeA8a64eE',
    GECKO: 'dai',
  },
  {
    VAULT: '0x5B0182E62Baee8Be36AC15696E5C78A0c89b465F',
    LIQUIDATIONPAIR: '0x254BC9Bf6d0b951F4573dee0545f588168dA573b',
    SYMBOL: 'pDAI-HY-T',
    NAME: 'Prize DAI High Yield',
    DECIMALS: 18,
    ASSET: '0x8261Cb9519DD1D80B5ce66B0887C6fCEeA8a64eE',
    GECKO: 'dai',
},
  {
    VAULT: '0x383E8D88De4E3999b43C51cA1819516617260e99',
    LIQUIDATIONPAIR: '0x783EFf635D10cd59852F647686A92708E12Eacdf',
    SYMBOL: 'pUSDC-LY-T',
    NAME: 'Prize USDC Low Yield',
    DECIMALS: 6,
    ASSET: '0x0E13bF42f927575475894f2d5076a7Ac77060eA0',
    GECKO: 'usd-coin',
  },
  {
    VAULT: '0xe8AD34CB77b8DCE62DEd796DCB10b8f574d6A619',
    LIQUIDATIONPAIR: '0xe2eeF2B93196251Af25B3Ddf5e5B1C66A918c9BE',
    SYMBOL: 'pUSDC-HY-T',
    NAME: 'Prize USDC High Yield',
    DECIMALS: 6,
    ASSET: '0x0E13bF42f927575475894f2d5076a7Ac77060eA0',
    GECKO: 'usd-coin',
  },
  {
    VAULT: '0x7eb63F62f2E1E4646793D3dA9C1A232A5f5710B5',
    LIQUIDATIONPAIR: '0xDa9F49298ebBa4707BbeC0A7E2979E03eFfE7Bc2',
    SYMBOL: 'pGUSD-T',
    NAME: 'Prize GUSD',
    DECIMALS: 2,
    ASSET: '0x493c7081FAab6e5B2d6b18d9311918580e88c6bF',
    GECKO: 'gemini-dollar',
  },
  {
    VAULT: '0x1B751A1F3b558173DF9832d4564E6B38db7552c6',
    LIQUIDATIONPAIR: '0x729e4DFFfd394e817Be3c23ea5f94919904d601f',
    SYMBOL: 'pWBTC-T',
    NAME: 'Prize WBTC',
    DECIMALS: 8,
    ASSET: '0x45bbc6B553D2Afc4d3e376B22f70A67d9a26f819',
    GECKO: 'wrapped-bitcoin',
  },
  {
    VAULT: '0xf04Aa80EaC0043C8F8328Dd35385aaf2C0ed8E9a',
    LIQUIDATIONPAIR: '0xF944b7300D5176fE1e0C199eaE3a5117F8545319',
    SYMBOL: 'pWETH-T',
    NAME: 'Prize WETH',
    DECIMALS: 18,
    ASSET: '0xD5C2a983D320a881F21Dc68fd89f905Ff1517B2C',
    GECKO: 'ethereum',
  }

]
,        BOOSTS: [
/*          {
            VAULT: "",
            LIQUIDATIONPAIR: "0x4a367a4910Bb6759aA618464713C46Ee3D24835b",
            DECIMALS: 18,
            SYMBOL: "POOL",
            NAME: "POOL boosting USDC",

            ASSET: "0x395Ae52bB17aef68C2888d941736A71dC6d4e125",
            ASSETSYMBOL: "POOL",
            GECKO: "pooltogether",
            ICON: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
          },
          {
            VAULT: "",
            LIQUIDATIONPAIR: "0x7D0f99bB82EC093306C86b7E596F313e39Ca7cfF",
            DECIMALS: 18,
            SYMBOL: "POOL",
            NAME: "POOL Boosting WETH",
            ASSET: "0x395Ae52bB17aef68C2888d941736A71dC6d4e125",
            ASSETSYMBOL: "POOL",
            GECKO: "pooltogether",
            ICON: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
          },
*/
        ],
      },
  OPGOERLI: {
    //TWABSUBGRAPH: "https://api.studio.thegraph.com/query/50959/pt-v5-op-goerli-twab-control/v0.0.1",
    // PRIZEPOOLSUBGRAPH:
    //   "https://api.studio.thegraph.com/query/50959/pt-v5-op-goerli-prize-pool/v0.0.1",
    LIQUIDATIONROUTER: "0x31dCb9Ff8AfA40e1F8683eDBD31184aaAA97a835",
    // VAULTFACTORY: "0x7A8f1413B44F7346EAb36c4793Bd54148Ca916A5",
    // LIQUIDATIONPAIRFACTORY: "0x4a798649F6AA23D6a3a1cab65fc0a8fa772E0a40",
    TOKENFAUCET: "0x4dFbf2A0D807c3282FD27b798e9c1C47E101AFD4",
    //    POOLTOKEN: "0x722701e470b556571A7a3586ADaFa2E866CFD1A1",
    POOL: "0x722701e470b556571A7a3586ADaFa2E866CFD1A1",
    TWABCONTROLLER: "0xE7dc3F91D2682a99e40c98aC5a8791461418234F",
    RNGRELAYAUCTION: "0x7C77fE5a4261fe27e9219410c65f9d42747e5F69",

    PRIZETOKEN: {
      ADDRESS: "0x722701e470b556571A7a3586ADaFa2E866CFD1A1",
      NAME: "POOL",
      DECIMALS: 18,
      GECKO: "pooltogether",
    },
    CLAIMER: "0x1a339190FCf8E7715d80FfDb32c97B9d065032b6",
    PRIZEPOOL: "0xb91194FB89561c2Bd7fC26bE68e5EAe5b00f5320",

    VAULTS: [
      {
        VAULT: "0x21925199568C8bd5623622FF31d719749f920A8D",
        LIQUIDATIONPAIR: "0xca07B265354ee6742984dbCF33bc18005982102F",
        SYMBOL: "PDAI-LY-T",
        NAME: "Prize DAI Low Yield",
        DECIMALS: 18,
        ASSET: "0x2b311E07bCE542A73bB4887D0f503f0b6ea70711",
        ASSETSYMBOL: "DAI",
        GECKO: "dai",
        ICON: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png?1696509996",
      },
      {
        VAULT: "0x32C45E4596931eC5900eA4D2703E7CF961Ce2ad6",
        LIQUIDATIONPAIR: "0x27736339D75A0344912c39ce926694a70591e879",
        SYMBOL: "PDAI-HY-T",
        NAME: "Prize DAI High Yield",
        DECIMALS: 18,
        ASSET: "0x2b311E07bCE542A73bB4887D0f503f0b6ea70711",
        ASSETSYMBOL: "DAI",
        GECKO: "dai",
        ICON: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png?1696509996",
      },
      {
        VAULT: "0x61682FBA8394970CE014bcDE8ae0eC149c29757c",
        LIQUIDATIONPAIR: "0x708aaE53B8D0D368087CDFBf42b575E0CAD93975",
        SYMBOL: "PUSDC-LY-T",
        NAME: "Prize USDC Low Yield",
        DECIMALS: 6,
        ASSET: "0x880027cc134A07Ddc9E5c7e7659A11ecfD828705",
        ASSETSYMBOL: "USDC",
        GECKO: "usd-coin",
        ICON: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
      },
      {
        VAULT: "0x171df7a2D8547322de5BA27FD9856B04620A3562",
        LIQUIDATIONPAIR: "0xfFC3dc7C5547FC1385eAB2C36e5b6e3180Fa77aE",
        SYMBOL: "PUSDC-HY-T",
        NAME: "Prize USDC High Yield",
        DECIMALS: 6,
        ASSET: "0x880027cc134A07Ddc9E5c7e7659A11ecfD828705",
        ASSETSYMBOL: "USDC",
        GECKO: "usd-coin",
        ICON: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
      },
      {
        VAULT: "0x0B87bF0822AFAecDEb367cfAaCcf40c0e895F3AD",
        LIQUIDATIONPAIR: "0x241911a08F36bA3370DE45079DC6d77768695D43",
        SYMBOL: "PGUSD-T",
        NAME: "Prize GUSD",
        DECIMALS: 2,
        ASSET: "0x206acF3BBEC50972880e665EE7D03342A2fF9F5d",
        ASSETSYMBOL: "GUSD",
        GECKO: "gemini-dollar",
        ICON: "https://assets.coingecko.com/coins/images/5992/standard/gemini-dollar-gusd.png?1696506408",
      },
      {
        VAULT: "0x7Ea2e76587962c526B60492bd8342AAe859f1219",
        LIQUIDATIONPAIR: "0x731aA90d8281EbC205448338224aF3f3dea3AD70",
        SYMBOL: "PWBTC-T",
        NAME: "Prize WBTC",
        DECIMALS: 8,
        ASSET: "0x8778DA5Ed4B586960094d43c5a3a52da3a4aE613",
        ASSETSYMBOL: "WBTC",
        GECKO: "wrapped-bitcoin",
        ICON: "https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png?1696507857",
      },
      {
        VAULT: "0x7da2c9C9F3147275837Be99029A2437f8d7b54D6",
        LIQUIDATIONPAIR: "0x428b3d2a3CCd3E97DEE5E667c3BE914c19ee174e",
        SYMBOL: "PWETH-T",
        NAME: "Prize WETH",
        DECIMALS: 18,
        ASSET: "0xE62aC4184f04f0BA3C99DD2fe931cDc4D0489ac9",
        ASSETSYMBOL: "WETH",
        GECKO: "weth",
        ICON: "https://uploads-ssl.webflow.com/631993187031511c025c721d/633c1ccea93ff4709ab091c2_633be870ec7f86530e8e5419_WETH.png",
      },
    ],
    BOOSTERS: [],
  }, 

  OPGOERLI: {
    //TWABSUBGRAPH: "https://api.studio.thegraph.com/query/50959/pt-v5-op-goerli-twab-control/v0.0.1",
    // PRIZEPOOLSUBGRAPH:
    //   "https://api.studio.thegraph.com/query/50959/pt-v5-op-goerli-prize-pool/v0.0.1",
    LIQUIDATIONROUTER: "0x31dCb9Ff8AfA40e1F8683eDBD31184aaAA97a835",
    // VAULTFACTORY: "0x7A8f1413B44F7346EAb36c4793Bd54148Ca916A5",
    // LIQUIDATIONPAIRFACTORY: "0x4a798649F6AA23D6a3a1cab65fc0a8fa772E0a40",
    TOKENFAUCET: "0x4dFbf2A0D807c3282FD27b798e9c1C47E101AFD4",
    //    POOLTOKEN: "0x722701e470b556571A7a3586ADaFa2E866CFD1A1",
    POOL: "0x722701e470b556571A7a3586ADaFa2E866CFD1A1",
    TWABCONTROLLER: "0xE7dc3F91D2682a99e40c98aC5a8791461418234F",
    RNGRELAYAUCTION: "0x7C77fE5a4261fe27e9219410c65f9d42747e5F69",

    PRIZETOKEN: {
      ADDRESS: "0x722701e470b556571A7a3586ADaFa2E866CFD1A1",
      NAME: "POOL",
      DECIMALS: 18,
      GECKO: "pooltogether",
    },
    CLAIMER: "0x1a339190FCf8E7715d80FfDb32c97B9d065032b6",
    PRIZEPOOL: "0xb91194FB89561c2Bd7fC26bE68e5EAe5b00f5320",

    VAULTS: [
      {
        VAULT: "0x21925199568C8bd5623622FF31d719749f920A8D",
        LIQUIDATIONPAIR: "0xca07B265354ee6742984dbCF33bc18005982102F",
        SYMBOL: "PDAI-LY-T",
        NAME: "Prize DAI Low Yield",
        DECIMALS: 18,
        ASSET: "0x2b311E07bCE542A73bB4887D0f503f0b6ea70711",
        ASSETSYMBOL: "DAI",
        GECKO: "dai",
        ICON: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png?1696509996",
      },
      {
        VAULT: "0x32C45E4596931eC5900eA4D2703E7CF961Ce2ad6",
        LIQUIDATIONPAIR: "0x27736339D75A0344912c39ce926694a70591e879",
        SYMBOL: "PDAI-HY-T",
        NAME: "Prize DAI High Yield",
        DECIMALS: 18,
        ASSET: "0x2b311E07bCE542A73bB4887D0f503f0b6ea70711",
        ASSETSYMBOL: "DAI",
        GECKO: "dai",
        ICON: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png?1696509996",
      },
      {
        VAULT: "0x61682FBA8394970CE014bcDE8ae0eC149c29757c",
        LIQUIDATIONPAIR: "0x708aaE53B8D0D368087CDFBf42b575E0CAD93975",
        SYMBOL: "PUSDC-LY-T",
        NAME: "Prize USDC Low Yield",
        DECIMALS: 6,
        ASSET: "0x880027cc134A07Ddc9E5c7e7659A11ecfD828705",
        ASSETSYMBOL: "USDC",
        GECKO: "usd-coin",
        ICON: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
      },
      {
        VAULT: "0x171df7a2D8547322de5BA27FD9856B04620A3562",
        LIQUIDATIONPAIR: "0xfFC3dc7C5547FC1385eAB2C36e5b6e3180Fa77aE",
        SYMBOL: "PUSDC-HY-T",
        NAME: "Prize USDC High Yield",
        DECIMALS: 6,
        ASSET: "0x880027cc134A07Ddc9E5c7e7659A11ecfD828705",
        ASSETSYMBOL: "USDC",
        GECKO: "usd-coin",
        ICON: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
      },
      {
        VAULT: "0x0B87bF0822AFAecDEb367cfAaCcf40c0e895F3AD",
        LIQUIDATIONPAIR: "0x241911a08F36bA3370DE45079DC6d77768695D43",
        SYMBOL: "PGUSD-T",
        NAME: "Prize GUSD",
        DECIMALS: 2,
        ASSET: "0x206acF3BBEC50972880e665EE7D03342A2fF9F5d",
        ASSETSYMBOL: "GUSD",
        GECKO: "gemini-dollar",
        ICON: "https://assets.coingecko.com/coins/images/5992/standard/gemini-dollar-gusd.png?1696506408",
      },
      {
        VAULT: "0x7Ea2e76587962c526B60492bd8342AAe859f1219",
        LIQUIDATIONPAIR: "0x731aA90d8281EbC205448338224aF3f3dea3AD70",
        SYMBOL: "PWBTC-T",
        NAME: "Prize WBTC",
        DECIMALS: 8,
        ASSET: "0x8778DA5Ed4B586960094d43c5a3a52da3a4aE613",
        ASSETSYMBOL: "WBTC",
        GECKO: "wrapped-bitcoin",
        ICON: "https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png?1696507857",
      },
      {
        VAULT: "0x7da2c9C9F3147275837Be99029A2437f8d7b54D6",
        LIQUIDATIONPAIR: "0x428b3d2a3CCd3E97DEE5E667c3BE914c19ee174e",
        SYMBOL: "PWETH-T",
        NAME: "Prize WETH",
        DECIMALS: 18,
        ASSET: "0xE62aC4184f04f0BA3C99DD2fe931cDc4D0489ac9",
        ASSETSYMBOL: "WETH",
        GECKO: "weth",
        ICON: "https://uploads-ssl.webflow.com/631993187031511c025c721d/633c1ccea93ff4709ab091c2_633be870ec7f86530e8e5419_WETH.png",
      },
    ],
    BOOSTERS: [],
  },
};

  module.exports = { ADDRESS, GetChainName };
