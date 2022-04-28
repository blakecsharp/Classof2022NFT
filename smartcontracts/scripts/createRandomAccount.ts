import { ethers } from "ethers";

/**
 * To run:
 *    yarn hardhat run scripts/createRandomAccount.ts
 */
async function main() {
  console.log("-- Creating random account... --");
  const wallet = ethers.Wallet.createRandom();
  console.log(`private key: ${wallet.privateKey}`);
  console.log(`mnemonic: ${wallet.mnemonic.phrase}`);
  console.log(`address: ${wallet.address}`);
  console.log("-- Done --");
}

main().catch((err) => console.error(err));
