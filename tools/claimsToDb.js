
const {GetRecentClaims} = require("../functions/getRecentClaims.js")
const {AddClaim} = require("../functions/dbDonkey.js")
const {DiscordNotifyClaimPrize } = require("../functions/discordAlert.js")
const chainId = 11155420
const draw = 3
const prizepool = "0x9f594BA8A838D41E7781BFA2aeA42702E216AF5a"

async function insertClaims(chainId,prizePool,fromBlock=-200000,toBlock="latest") {
  const claims = await GetRecentClaims(chainId,fromBlock,toBlock)
  console.log("got claims",claims.length)
const filteredClaims = claims.filter(claim => claim.drawId === draw);
console.log("filtered for draw ", draw, " = ",filteredClaims.length)
  for(let x=0;x<filteredClaims.length;x++) {
    filteredClaims[x].network = chainId
    console.log(claims[0])

    await AddClaim(chainId,prizePool,filteredClaims[x])
    // await DiscordNotifyClaimPrize(filteredClaims[x])    
  }
  console.log("added all claims")

}

insertClaims(chainId,prizepool)
