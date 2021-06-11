const MastefChef = artifacts.require('MasterChef');

module.exports = async function(deployer) {

  await deployer.deploy(MastefChef,
    "0xCFC9dc417f2b4aE4805a12d47eb9B4e1A660831f",
    "0x5dE4C680d3e306eBbd94b5795905f8234B22D803",
    "0x5dE4C680d3e306eBbd94b5795905f8234B22D803",
    "30000000000000000000",
    "5503400",
    '900000',
    '90000',
    '10000'
  );

  const instanceMasterChef = await MastefChef.deployed();
};

