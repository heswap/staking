const HeswapReferral = artifacts.require('HeswapReferral');

module.exports = async function(deployer) {
  await deployer.deploy(HeswapReferral);
};

