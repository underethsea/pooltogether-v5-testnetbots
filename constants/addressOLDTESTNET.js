const GetChainName = (chain) => {
  if(chain === 11155420){return "OPSEPOLIA"}
  else if(chain === 10){return "OPTIMISM"}
  else if(chain === 420){return "OPGOERLI"}
  
}


const ADDRESS = {
      OPSEPOLIA: {
      PRIZEPOOLSUBGRAPH: 'https://api.studio.thegraph.com/query/63100/pt-v5-op-sepolia/version/latest',
      TOKENFAUCET: '0x2E07bB630D3E57b3b6c1ADAaA083A27B8d3036a2',
      TWABCONTROLLER: '0xd7a754FCFf13007C8E35aE5c40417432C1918616',
      LIQUIDATIONPAIRFACTORY: '0x5114de3c33458815BaD56B28D32261695490DBf3',
      LIQUIDATIONROUTER: '0xDfCF0c47C5697CDDFADEB7b5CbD29BC6b20c8DD1',
      VAULTFACTORY: '0x2031fc356feec120eFba3BAfA7997d1dfB377Ed4',
      PRIZEPOOL: '0x5e1b40e4249644a7d7589d1197AD0F1628e79FB1',
      CLAIMERFACTORY: '0x1725Be88e09576A61072030ba1f72854410fd33f',
      CLAIMER: '0x239d1befb50fcFF353804C6df1579ED0Bbb9dA07',
        PRIZETOKEN: {
          ADDRESS: "0x1bcd630e1303cef37F19743fbFE84b1b14e7750c",
          SYMBOL: "WETH",
          NAME: "WETH",
          DECIMALS: 18,
          GECKO: "weth",
        },
VAULTS:[
  {
    VAULT: '0x332b1EB2Cc4046954725EbDFB8143fB8354ea9a7',
    LIQUIDATIONPAIR: '0x862cfdc2C03B16be4Db912c99B32fb052B511DC2',
    SYMBOL: 'pDAI-LY-T',
    NAME: 'Prize DAI Low Yield',
    DECIMALS: 18,
    ASSET: '0x34F166839C655F2DcD56638F2CE779fd9B5987a6',
    GECKO: 'dai',
  },
  {
    VAULT: '0x13E37b0Ca8b48fc2818C177c24635F90C1495C5c',
    LIQUIDATIONPAIR: '0x419CA6D3eab772517B025DCB74C0FAf291768e81',
    SYMBOL: 'pDAI-HY-T',
    NAME: 'Prize DAI High Yield',
    DECIMALS: 18,
    ASSET: '0x34F166839C655F2DcD56638F2CE779fd9B5987a6',
    GECKO: 'dai',
  },
  {
    VAULT: '0x602d77e900eCD48ac9b51151936Dcc5Efe2e7FaE',
    LIQUIDATIONPAIR: '0x4e690AA05d9471753cF59F7d59f10B828a081ac5',
    SYMBOL: 'pUSDC-LY-T',
    NAME: 'Prize USDC Low Yield',
    DECIMALS: 6,
    ASSET: '0xE9CB1A8c3C1b5bcE7c6C0FB15F31A3A56209207F',
    GECKO: 'usd-coin',
  },
  {
    VAULT: '0xA2B0321B671A83a98Ff1F5a680b700864f57c6e7',
    LIQUIDATIONPAIR: '0x52868fdB5DF8042f3788c43034f56F4CD7D79F8A',
    SYMBOL: 'pUSDC-HY-T',
    NAME: 'Prize USDC High Yield',
    DECIMALS: 6,
    ASSET: '0xE9CB1A8c3C1b5bcE7c6C0FB15F31A3A56209207F',
    GECKO: 'usd-coin',
  },
  {
    VAULT: '0xd96702995B2bBD78a9A39eF86f4fA5f9704fdC7D',
    LIQUIDATIONPAIR: '0xB2E2624Ce7547FaB0B460B825280ee48E290fF44',
    SYMBOL: 'pGUSD-T',
    NAME: 'Prize GUSD',
    DECIMALS: 2,
    ASSET: '0xCe1fe3170d4ACEFBc3d06595EeF3A918F65000c2',
    GECKO: 'dai',
  },
  {
    VAULT: '0xE77Db9f8b68BC47A82D4F47E68FB57535dF0086e',
    LIQUIDATIONPAIR: '0x0fb047D8deb713e7F11F818675EE9D446Fba29bE',
    SYMBOL: 'pWBTC-T',
    NAME: 'Prize WBTC',
    DECIMALS: 8,
    ASSET: '0x42fd018A6ac84478f28b3f7e322271C83064d737',
    GECKO: 'wrapped-bitcoin',
  },
  {
    VAULT: '0x98CED5d595e8981756f063db8D3c44a6Be9A8F86',
    LIQUIDATIONPAIR: '0x1bb2153644aE16999e0f7e679Ddd0AfFE01B953E',
    SYMBOL: 'pWETH-T',
    NAME: 'Prize WETH',
    DECIMALS: 18,
    ASSET: '0x1bcd630e1303cef37F19743fbFE84b1b14e7750c',
    GECKO: 'weth',
  }
],       
        BOOSTS: [
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
