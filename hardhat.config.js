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
            ithsmus: 30000000,
          }
        }
      }
    }
  }
};
