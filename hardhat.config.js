/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      chains: {
        8453: {
          hardforkHistory: {
            cancun: 12000000,
            prague: 30000000,
          }
        }
      }
    }
  }
};
