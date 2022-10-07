// https://eth-goerli.g.alchemy.com/v2/CYNtuD_pUophtdXQEtb6CQqptLRMPZvw

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "goerli",
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "",
      accounts: [""],
    },
  },
};

export default config;
