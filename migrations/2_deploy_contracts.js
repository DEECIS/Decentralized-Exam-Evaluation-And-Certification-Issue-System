var SimpleStorage = artifacts.require("./DEEContract.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};
