import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";

/**
 * Sign `nonce` using `signer` account.
 * @param nonce
 * @param signer
 * @returns signature
 */
export async function signNonce(nonce: number, signer: SignerWithAddress): Promise<string> {
  const message = ethers.utils.keccak256(ethers.utils.solidityPack(["uint256"], [nonce]));
  const signature = await signer.signMessage(ethers.utils.arrayify(message));
  return signature;
}
