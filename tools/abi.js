const TOKENFAUCET = require('./abis/tokenfaucet');
const TWABCONTROLLER = require('./abis/twabcontroller');
const LIQUIDATIONROUTER = require('./abis/liquidationrouter');
const VAULTFACTORY = require('./abis/vaultfactory');
const RNG = require('./abis/rng');
const PRIZEPOOL = require('./abis/prizepool');
const DRAWMANAGER = require('./abis/drawmanager');
const CLAIMERFACTORY = require('./abis/claimerfactory');
const CLAIMER = require('./abis/claimer');
const VAULT = require('./abis/vault');

const ABI = {
  TOKENFAUCET: TOKENFAUCET,
  TWABCONTROLLER: TWABCONTROLLER,
  LIQUIDATIONROUTER: LIQUIDATIONROUTER,
  VAULTFACTORY: VAULTFACTORY,
  RNG: RNG,
  PRIZEPOOL: PRIZEPOOL,
  DRAWMANAGER: DRAWMANAGER,
  CLAIMERFACTORY: CLAIMERFACTORY,
  CLAIMER: CLAIMER,
  VAULT: VAULT,
};

module.exports = { ABI };
