require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
      opera:{
          url: 'https://rpc.ftm.tools/',
          chainId: 250,
          gasPrice: 'auto',
          gas: 'auto',
          timeout: 30000
      },
  },
  etherscan: {
    apiKey: "SVXH9NKYC61V2CHGDAGMANWWQU53V2MWUG"
  }
};
