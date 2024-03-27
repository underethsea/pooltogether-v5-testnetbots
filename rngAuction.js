const { CONTRACTS } = require("./constants/contracts");
const { CONFIG } = require("./constants/config");
const { PROVIDERS } = require("./constants/providers.js");
const { ADDRESS, ADDRESS_AUCTION } = require("./constants/address.js");
const ethers = require("ethers");
const { GeckoIDPrices } = require("./utilities/geckoFetch.js");
const { Multicall } = require("./utilities/multicall.js");

const rngPayable = ethers.utils.parseEther(".00005");
const rngProfitMargin = 0.94;
const rngErrorMargin = 1.02; // 1.03 = 3%
const maxSpendPercentage = 65; // 65 would mean the RNG cannot exceed spending 65% of the reserve because that could mean the relay could exceeding available funding

async function checkAndCompleteRng() {
  const callsMain = [
    CONTRACTS.DRAWMANAGER[CONFIG.CHAINNAME].canStartDraw(),
    //CONTRACTS.R.currentFractionalReward(),
  ];

  // Execute the multicall
  let canStartDraw;
  try {
    [canStartDraw] = await Multicall(callsMain, CONFIG.CHAINNAME);
  } catch (e) {
    console.log("error getting auction status and reward fraction", e);
  }
  if (canStartDraw) {
    console.log("rng auction is open");
    console.log("");

    /*
    const prices = await GeckoIDPrices(["weth"]);
    const poolPrice = prices[0];
    const ethPrice = prices[1];
    const linkPrice = prices[2];
*/
    // console.log("Reward Fraction: ", rewardFraction.toString());

    const calls = [
      CONTRACTS.PRIZEPOOL[CONFIG.CHAINNAME].reserve(),
      CONTRACTS.PRIZEPOOL[CONFIG.CHAINNAME].pendingReserveContributions(),
      CONTRACTS.DRAWMANAGER[CONFIG.CHAINNAME].startDrawAward(),
    ];

    // Use Promise.all to execute Multicall, getGasPrice, and getFeeData in parallel
    const [multicallResults, mainnetGasNow, feeData] = await Promise.all([
      Multicall(calls, CONFIG.CHAINNAME),
      PROVIDERS.MAINNET.getGasPrice(),
      PROVIDERS.MAINNET.getFeeData(),
    ]);

    // Destructure the results from the multicall
    const [reserve, reserveForOpenDraw, startDrawAward] = multicallResults;

    //console.log("Fee Data: ", feeData)
    const lastBaseFeePerGas = Number(feeData.lastBaseFeePerGas);
    const maxFeePerGas = Number(feeData.maxFeePerGas);
    const maxPriorityFeePerGas = Number(feeData.maxPriorityFeePerGas);
    const gasPrice = Number(feeData.gasPrice);
    /*
console.log("gasPrice",gasPrice)
console.log("lastBaseFeePerGas",lastBaseFeePerGas)
console.log("maxPriorityFeePerGas",maxPriorityFeePerGas)
console.log("maxFeePerGas",maxFeePerGas)

*/
    //console.log("reserve open draw",reserveForOpenDraw)
    const totalReserve = reserve.add(reserveForOpenDraw);
    console.log(
      "total reserve",
      Number(
        ethers.utils.formatUnits(
          totalReserve,
          ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.DECIMALS
        )
      ).toFixed(4),
      ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.SYMBOL
    );
    const totalReserveFormatted = ethers.utils.formatUnits(
      totalReserve,
      ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.DECIMALS
    );
    //console.log(poolPrice)
    //console.log(ethPrice)
    //console.log(linkPrice)
    /*console.log(
      " ETH $",
      ethPrice,
    );
*/
    console.log("");
    //    const { rngAuctionReward, rewardInDollars } = calculateAuctionRewards(rewardFraction, totalReserveFormatted, poolPrice);
    // if(rngAuctionReward > (totalReserveFormatted * (maxSpendPercentage/100))) {console.log("auction cost has exceeded projected reserve funding, exiting....");return}
    /*
    console.log(
      "rng auction reward in POOL",
      rngAuctionReward.toFixed(4),
      " $",
      (rngAuctionReward * poolPrice).toFixed(2)
    );
*/
    // add check to see if has LINK balance and approval

    //  const gasCostUsd = await calculateGasCost(mainnetGasNow, ethPrice);

    /*    console.log("estimated gas cost $", gasCostUsd.toFixed(2)," @ ",(mainnetGasNow/1e9).toFixed(2),"gwei");
    const rngCosts = (linkCost + gasCostUsd) * rngErrorMargin;
console.log("netting $",((rngAuctionReward * poolPrice)-rngCosts).toFixed(2))
   if (rngCosts + rngProfitMargin < rngAuctionReward * poolPrice) {

    console.log(
        "profitable!! pool reward$",
        rngAuctionReward * poolPrice,
        " - link cost ",
        linkCost,
        " gas cost",
        gasCostUsd,
        " profit margin required ",
        rngProfitMargin
      );
*/

console.log("start draw award",ethers.utils.formatUnits(startDrawAward,ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.DECIMALS))
    // console.log("return for debug");return
if(startDrawAward.gt(rngPayable)){
    console.log("PROFTABLE! payable amount sending",rngPayable/1e18)
    const rngTx = await CONTRACTS.RNGWITHSIGNER[CONFIG.CHAINNAME].startDraw(
      rngPayable,
      ADDRESS[CONFIG.CHAINNAME].DRAWMANAGER,
      CONFIG.WALLET,
      {
        gasLimit: 560000,
        value: rngPayable,
      }
    );
    console.log("pending tx confirmation....");
    const rngReceipt = await rngTx.wait();
    console.log("success tx hash ", rngReceipt.transactionHash);
    console.log("gas used ", rngReceipt.gasUsed.toString());
}else{console.log("NOT profitable with payable amount",rngPayable/1e18)}
  } else {
    console.log("rng auction closed");
    const canFinish = await CONTRACTS.DRAWMANAGER[
      CONFIG.CHAINNAME
    ].canFinishDraw();
    if (canFinish) {
        const finishReward = await CONTRACTS.DRAWMANAGER.finishDrawReward()
        console.log("finish draw reward",ethers.utils.formatUnits(finishReward,ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.DECIMALS))
      const finishTxGas = await CONTRACTS.DRAWMANAGERWITHSIGNER[
        CONFIG.CHAINNAME
      ].estimateGas.finishDraw(CONFIG.WALLET);
      console.log("finish tx gas", finishTxGas.toString());
      const finishTx = await CONTRACTS.DRAWMANAGERWITHSIGNER[
        CONFIG.CHAINNAME
      ].finishDraw(CONFIG.WALLET);
      console.log("pending tx confirmation....");
      const finishReceipt = await finishTx.wait();
      console.log("success tx hash ", finishReceipt.transactionHash);
      console.log("gas used ", finishReceipt.gasUsed.toString());
    } else {
      console.log("no draw to finish either");
    }
  }
}

async function calculateGasCost(mainnetGasNow, ethPrice) {
  try {
    const rngGas = await CONTRACTS.CHAINLINKDIRECTAUCTIONHELPERWITHSIGNER[
      "MAINNET"
    ].estimateGas.transferFeeAndStartRngRequest(CONFIG.WALLET);
    const gasCost = rngGas.mul(mainnetGasNow);
    return (gasCost / 1e18) * ethPrice;
  } catch (e) {
    const gasCost = GAS_ESTIMATION * Number(mainnetGasNow);
    console.log("Error estimating gas: ", e.message);
    return (gasCost / 1e18) * ethPrice;
  }
}

function calculateAuctionRewards(
  rewardFraction,
  totalReserveFormatted,
  poolPrice
) {
  const auctionFraction = rewardFraction / 1e18;
  const rngAuctionReward = auctionFraction * totalReserveFormatted;
  return {
    rngAuctionReward: rngAuctionReward,
    rewardInDollars: rngAuctionReward * poolPrice,
  };
}

// USE THESE FUNCTIONS TO RUN AUCTION
checkAndCompleteRng();

// Call the async function every 30 seconds
setInterval(async () => {
  try {
    await checkAndCompleteRng();
  } catch (error) {
    console.error("Error executing function:", error);
  }
}, 30000);
// If you ever want to stop the interval, you can use:
// clearInterval(intervalId);
