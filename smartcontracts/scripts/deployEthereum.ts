import { ethers } from "hardhat";

const main = async () => {
  // gets info of the account used to deploy
  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contract with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  // read contract file
  const luckyContractFactory = await ethers.getContractFactory("LuckyNumber");
  // triggers deployment
  const luckyContract = await luckyContractFactory.deploy({});

  // wait for deployment to finish
  await luckyContract.deployed();

  console.log("LuckyNumber contract address: ", luckyContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
