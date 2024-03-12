require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    shm: {
      url: "https://hackathon.shardeum.org/",
      accounts: ["d5007a2c36f932f6fc5849ae7b48e4c5105fd4b1421ebff54ac4fe5ce8224aab"],
      gas: 20000000,
    },
  },
};