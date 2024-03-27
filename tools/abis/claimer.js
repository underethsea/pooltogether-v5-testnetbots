const ABI = [{"type":"constructor","inputs":[{"name":"_prizePool","type":"address","internalType":"contract PrizePool"},{"name":"_minimumFee","type":"uint256","internalType":"uint256"},{"name":"_maximumFee","type":"uint256","internalType":"uint256"},{"name":"_timeToReachMaxFee","type":"uint256","internalType":"uint256"},{"name":"_maxFeePortionOfPrize","type":"uint64","internalType":"UD2x18"}],"stateMutability":"nonpayable"},{"type":"function","name":"claimPrizes","inputs":[{"name":"_vault","type":"address","internalType":"contract IClaimable"},{"name":"_tier","type":"uint8","internalType":"uint8"},{"name":"_winners","type":"address[]","internalType":"address[]"},{"name":"_prizeIndices","type":"uint32[][]","internalType":"uint32[][]"},{"name":"_feeRecipient","type":"address","internalType":"address"},{"name":"_minFeePerClaim","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"totalFees","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"computeFeePerClaim","inputs":[{"name":"_tier","type":"uint8","internalType":"uint8"},{"name":"_claimCount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"computeMaxFee","inputs":[{"name":"_tier","type":"uint8","internalType":"uint8"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"computeTotalFees","inputs":[{"name":"_tier","type":"uint8","internalType":"uint8"},{"name":"_claimCount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"computeTotalFees","inputs":[{"name":"_tier","type":"uint8","internalType":"uint8"},{"name":"_claimCount","type":"uint256","internalType":"uint256"},{"name":"_claimedCount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"decayConstant","inputs":[],"outputs":[{"name":"","type":"int256","internalType":"SD59x18"}],"stateMutability":"view"},{"type":"function","name":"maxFeePortionOfPrize","inputs":[],"outputs":[{"name":"","type":"uint64","internalType":"UD2x18"}],"stateMutability":"view"},{"type":"function","name":"minimumFee","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"prizePool","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract PrizePool"}],"stateMutability":"view"},{"type":"function","name":"timeToReachMaxFee","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"event","name":"AlreadyClaimed","inputs":[{"name":"winner","type":"address","indexed":false,"internalType":"address"},{"name":"tier","type":"uint8","indexed":false,"internalType":"uint8"},{"name":"prizeIndex","type":"uint32","indexed":false,"internalType":"uint32"}],"anonymous":false},{"type":"event","name":"ClaimError","inputs":[{"name":"vault","type":"address","indexed":true,"internalType":"contract IClaimable"},{"name":"tier","type":"uint8","indexed":true,"internalType":"uint8"},{"name":"winner","type":"address","indexed":true,"internalType":"address"},{"name":"prizeIndex","type":"uint32","indexed":false,"internalType":"uint32"},{"name":"reason","type":"bytes","indexed":false,"internalType":"bytes"}],"anonymous":false},{"type":"error","name":"ClaimArraySizeMismatch","inputs":[{"name":"winnersLength","type":"uint256","internalType":"uint256"},{"name":"prizeIndicesLength","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"FeeRecipientZeroAddress","inputs":[]},{"type":"error","name":"MinFeeGeMax","inputs":[{"name":"minFee","type":"uint256","internalType":"uint256"},{"name":"maxFee","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"PRBMath_MulDiv18_Overflow","inputs":[{"name":"x","type":"uint256","internalType":"uint256"},{"name":"y","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"PRBMath_MulDiv_Overflow","inputs":[{"name":"x","type":"uint256","internalType":"uint256"},{"name":"y","type":"uint256","internalType":"uint256"},{"name":"denominator","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"PRBMath_SD59x18_Convert_Overflow","inputs":[{"name":"x","type":"int256","internalType":"int256"}]},{"type":"error","name":"PRBMath_SD59x18_Convert_Underflow","inputs":[{"name":"x","type":"int256","internalType":"int256"}]},{"type":"error","name":"PRBMath_SD59x18_Div_InputTooSmall","inputs":[]},{"type":"error","name":"PRBMath_SD59x18_Div_Overflow","inputs":[{"name":"x","type":"int256","internalType":"SD59x18"},{"name":"y","type":"int256","internalType":"SD59x18"}]},{"type":"error","name":"PRBMath_UD60x18_Convert_Overflow","inputs":[{"name":"x","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"PrizePoolZeroAddress","inputs":[]},{"type":"error","name":"TimeToReachMaxFeeZero","inputs":[]},{"type":"error","name":"VrgdaClaimFeeBelowMin","inputs":[{"name":"minFee","type":"uint256","internalType":"uint256"},{"name":"fee","type":"uint256","internalType":"uint256"}]}];
module.exports =  ABI ;