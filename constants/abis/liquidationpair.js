const ABI = [{"type":"constructor","inputs":[{"name":"_source","type":"address","internalType":"contract ILiquidationSource"},{"name":"_tokenIn","type":"address","internalType":"address"},{"name":"_tokenOut","type":"address","internalType":"address"},{"name":"_periodLength","type":"uint32","internalType":"uint32"},{"name":"_firstPeriodStartsAt","type":"uint32","internalType":"uint32"},{"name":"_targetFirstSaleTime","type":"uint32","internalType":"uint32"},{"name":"_decayConstant","type":"int256","internalType":"SD59x18"},{"name":"_initialAmountIn","type":"uint104","internalType":"uint104"},{"name":"_initialAmountOut","type":"uint104","internalType":"uint104"},{"name":"_minimumAuctionAmount","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"amountInForPeriod","inputs":[],"outputs":[{"name":"","type":"uint104","internalType":"uint104"}],"stateMutability":"nonpayable"},{"type":"function","name":"amountOutForPeriod","inputs":[],"outputs":[{"name":"","type":"uint104","internalType":"uint104"}],"stateMutability":"nonpayable"},{"type":"function","name":"computeExactAmountIn","inputs":[{"name":"_amountOut","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"decayConstant","inputs":[],"outputs":[{"name":"","type":"int256","internalType":"SD59x18"}],"stateMutability":"view"},{"type":"function","name":"emissionRate","inputs":[],"outputs":[{"name":"","type":"int256","internalType":"SD59x18"}],"stateMutability":"nonpayable"},{"type":"function","name":"firstPeriodStartsAt","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getElapsedTime","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"getPeriodEnd","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"getPeriodStart","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"initialPrice","inputs":[],"outputs":[{"name":"","type":"int256","internalType":"SD59x18"}],"stateMutability":"nonpayable"},{"type":"function","name":"lastAuctionTime","inputs":[],"outputs":[{"name":"","type":"uint48","internalType":"uint48"}],"stateMutability":"nonpayable"},{"type":"function","name":"lastNonZeroAmountIn","inputs":[],"outputs":[{"name":"","type":"uint112","internalType":"uint112"}],"stateMutability":"nonpayable"},{"type":"function","name":"lastNonZeroAmountOut","inputs":[],"outputs":[{"name":"","type":"uint112","internalType":"uint112"}],"stateMutability":"nonpayable"},{"type":"function","name":"maxAmountIn","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"maxAmountOut","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"minimumAuctionAmount","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"periodLength","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"source","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract ILiquidationSource"}],"stateMutability":"view"},{"type":"function","name":"swapExactAmountOut","inputs":[{"name":"_receiver","type":"address","internalType":"address"},{"name":"_amountOut","type":"uint256","internalType":"uint256"},{"name":"_amountInMax","type":"uint256","internalType":"uint256"},{"name":"_flashSwapData","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"target","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"targetFirstSaleTime","inputs":[],"outputs":[{"name":"","type":"uint32","internalType":"uint32"}],"stateMutability":"view"},{"type":"function","name":"tokenIn","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"tokenOut","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"event","name":"StartedAuction","inputs":[{"name":"lastNonZeroAmountIn","type":"uint104","indexed":false,"internalType":"uint104"},{"name":"lastNonZeroAmountOut","type":"uint104","indexed":false,"internalType":"uint104"},{"name":"lastAuctionTime","type":"uint48","indexed":false,"internalType":"uint48"},{"name":"period","type":"uint48","indexed":true,"internalType":"uint48"},{"name":"emissionRate","type":"int256","indexed":false,"internalType":"SD59x18"},{"name":"initialPrice","type":"int256","indexed":false,"internalType":"SD59x18"}],"anonymous":false},{"type":"event","name":"SwappedExactAmountOut","inputs":[{"name":"sender","type":"address","indexed":true,"internalType":"address"},{"name":"receiver","type":"address","indexed":true,"internalType":"address"},{"name":"amountOut","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"amountInMax","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"amountIn","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"flashSwapData","type":"bytes","indexed":false,"internalType":"bytes"}],"anonymous":false},{"type":"error","name":"AmountInZero","inputs":[]},{"type":"error","name":"AmountOutZero","inputs":[]},{"type":"error","name":"DecayConstantTooLarge","inputs":[{"name":"maxDecayConstant","type":"int256","internalType":"SD59x18"},{"name":"decayConstant","type":"int256","internalType":"SD59x18"}]},{"type":"error","name":"EmissionRateIsZero","inputs":[]},{"type":"error","name":"LiquidationSourceZeroAddress","inputs":[]},{"type":"error","name":"PRBMath_MulDiv18_Overflow","inputs":[{"name":"x","type":"uint256","internalType":"uint256"},{"name":"y","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"PRBMath_MulDiv_Overflow","inputs":[{"name":"x","type":"uint256","internalType":"uint256"},{"name":"y","type":"uint256","internalType":"uint256"},{"name":"denominator","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"PRBMath_SD59x18_Ceil_Overflow","inputs":[{"name":"x","type":"int256","internalType":"SD59x18"}]},{"type":"error","name":"PRBMath_SD59x18_Convert_Overflow","inputs":[{"name":"x","type":"int256","internalType":"int256"}]},{"type":"error","name":"PRBMath_SD59x18_Convert_Underflow","inputs":[{"name":"x","type":"int256","internalType":"int256"}]},{"type":"error","name":"PRBMath_SD59x18_Div_InputTooSmall","inputs":[]},{"type":"error","name":"PRBMath_SD59x18_Div_Overflow","inputs":[{"name":"x","type":"int256","internalType":"SD59x18"},{"name":"y","type":"int256","internalType":"SD59x18"}]},{"type":"error","name":"PRBMath_SD59x18_Exp2_InputTooBig","inputs":[{"name":"x","type":"int256","internalType":"SD59x18"}]},{"type":"error","name":"PRBMath_SD59x18_Exp_InputTooBig","inputs":[{"name":"x","type":"int256","internalType":"SD59x18"}]},{"type":"error","name":"PRBMath_SD59x18_Mul_InputTooSmall","inputs":[]},{"type":"error","name":"PRBMath_SD59x18_Mul_Overflow","inputs":[{"name":"x","type":"int256","internalType":"SD59x18"},{"name":"y","type":"int256","internalType":"SD59x18"}]},{"type":"error","name":"PurchasePriceIsZero","inputs":[{"name":"amountOut","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ReceiverIsZero","inputs":[]},{"type":"error","name":"SwapExceedsAvailable","inputs":[{"name":"amountOut","type":"uint256","internalType":"uint256"},{"name":"available","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"SwapExceedsMax","inputs":[{"name":"amountInMax","type":"uint256","internalType":"uint256"},{"name":"amountIn","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"TargetFirstSaleTimeGePeriodLength","inputs":[{"name":"passedTargetSaleTime","type":"uint256","internalType":"uint256"},{"name":"periodLength","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"TokenInZeroAddress","inputs":[]},{"type":"error","name":"TokenOutZeroAddress","inputs":[]}];
module.exports =  ABI ;