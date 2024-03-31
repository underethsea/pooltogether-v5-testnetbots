const {CONTRACTS} = require("../constants/contracts")
const {CONFIG} = require("../constants/config")

async function confirmWinner(vault, winners, tier, indicesArray) {
    for (let i = 0; i < winners.length; i++) {
        let pooler = winners[i];
        let indices = indicesArray[i];

        for (let index of indices) {
            await checkWinnerForIndex(vault, pooler, tier, index);
        }
    }
}

async function checkWinnerForIndex(vault, pooler, tier, index) {
    console.log("Checking for pooler:", pooler, "index:", index);

    const didWin = await CONTRACTS.PRIZEPOOL[CONFIG.CHAINNAME].isWinner(vault, pooler, tier, index);
    console.log( didWin, "vault", vault, "add:", pooler, "tier", tier, "index", index);

}

/*
//{"v":"0x31515cfc4550d9c83e2d86e8a352886d1364e2d9","p":"0xde107b82e3e47ed281d276644b8115548c085c24","t":4,"i":[10,83,127],"c":[]},
const vault= '0x31515cfc4550d9c83e2d86e8a352886d1364e2d9'
const tier = 4
const winners = [
'0xde107b82e3e47ed281d276644b8115548c085c24']
const prizeIndicesBeingClaimed =  [ [ 10, 83, 127 ]]

*/

const vault = "0x8f8484f30f7a72c8059e6bd709f898606e38deda"
const tier = "1"
const winners = [
  '0x9a7D6d7B4930376eCf32622f702FF6abA78860fF',
  '0x8Ca2b5c76DEDbEfFc2B1372299953EA861F0dC52',
  '0x0347Ce85eF5c800b85541dcC6851218adc87F1AA',
  '0x3dbF53d2074e1a13aF72e8F4cFD660520b778053'
]
const prizeIndicesBeingClaimed = [ [ 1 ], [ 3 ], [ 2 ], [ 3 ] ]
//fee recipient 0xE5860FF1c57DDCEF024Cb43B37b8A20bfE4c9822
//min fee 0


confirmWinner(vault, winners, tier, prizeIndicesBeingClaimed);
