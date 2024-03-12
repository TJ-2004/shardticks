require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    shm: {
      url: "https://hackathon.shardeum.org/",
      accounts: ["9afef2dd4b89d7e1d07a84b9c47d90bd57e875096f86c99a19fb680ac7dac197"],
      gas: 20000000,
    },
  },
};