import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const MUMBAI_RPC_URL = "https://rpc-mumbai.maticvigil.com";
const MUMBAI_PRIVATE_KEY = "0xef44f641fb45153d599239a29161c158149f989959711cf89af260826883500c"; // Address: 0x08b353377aCea9a9f2c68F082fc6C80E09Ad7Aab
const POLYGON_RPC_URL = "https://polygon-rpc.com/";
const POLYGON_PRIVATE_KEY = process.env.PRIVATE_KEY; // TODO: Paste your Polygon private key (the account will be the contract owner)
const POLYGONSCAN_API_KEY = process.env.ETHERSCAN_API_KEY; // TODO: Paste your Etherscan API Key if you want to use contract verification

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: MUMBAI_PRIVATE_KEY ? [MUMBAI_PRIVATE_KEY] : [],
    },
    polygon: {
      url: POLYGON_RPC_URL,
      accounts: POLYGON_PRIVATE_KEY ? [POLYGON_PRIVATE_KEY] : [],
    },
    rinkeby: {
      url: process.env.DEPLOY_KEY_RINKEBY,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
};

export default config;
