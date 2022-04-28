import { ethers } from "hardhat";
import { signNonce } from "./lib/signNonce";
import fs from "fs";

/**
 * Sign multiple nonces in the range [MIN_NONCE, MAX_NONCE) sequentially using
 * an account configured in hardhat.config.ts for network `--network`.
 *
 * To use, first set your desired MIN_NONCE and MAX_NONCE. Ensure the correct
 * signer account is configured in hardhat.config.ts. For the signatures to be valid,
 * the signer must be the owner of the target contract.
 *
 * The --network option will read the corresponding `signer` from the config
 * in hardhat.config.ts for one of [mumbai | polygon].
 *
 * To run:
 *    yarn hardhat run scripts/signNonces.ts --network [mumbai | polygon]
 */

const MAX_NONCE = 100; // TODO: set this
const MIN_NONCE = 0; // TODO: set this
const OUT_FILE = "./output/signatures.json";

async function main() {
  const [signer] = await ethers.getSigners();
  if (!signer) throw new Error("No signer configured");
  console.log(`Signing nonces with signer ${signer.address}`);
  const noncesAndSignatures: { [nonce: number]: string } = {};
  for (let nonce = MIN_NONCE; nonce < MAX_NONCE; nonce++) {
    noncesAndSignatures[nonce] = await signNonce(nonce, signer);
  }
  fs.writeFileSync(OUT_FILE, JSON.stringify(noncesAndSignatures));
  console.log(`Created output file ${OUT_FILE} with result.`);
}

main();
