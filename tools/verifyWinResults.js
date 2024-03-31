const fetch = require('node-fetch');
const { CONTRACTS } = require('../constants/contracts');
const { CONFIG } = require('../constants/config');
const { Multicall } = require("../utilities/multicall");

const BATCH_SIZE = 100;

async function verifyWinners(network, prizePool, drawId) {
  const url = `https://poolexplorer.xyz/${network}-${prizePool}-draw${drawId}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const wins = data.wins;
    let batchCalls = [];
    let falseCount = 0;
    
    for (let win of wins) {
      for (let index of win.i) {
        // Prepare the contract call for Multicall
        const contract = CONTRACTS.PRIZEPOOL[CONFIG.CHAINNAME];
        const call = contract.isWinner(win.v, win.p, win.t, index);

        batchCalls.push(call);

        // Check if we reached the BATCH_SIZE or end of data, then execute
        if (batchCalls.length === BATCH_SIZE || (win === wins[wins.length - 1] && index === win.i[win.i.length - 1])) {
          // Execute batch calls
          const results = await Multicall(batchCalls);
          // Process results
          results.forEach((result, resultIndex) => {
            if (result) {
              console.log(`ok: Batch ${Math.ceil((falseCount + resultIndex + 1) / BATCH_SIZE)}, Call ${resultIndex + 1}`);
            } else {
              console.log(`FALSE: Batch ${Math.ceil((falseCount + resultIndex + 1) / BATCH_SIZE)}, Call ${resultIndex + 1}`);
              falseCount++;
            }
          });
          // Reset batchCalls for the next batch
          batchCalls = [];
        }
      }
    }

    if (falseCount === 0) {
      console.log("All winners verified successfully.");
    } else {
      console.log(`${falseCount} verifications failed.`);
    }
  } catch (error) {
    console.error(`Error fetching or processing data: ${error}`);
  }
}

// Example usage
verifyWinners('11155420', '0x31547D3c38F2F8dC92421C54B173F3B27Ab26EbB', '58');
