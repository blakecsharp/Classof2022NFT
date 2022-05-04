import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { signNonce } from "../scripts/lib/signNonce";
import { StanfordClassof2022 } from "../typechain";

const EXPECTED_TOKEN_URI = "ipfs://QmUW2246fZRGMv3An4EZhN78xVANQSw3ZKLXsAVa3DsAu9";

describe("Class of 2022 Stanford NFT", function () {
  let StanfordClassof2022NFT: StanfordClassof2022;
  let minter: SignerWithAddress;
  let account1: SignerWithAddress;
  let account2: SignerWithAddress;
  this.beforeAll(async () => {
    [minter, account1, account2] = await ethers.getSigners();
  });
  beforeEach(async () => {
    const StanfordCS251NFTFactory = await ethers.getContractFactory("StanfordClassof2022");
    StanfordClassof2022NFT = await StanfordCS251NFTFactory.deploy();
    await StanfordClassof2022NFT.deployed();
  });
  it("Should return the correct name", async function () {
    expect(await StanfordClassof2022NFT.name()).to.equal("Stanford Class of 2022 Token");
  });
  it("Should allow mint with valid signature", async function () {
    const nonce = 42;
    const signature = await signNonce(nonce, minter);

    await expect(StanfordClassof2022NFT.connect(account1).mint()).to.be.revertedWith(
      "Address must be on the allow list"
    );
    //console.log(account1);
    await StanfordClassof2022NFT.connect(minter).addAddressesToAllowlist([account1.address]);
    expect(await StanfordClassof2022NFT.connect(account1).isAddressOnAllowList(account1.address)).to.be.true;

    let tx = await StanfordClassof2022NFT.connect(account1).mint();
    tx.wait();
    expect(await StanfordClassof2022NFT.totalSupply()).to.equal(1);

    await expect(StanfordClassof2022NFT.connect(account1).mint()).to.be.revertedWith("Address must not have minted");
    /*
    console.log(
      await StanfordClassof2022NFT.connect(account1).isAddressOnAllowList("0xcd432fefa0bc1b67044ed986bdfdbb9d77afb05e")
    );*/
    // console.log(await StanfordClassof2022NFT.totalSupply());
    // expect(await StanfordClassof2022NFT.totalSupply()).to.equal(0);
    // expect(await StanfordClassof2022NFT.ownerOf(nonce)).to.equal(account1.address);
  });
  it("Should revert on invalid signature", async function () {
    const nonce = 42;
    const fakeMinter = account1;
    const fakeSignature = await signNonce(nonce, fakeMinter);

    // await expect(StanfordClassof2022NFT.connect(account1).mint(nonce, fakeSignature)).to.be.revertedWith("Invalid signature");
  });
  it("Should revert on double mint", async function () {
    /*
    const nonce = 42;
    const signature = await signNonce(nonce, minter);

    const tx = await StanfordClassof2022NFT.connect(account1).mint(nonce, signature);
    await tx.wait();
    expect(await StanfordClassof2022NFT.ownerOf(nonce)).to.equal(account1.address);
    await expect(StanfordClassof2022NFT.connect(account1).mint(nonce, signature)).to.be.revertedWith("Token already minted");
    await expect(StanfordClassof2022NFT.connect(account2).mint(nonce, signature)).to.be.revertedWith("Token already minted");
    */
  });
  it("Should not be transferable", async function () {
    /*
    const nonce = 42;

    const signature = await signNonce(nonce, minter);
    const tx = await StanfordCS251NFT.connect(account1).mint(nonce, signature);
    await tx.wait();
    await expect(
      StanfordCS251NFT.connect(account1).transferFrom(account1.address, account2.address, nonce)
    ).to.be.revertedWith("Token is not transferable");
    */
  });
  it("Should have the correct tokenURI for all tokens", async function () {
    /*
    const nonce = 42;
    const signature = await signNonce(nonce, minter);
    const tx = await StanfordCS251NFT.connect(account1).mint(nonce, signature);
    await tx.wait();

    const tokenURI = await StanfordCS251NFT.tokenURI(nonce);
    expect(tokenURI).to.equal(EXPECTED_TOKEN_URI);
    */
  });
});
