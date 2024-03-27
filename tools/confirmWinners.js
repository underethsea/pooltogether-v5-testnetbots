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
const tier =  0
const winners =  [
  '0xC508d3D27fedD9C6a6d0D167c4d50c4B12E92338',
  '0xdc9d55110bA8eD9c483E1077a35022e40A2F4a48',
  '0xFBf00065a5f8Ef61B4EAf2b2003D4aF5E3017A5d',
  '0x82E8C437299D564eE36A5f7ACC82d80F303e7Cb4',
  '0xEfc4E91801704AC954f48362a5747CEa6D641e55',
  '0x04B9c0C99F77d909ACB38b7c5f737A19F60d55F6'
]


const prizeIndicesBeingClaimed = [ [ 52 ], [ 33 ], [ 41 ], [ 47 ], [ 14 ], [ 43 ] ]



confirmWinner(vault, winners, tier, prizeIndicesBeingClaimed);
