// Assuming this is in a CommonJS module file
const fs = require('fs');
const BATCH_SIZE = 200;

// Dynamic import of the ES6 module
async function loadES6Module() {
    const module = await import('../foundry-winner-calc/runWinnerCalculation.js');
    return module.default;
}

// Function to split array into batches
function splitArrayIntoBatches(array, batchSize) {
    const batches = [];
    for (let i = 0; i < array.length; i += batchSize) {
        batches.push(array.slice(i, i + batchSize));
    }
    return batches;
}
// Define a function to run winner calculation for each set of parameters
async function GetFoundryWinnersByVault(playersData,rpc) {
    try {
        const startTime = new Date();
        const aggregatedResults = [];

        // Load the ES6 module dynamically
        const runWinnerCalculation = await loadES6Module();

        for (const params of playersData) {
            const { vaultAddress, userAddresses } = params;
            // Check if batch processing is required
            if (userAddresses.length > BATCH_SIZE) {
                const addressBatches = splitArrayIntoBatches(userAddresses, BATCH_SIZE);
                    let batchCounter = 0
                    for (const batch of addressBatches) {
                    batchCounter++
                    console.log("batch",batchCounter,"of ",addressBatches.length)
                    const batchParams = { ...params, userAddresses: batch };
                    const results = await runWinnerCalculation(batchParams,rpc);
                    aggregatedResults.push(...results.winners.map(winner => ({ ...winner, vault: vaultAddress })));
                }
            } else {
                const results = await runWinnerCalculation(params,rpc);
                if (results.winners.length > 0) {
                    aggregatedResults.push(...results.winners.map(winner => ({ ...winner, vault: vaultAddress })));
                }
            }
        }
        const endTime = new Date();
        const elapsedTime = (endTime - startTime) / 1000; // Convert milliseconds to seconds
        console.log(`Total time taken: ${elapsedTime} seconds`);
        return aggregatedResults;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports =  GetFoundryWinnersByVault ;
