const TOKENFAUCET = require('./abis/tokenfaucet');
const TWABCONTROLLER = require('./abis/twabcontroller');
const LIQUIDATIONPAIRFACTORY = require('./abis/liquidationpairfactory');
const LIQUIDATIONROUTER = require('./abis/liquidationrouter');
const VAULTFACTORY = require('./abis/vaultfactory');
const PRIZEPOOL = require('./abis/prizepool');
const LIQUIDATIONPAIR = require('./abis/liquidationpair');
const CLAIMERFACTORY = require('./abis/claimerfactory');
const CLAIMER = require('./abis/claimer');
const VAULT = require('./abis/vault');
const ERC20 = require('./abis/erc20');
const RNG = require('./abis/rng')
const DRAWMANAGER = require('./abis/drawmanager')

const ABI = {
  TOKENFAUCET: TOKENFAUCET,
  TWABCONTROLLER: TWABCONTROLLER,
  LIQUIDATIONPAIRFACTORY: LIQUIDATIONPAIRFACTORY,
  LIQUIDATIONROUTER: LIQUIDATIONROUTER,
  VAULTFACTORY: VAULTFACTORY,
  PRIZEPOOL: PRIZEPOOL,
  LIQUIDATIONPAIR: LIQUIDATIONPAIR,
  CLAIMERFACTORY: CLAIMERFACTORY,
  CLAIMER: CLAIMER,
  VAULT: VAULT,
  ERC20: ERC20,
  RNG: RNG,
  DRAWMANAGER: DRAWMANAGER,
};

module.exports = { ABI };
