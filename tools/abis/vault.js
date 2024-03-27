const ABI = [{"type":"constructor","inputs":[{"name":"_name","type":"string","internalType":"string"},{"name":"_symbol","type":"string","internalType":"string"},{"name":"yieldVault_","type":"address","internalType":"contract IERC4626"},{"name":"_prizePool","type":"address","internalType":"contract PrizePool"},{"name":"_claimer","type":"address","internalType":"address"},{"name":"_yieldFeeRecipient","type":"address","internalType":"address"},{"name":"_yieldFeePercentage","type":"uint32","internalType":"uint32"},{"name":"_owner","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"DOMAIN_SEPARATOR","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"FEE_PRECISION","inputs":[],"outputs":[{"name":"","type":"uint32","internalType":"uint32"}],"stateMutability":"view"},{"type":"function","name":"HOOK_GAS","inputs":[],"outputs":[{"name":"","type":"uint24","internalType":"uint24"}],"stateMutability":"view"},{"type":"function","name":"MAX_YIELD_FEE","inputs":[],"outputs":[{"name":"","type":"uint32","internalType":"uint32"}],"stateMutability":"view"},{"type":"function","name":"allowance","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"approve","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"asset","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"availableYieldBalance","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"balanceOf","inputs":[{"name":"_account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"claimOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"claimPrize","inputs":[{"name":"_winner","type":"address","internalType":"address"},{"name":"_tier","type":"uint8","internalType":"uint8"},{"name":"_prizeIndex","type":"uint32","internalType":"uint32"},{"name":"_reward","type":"uint96","internalType":"uint96"},{"name":"_rewardRecipient","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"claimYieldFeeShares","inputs":[{"name":"_shares","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"claimer","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"convertToAssets","inputs":[{"name":"_shares","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"convertToShares","inputs":[{"name":"_assets","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"currentYieldBuffer","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view"},{"type":"function","name":"decreaseAllowance","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"subtractedValue","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"deposit","inputs":[{"name":"_assets","type":"uint256","internalType":"uint256"},{"name":"_receiver","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"depositWithPermit","inputs":[{"name":"_assets","type":"uint256","internalType":"uint256"},{"name":"_owner","type":"address","internalType":"address"},{"name":"_deadline","type":"uint256","internalType":"uint256"},{"name":"_v","type":"uint8","internalType":"uint8"},{"name":"_r","type":"bytes32","internalType":"bytes32"},{"name":"_s","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"eip712Domain","inputs":[],"outputs":[{"name":"fields","type":"bytes1","internalType":"bytes1"},{"name":"name","type":"string","internalType":"string"},{"name":"version","type":"string","internalType":"string"},{"name":"chainId","type":"uint256","internalType":"uint256"},{"name":"verifyingContract","type":"address","internalType":"address"},{"name":"salt","type":"bytes32","internalType":"bytes32"},{"name":"extensions","type":"uint256[]","internalType":"uint256[]"}],"stateMutability":"view"},{"type":"function","name":"getHooks","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"tuple","internalType":"struct VaultHooks","components":[{"name":"useBeforeClaimPrize","type":"bool","internalType":"bool"},{"name":"useAfterClaimPrize","type":"bool","internalType":"bool"},{"name":"implementation","type":"address","internalType":"contract IVaultHooks"}]}],"stateMutability":"view"},{"type":"function","name":"increaseAllowance","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"addedValue","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"isLiquidationPair","inputs":[{"name":"_tokenOut","type":"address","internalType":"address"},{"name":"_liquidationPair","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"liquidatableBalanceOf","inputs":[{"name":"_tokenOut","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"liquidationPair","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"maxDeposit","inputs":[{"name":"","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"maxMint","inputs":[{"name":"_owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"maxRedeem","inputs":[{"name":"_owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"maxWithdraw","inputs":[{"name":"_owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"mint","inputs":[{"name":"_shares","type":"uint256","internalType":"uint256"},{"name":"_receiver","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"nonces","inputs":[{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"pendingOwner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"permit","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"},{"name":"deadline","type":"uint256","internalType":"uint256"},{"name":"v","type":"uint8","internalType":"uint8"},{"name":"r","type":"bytes32","internalType":"bytes32"},{"name":"s","type":"bytes32","internalType":"bytes32"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"previewDeposit","inputs":[{"name":"_assets","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"pure"},{"type":"function","name":"previewMint","inputs":[{"name":"_shares","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"pure"},{"type":"function","name":"previewRedeem","inputs":[{"name":"_shares","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"previewWithdraw","inputs":[{"name":"_assets","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"prizePool","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract PrizePool"}],"stateMutability":"view"},{"type":"function","name":"redeem","inputs":[{"name":"_shares","type":"uint256","internalType":"uint256"},{"name":"_receiver","type":"address","internalType":"address"},{"name":"_owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"renounceOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setClaimer","inputs":[{"name":"_claimer","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setHooks","inputs":[{"name":"hooks","type":"tuple","internalType":"struct VaultHooks","components":[{"name":"useBeforeClaimPrize","type":"bool","internalType":"bool"},{"name":"useAfterClaimPrize","type":"bool","internalType":"bool"},{"name":"implementation","type":"address","internalType":"contract IVaultHooks"}]}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setLiquidationPair","inputs":[{"name":"_liquidationPair","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setYieldFeePercentage","inputs":[{"name":"_yieldFeePercentage","type":"uint32","internalType":"uint32"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setYieldFeeRecipient","inputs":[{"name":"_yieldFeeRecipient","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"sponsor","inputs":[{"name":"_assets","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"targetOf","inputs":[{"name":"","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"totalAssets","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"totalDebt","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"totalYieldBalance","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transfer","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferOwnership","inputs":[{"name":"_newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"transferTokensOut","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"_receiver","type":"address","internalType":"address"},{"name":"_tokenOut","type":"address","internalType":"address"},{"name":"_amountOut","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bytes","internalType":"bytes"}],"stateMutability":"nonpayable"},{"type":"function","name":"twabController","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract TwabController"}],"stateMutability":"view"},{"type":"function","name":"verifyTokensIn","inputs":[{"name":"_tokenIn","type":"address","internalType":"address"},{"name":"_amountIn","type":"uint256","internalType":"uint256"},{"name":"","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"withdraw","inputs":[{"name":"_assets","type":"uint256","internalType":"uint256"},{"name":"_receiver","type":"address","internalType":"address"},{"name":"_owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"yieldBuffer","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"yieldFeeBalance","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"yieldFeePercentage","inputs":[],"outputs":[{"name":"","type":"uint32","internalType":"uint32"}],"stateMutability":"view"},{"type":"function","name":"yieldFeeRecipient","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"yieldVault","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IERC4626"}],"stateMutability":"view"},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"spender","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"ClaimYieldFeeShares","inputs":[{"name":"recipient","type":"address","indexed":true,"internalType":"address"},{"name":"shares","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"ClaimerSet","inputs":[{"name":"claimer","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Deposit","inputs":[{"name":"sender","type":"address","indexed":true,"internalType":"address"},{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"assets","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"shares","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"EIP712DomainChanged","inputs":[],"anonymous":false},{"type":"event","name":"LiquidationPairSet","inputs":[{"name":"tokenOut","type":"address","indexed":true,"internalType":"address"},{"name":"liquidationPair","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"OwnershipOffered","inputs":[{"name":"pendingOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"SetHooks","inputs":[{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"hooks","type":"tuple","indexed":false,"internalType":"struct VaultHooks","components":[{"name":"useBeforeClaimPrize","type":"bool","internalType":"bool"},{"name":"useAfterClaimPrize","type":"bool","internalType":"bool"},{"name":"implementation","type":"address","internalType":"contract IVaultHooks"}]}],"anonymous":false},{"type":"event","name":"Sponsor","inputs":[{"name":"caller","type":"address","indexed":true,"internalType":"address"},{"name":"assets","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"shares","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"TransferYieldOut","inputs":[{"name":"liquidationPair","type":"address","indexed":true,"internalType":"address"},{"name":"tokenOut","type":"address","indexed":true,"internalType":"address"},{"name":"recipient","type":"address","indexed":true,"internalType":"address"},{"name":"amountOut","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"yieldFee","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"name":"sender","type":"address","indexed":true,"internalType":"address"},{"name":"receiver","type":"address","indexed":true,"internalType":"address"},{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"assets","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"shares","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"YieldFeePercentageSet","inputs":[{"name":"yieldFeePercentage","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"YieldFeeRecipientSet","inputs":[{"name":"yieldFeeRecipient","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"error","name":"BurnZeroShares","inputs":[]},{"type":"error","name":"CallerNotClaimer","inputs":[{"name":"caller","type":"address","internalType":"address"},{"name":"claimer","type":"address","internalType":"address"}]},{"type":"error","name":"CallerNotLP","inputs":[{"name":"caller","type":"address","internalType":"address"},{"name":"liquidationPair","type":"address","internalType":"address"}]},{"type":"error","name":"CallerNotYieldFeeRecipient","inputs":[{"name":"caller","type":"address","internalType":"address"},{"name":"yieldFeeRecipient","type":"address","internalType":"address"}]},{"type":"error","name":"ClaimRecipientZeroAddress","inputs":[]},{"type":"error","name":"ClaimerZeroAddress","inputs":[]},{"type":"error","name":"DepositZeroAssets","inputs":[]},{"type":"error","name":"InvalidShortString","inputs":[]},{"type":"error","name":"LPZeroAddress","inputs":[]},{"type":"error","name":"LiquidationAmountOutZero","inputs":[]},{"type":"error","name":"LiquidationExceedsAvailable","inputs":[{"name":"totalToWithdraw","type":"uint256","internalType":"uint256"},{"name":"availableYield","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"LiquidationTokenInNotPrizeToken","inputs":[{"name":"tokenIn","type":"address","internalType":"address"},{"name":"prizeToken","type":"address","internalType":"address"}]},{"type":"error","name":"LiquidationTokenOutNotSupported","inputs":[{"name":"tokenOut","type":"address","internalType":"address"}]},{"type":"error","name":"LossyDeposit","inputs":[{"name":"totalAssets","type":"uint256","internalType":"uint256"},{"name":"totalSupply","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"MintZeroShares","inputs":[]},{"type":"error","name":"OwnerZeroAddress","inputs":[]},{"type":"error","name":"PermitCallerNotOwner","inputs":[{"name":"caller","type":"address","internalType":"address"},{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"PrizePoolZeroAddress","inputs":[]},{"type":"error","name":"SharesExceedsYieldFeeBalance","inputs":[{"name":"shares","type":"uint256","internalType":"uint256"},{"name":"yieldFeeBalance","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"StringTooLong","inputs":[{"name":"str","type":"string","internalType":"string"}]},{"type":"error","name":"SweepZeroAssets","inputs":[]},{"type":"error","name":"TwabControllerZeroAddress","inputs":[]},{"type":"error","name":"WithdrawZeroAssets","inputs":[]},{"type":"error","name":"YieldFeePercentageExceedsMax","inputs":[{"name":"yieldFeePercentage","type":"uint256","internalType":"uint256"},{"name":"maxYieldFeePercentage","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"YieldVaultZeroAddress","inputs":[]},{"type":"error","name":"ZeroTotalAssets","inputs":[]}];
module.exports =  ABI ;