const https = require('https');
const fs = require('fs');

//https://raw.githubusercontent.com/GenerationSoftware/pt-v5-testnet/v51/deployments/optimismSepolia/contracts.json
 const url = "https://raw.githubusercontent.com/GenerationSoftware/pt-v5-testnet/v51/deployments/optimismSepolia/contracts.json"
// Mapping of types to their corresponding keys (case-insensitive)
const typeKeyMapping = {
    PrizePool: "PRIZEPOOL",
    Claimer: "CLAIMER",
    TokenFaucet: "TOKENFAUCET",
    LiquidationRouter: "LIQUIDATIONROUTER",
    PrizeVaultFactory: "VAULTFACTORY",
    TwabController: "TWABCONTROLLER",
    LiquidationPairFactory: "LIQUIDATIONPAIRFACTORY",
    RngBlockHash: "RNGBLOCKHASH",
    ClaimerFactory: "CLAIMERFACTORY",
    RngWitnet: "RNG",
    DrawManager: "DRAWMANAGER",
    ClaimerFactory: "CLAIMERFACTORY",
    //LiquidationRouter: "LIQUIDATIONROUTER",
   TpdaLiquidationRouter: "LIQUIDATIONROUTER",
};

// Function to fetch JSON data from the provided URL
function fetchData(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(JSON.parse(data));
            });

        }).on('error', (error) => {
            reject(error);
        });
    });
}

function extractAddressesAndABIs(contracts, mapping) {
    const addresses = {};
    const abis = {};

    contracts.forEach(contract => {
        const { type, address, abi } = contract;
        const key = mapping[type]; // Use the original case as specified in your mapping

        // Process all contracts, including 'PrizeVault'
        if (key) {
            // For contracts other than 'PrizeVault', store them normally
            if (type !== 'PrizeVault') {
                addresses[key] = address;
                abis[key] = abi;
            }
        }

        // Special handling for 'PrizeVault' to format them as required
        if (type === 'PrizeVault') {
            // Initialize 'VAULTS' array if it doesn't exist
            if (!addresses['VAULTS']) {
                addresses['VAULTS'] = [];
            }
            // Push formatted 'VAULT' address into 'VAULTS'
            addresses['VAULTS'].push({'VAULT': address});

            // Only set the ABI for 'VAULT' if not already set, assuming same ABI for all
            if (!abis['VAULT']) {
                abis['VAULT'] = abi;
            }
        }
    });

    return { addresses, abis };
}

// Function to write ABI to a file
function writeABIFile(contractName, abi) {
    const fileName = `./abis/${contractName.toLowerCase()}.js`;
    const fileContent = `const ABI = ${JSON.stringify(abi)};\nmodule.exports =  ABI ;`;

    fs.writeFile(fileName, fileContent, (err) => {
        if (err) throw err;
        console.log(`ABI file for ${contractName} has been saved as ${fileName}`);
    });
}
// Function to write ABI index to a file
function writeABIIndexFile(abis) {
    const fileName = 'abi.js';
    let indexContent = '';

    Object.entries(abis).forEach(([contractName]) => {
        indexContent += `const ${contractName} = require('./abis/${contractName.toLowerCase()}');\n`;
    });

    indexContent += '\nconst ABI = {\n';
    Object.entries(abis).forEach(([contractName]) => {
        indexContent += `  ${contractName}: ${contractName},\n`;
    });
    indexContent += '};\n\nmodule.exports = { ABI };\n';

    fs.writeFile(fileName, indexContent, (err) => {
        if (err) throw err;
        console.log(`ABI index file has been saved as ${fileName}`);
    });
}

// Main function to execute the script
async function main() {
// moved to top   
// const url = 'https://raw.githubusercontent.com/GenerationSoftware/pt-v5-testnet/v51/deployments/optimismSepolia/contracts.json';

    try {
        // Fetch JSON data from the URL
        const jsonData = await fetchData(url);

        // Extract contracts array from JSON data
        const contracts = jsonData.contracts || [];

        // Extract addresses and ABIs based on the mapping
        const { addresses, abis } = extractAddressesAndABIs(contracts, typeKeyMapping);

        // Output the addresses object
        console.log(addresses);

        // Write ABI index to a file
        writeABIIndexFile(abis);

        // Write each ABI to a separate file
        Object.entries(abis).forEach(([contractName, abi]) => {
            writeABIFile(contractName, abi);
        });

    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

// Execute the main function
main();
