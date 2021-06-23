const MastefChef = artifacts.require('MasterChef');

module.exports = async function(deployer) {

  await deployer.deploy(MastefChef,
    "0x10658Fc030f90CFf7608b21eC522A29645D515a3",
    "0x5dE4C680d3e306eBbd94b5795905f8234B22D803",
    "0x5dE4C680d3e306eBbd94b5795905f8234B22D803",
    "30000000000000000000",
    "5506200",
    '900000',
    '90000',
    '10000'
  );

};

