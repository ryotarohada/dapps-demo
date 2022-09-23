// https://eth-goerli.g.alchemy.com/v2/CYNtuD_pUophtdXQEtb6CQqptLRMPZvw

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "goerli",
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/CYNtuD_pUophtdXQEtb6CQqptLRMPZvw",
      accounts: [
        "95890a05aef3bd9c10731524e881e0b9dbd1c82a1abacf23e63baf60ce8b13db"
      ]
    }
  }
};

export default config;
