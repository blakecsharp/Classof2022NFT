import { ethers } from "ethers";

const POLYGON_RPC_URL = "https://polygon-rpc.com/";
const POLYGON_NFT_CONTRACT_ADDRESS = ""; // TODO: Add the deployed contract address
const PRIVATE_KEY = ""; // TODO: Add your private key
const NONCE = NaN; // TODO: Add the nonce you want to claim
const SIGNATURE = ""; // TODO: Add the nonce signature you need to claim

const ABI = [
  "function mint(uint256 nonce, bytes memory signature)",
  "function tokenURI(uint256 tokenId) view returns (string memory)",
];

/**
 * To run:
 *   yarn hardhat run scripts/claimToken.ts
 */

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(POLYGON_RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY).connect(provider);
  console.log(`Connected to chainId ${(await wallet.provider.getNetwork()).chainId}`);
  console.log(`Claiming token with account ${wallet.address}`);
  console.log(`Contract address ${POLYGON_NFT_CONTRACT_ADDRESS}`);
  console.log(`Claiming token with nonce ${NONCE}, signature ${SIGNATURE}`);
  const StanfordCS251NFT = new ethers.Contract(POLYGON_NFT_CONTRACT_ADDRESS, ABI, wallet);
  const tx = await StanfordCS251NFT.mint(NONCE, SIGNATURE);
  await tx.wait();
  console.log("Claimed token successfully");
  console.log(`txHash: ${tx.hash}`);
  const tokenURI = await StanfordCS251NFT.tokenURI(NONCE);
  console.log(`tokenURI: ${tokenURI}`);
}

main().catch(console.error);
