const { CONTRACTS } = require("./constants/contracts");
const { CONFIG } = require("./constants/config");
const { PROVIDERS } = require("./constants/providers.js");
const { ADDRESS } = require("./constants/address.js");
const ethers = require("ethers");
const { GeckoIDPrices } = require("./utilities/geckoFetch.js");
const { Multicall } = require("./utilities/multicall.js");
const { GasEstimate } = require("./utilities/gas.js");

// todo there is possible lapse where draw is not awarded and script still wants to finish
// todo, possible reserve doesnt have enough to pay for RNG + finishDraw

const RETRYTIME = CONFIG.RNGRETRY * 1000

const prizeTokenSymbol = ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.SYMBOL

async function checkAndCompleteRng() {
  const callsMain = [
    CONTRACTS.DRAWMANAGER[CONFIG.CHAINNAME].canStartDraw(),
    CONTRACTS.PRIZEPOOL[CONFIG.CHAINNAME].getDrawIdToAward(),
    CONTRACTS.PRIZEPOOL[CONFIG.CHAINNAME].getOpenDrawId(),
    CONTRACTS.DRAWMANAGER[CONFIG.CHAINNAME].auctionDuration(),
    //CONTRACTS.R.currentFractionalReward(),
  ];

  // Execute the multicall
  let canStartDraw;
  try {
    [canStartDraw, drawIdToAward, openDrawId, auctionDuration] = await Multicall(
      callsMain,
      CONFIG.CHAINNAME
    );
  } catch (e) {
    console.log("error getting auction status and reward fraction", e);
  }
const openDrawClosesAt = await CONTRACTS.PRIZEPOOL[CONFIG.CHAINNAME].drawClosesAt(openDrawId)
const drawToAwardClosedAt = await CONTRACTS.PRIZEPOOL[CONFIG.CHAINNAME].drawClosesAt(drawIdToAward)
//console.log(`${Date.now()/1000} now ${drawToAwardClosedAt} closed at ${auctionDuration} auction time`)
console.log(`open draw ${openDrawId} closes in ${timeUntil(openDrawClosesAt)}`)
if(Date.now()/1000-drawToAwardClosedAt>auctionDuration){console.log("draw auction has expired")
const waitTime = parseInt(openDrawClosesAt) * 1000 - Date.now() + 1000;
        // Set a timeout to wait until just after drawClosesAt to run the check again
        if (waitTime > 0) {
          timeoutId = setTimeout(checkAndCompleteRng, waitTime);
          console.log(
            `Waiting for ${waitTime / 1000} seconds until the next draw closes.`
          );
        }
}else{
  if (canStartDraw) {
    //console.log("rng auction is open");
const gasPrice = await PROVIDERS[CONFIG.CHAINNAME].getGasPrice()
    const calls = [
      //CONTRACTS.PRIZEPOOL[CONFIG.CHAINNAME].reserve(),
      //CONTRACTS.PRIZEPOOL[CONFIG.CHAINNAME].pendingReserveContributions(),
      CONTRACTS.DRAWMANAGER[CONFIG.CHAINNAME].startDrawReward(),
      CONTRACTS.RNG[CONFIG.CHAINNAME].estimateRandomizeFee(gasPrice),
    ];

    // Use Promise.all to execute Multicall, getGasPrice, and getFeeData in parallel
    const multicallResults = await Multicall(calls, CONFIG.CHAINNAME)
    const [startDrawAward, estimateFee] = multicallResults;
//console.log(estimateFee.toString())

    //console.log("reserve open draw",reserveForOpenDraw)
    /*    const totalReserve = reserve.add(reserveForOpenDraw);
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
*/


    console.log(
      "RNG auction is open, startDraw award",
      ethers.utils.formatUnits(
        startDrawAward,
        ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.DECIMALS
      ),prizeTokenSymbol
    );
    // console.log("return for debug");return
console.log("start award",startDrawAward/1e18,"estimate fee",estimateFee/1e18)
    if (startDrawAward.gt(estimateFee)) {
      console.log("Reward greater than ",
        estimateFee / 1e18,"ETH",
        " fee, lets check gas cost"
      );
      try {

        /*const estimateRngTx = await CONTRACTS.RNGWITHSIGNER[CONFIG.CHAINNAME].estimateGas.startDraw(
      rngPayable,
      ADDRESS[CONFIG.CHAINNAME].DRAWMANAGER,
      CONFIG.WALLET,
      {maxPriorityFeePerGas: "1000001",maxFeePerGas: "1000002",
        gasLimit: 560000,
        value: rngPayable,
      }
    );


console.log("estimate",estimateRngTx.toString())*/
        const args = [
          estimateFee.toString(),
          ADDRESS[CONFIG.CHAINNAME].DRAWMANAGER,
          CONFIG.WALLET,
        /*  {
            maxPriorityFeePerGas: "1000001",
            maxFeePerGas: "1000002",
            //gasLimit: 560000,
            value: estimateFee.toString(),
          },*/
        ];
        let  web3TotalGasCost
        try{
        web3TotalGasCost = await GasEstimate(
          CONTRACTS.RNGWITHSIGNER[CONFIG.CHAINNAME],
          "startDraw",
          args,
          CONFIG.PRIORITYFEE,
          {value:estimateFee.toString()} // pass the fee value to send
        );}catch(e){console.log("error sending RNG, we will retry");setTimeout(checkAndCompleteRng, RETRYTIME);}
const totalStartDrawCost = web3TotalGasCost.add(estimateFee)

if(startDrawAward.gt(totalStartDrawCost)){
        //console.log("est gas", web3TotalGasCost / 1e18, "ETH");
        const rngTx = await CONTRACTS.RNGWITHSIGNER[CONFIG.CHAINNAME].startDraw(
          estimateFee.toString(),
          ADDRESS[CONFIG.CHAINNAME].DRAWMANAGER,
          CONFIG.WALLET,
          {
            maxPriorityFeePerGas: "1000001",
            maxFeePerGas: "1000002",
            //nonce: '157',
            //gasLimit: 560000,
            value: estimateFee.toString(),
          }
        );
        console.log("sending! pending tx confirmation....");
        const rngReceipt = await rngTx.wait();
        console.log("success tx hash ", rngReceipt.transactionHash);
        console.log("gas used ", rngReceipt.gasUsed.toString());
      setTimeout(checkAndCompleteRng, RETRYTIME);
}else {console.log((totalStartDrawCost/1e18).toFixed(7),"fee + gas  still exceeds ",(startDrawAward/1e18).toFixed(7)," reward, will retry");setTimeout(checkAndCompleteRng, RETRYTIME/4);}
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("NOT profitable with payable cost")
      console.log("retrying in ", RETRYTIME/1000/3 ," seconds");
      setTimeout(checkAndCompleteRng, RETRYTIME/3);
    }
  } else {
    console.log("rng auction closed");
    const canFinish = await CONTRACTS.DRAWMANAGER[
      CONFIG.CHAINNAME
    ].canFinishDraw();
    if (canFinish) {
      const finishReward = await CONTRACTS.DRAWMANAGER[
        CONFIG.CHAINNAME
      ].finishDrawReward();
      console.log(
        "finish draw reward",finishReward.eq(0) ? "still building, will retry" :
        ethers.utils.formatUnits(
          finishReward,
          ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.DECIMALS
        )
      );
      if (finishReward.gt(0)) {
        // const finishTxGas = await CONTRACTS.DRAWMANAGERWITHSIGNER[
        //   CONFIG.CHAINNAME
        // ].estimateGas.finishDraw(CONFIG.WALLET);
        // console.log("finish tx gas", finishTxGas.toString());
        const gasEst = await GasEstimate(CONTRACTS.DRAWMANAGERWITHSIGNER[
          CONFIG.CHAINNAME
        ],"finishDraw",[CONFIG.WALLET],CONFIG.PRIORITYFEE)
        //console.log("estimated gas cost ",gasEst/1e18)
        // todo add estimate fee
        if(gasEst.lt(finishReward)){
        const finishTx = await CONTRACTS.DRAWMANAGERWITHSIGNER[
          CONFIG.CHAINNAME
        ].finishDraw(CONFIG.WALLET, {
          maxPriorityFeePerGas: "1000000",
          maxFeePerGas: "1000000",
        });
        console.log("sending! pending tx confirmation....");
        const finishReceipt = await finishTx.wait();
        console.log("success tx hash ", finishReceipt.transactionHash);
        console.log("gas used ", finishReceipt.gasUsed.toString());}
        setTimeout(checkAndCompleteRng, RETRYTIME);
      } else {
        console.log("finish draw gas exceed reward")
        setTimeout(checkAndCompleteRng, RETRYTIME/3);
      }
    } else {
      if (drawIdToAward !== openDrawId) {
        console.log(
          "waiting for random number to finish fetching then we can finish the draw"
        );
        setTimeout(checkAndCompleteRng, RETRYTIME);
      } else {
        const drawClosesAt = await CONTRACTS.PRIZEPOOL[
          CONFIG.CHAINNAME
        ].drawClosesAt(drawIdToAward);
        const waitTime = parseInt(drawClosesAt) * 1000 - Date.now() + 1000;
        // Set a timeout to wait until just after drawClosesAt to run the check again
        if (waitTime > 0) {
          timeoutId = setTimeout(checkAndCompleteRng, waitTime);
          console.log(
            `Waiting for ${waitTime / 1000} seconds until the next draw closes.`
          );
        }else {console.log("retrying in ", RETRYTIME/1000 ," seconds");
        setTimeout(checkAndCompleteRng, RETRYTIME);}}
      }
    }
  }
}

function timeUntil(timestamp) {
  const now = Date.now();
  const difference = timestamp*1000 - now;

  // Check if the timestamp is in the future
  if (difference < 0) {
    return 'The timestamp is in the past!';
  }

  // Convert milliseconds into minutes and seconds
  const minutes = Math.floor(difference / 60000); // 60000 milliseconds in a minute
  const seconds = Math.floor((difference % 60000) / 1000); // remainder of minutes converted to seconds

  // Return a string formatted as "minutes:seconds"
  return `${minutes}m ${seconds}s`;
}
// USE THESE FUNCTIONS TO RUN AUCTION
checkAndCompleteRng();

// Call the async function every 30 seconds
/*setInterval(async () => {
  try {
    await checkAndCompleteRng();
  } catch (error) {
    console.error("Error executing function:", error);
  }
}, 30000);*/
// If you ever want to stop the interval, you can use:
// clearInterval(intervalId);
