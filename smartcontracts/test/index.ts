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
  it("Should allow mint", async function () {
    let account1Address = account1.address;
    await expect(StanfordClassof2022NFT.connect(minter).mint([account1Address])).to.be.revertedWith(
      "Address must be on the allow list"
    );
    //console.log(account1);
    await StanfordClassof2022NFT.connect(minter).addAddressesToAllowlist([account1.address]);
    expect(await StanfordClassof2022NFT.connect(account1).isAddressOnAllowList(account1.address)).to.be.true;

    let tx = await StanfordClassof2022NFT.connect(minter).mint([account1Address]);
    tx.wait();
    expect(await StanfordClassof2022NFT.totalSupply()).to.equal(1);
  });
  it("It can only mint from contract owner", async function () {
    await expect(StanfordClassof2022NFT.connect(account1).mint([account1.address])).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });
  it("Should revert on double mint", async function () {
    await StanfordClassof2022NFT.connect(minter).addAddressesToAllowlist([account1.address]);
    expect(await StanfordClassof2022NFT.connect(account1).isAddressOnAllowList(account1.address)).to.be.true;

    let tx = await StanfordClassof2022NFT.connect(minter).mint([account1.address]);
    tx.wait();
    expect(await StanfordClassof2022NFT.totalSupply()).to.equal(1);
    await expect(StanfordClassof2022NFT.connect(minter).mint([account1.address])).to.be.revertedWith(
      "Address can only mint one token"
    );
  });
  it("Should not be transferable", async function () {
    await StanfordClassof2022NFT.connect(minter).addAddressesToAllowlist([account1.address, account2.address]);
    let tx = await StanfordClassof2022NFT.connect(minter).mint([account1.address]);
    await tx.wait();
    let supply = await StanfordClassof2022NFT.totalSupply();
    await expect(
      StanfordClassof2022NFT.connect(account1).transferFrom(account1.address, account2.address, supply.toNumber() - 1)
    ).to.be.revertedWith("Token is not transferable");
  });
  /*
  These tests are for the legacy system where the user mints their own NFT

  it("Should allow mint with valid signature", async function () {
    await expect(StanfordClassof2022NFT.connect(account1).mint()).to.be.revertedWith(
      "Address must be on the allow list"
    );
    //console.log(account1);
    await StanfordClassof2022NFT.connect(minter).addAddressesToAllowlist([account1.address]);
    expect(await StanfordClassof2022NFT.connect(account1).isAddressOnAllowList(account1.address)).to.be.true;

    let tx = await StanfordClassof2022NFT.connect(account1).mint();
    tx.wait();
    expect(await StanfordClassof2022NFT.totalSupply()).to.equal(1);
  });
  it("Should revert on double mint", async function () {
    await StanfordClassof2022NFT.connect(minter).addAddressesToAllowlist([account1.address]);
    expect(await StanfordClassof2022NFT.connect(account1).isAddressOnAllowList(account1.address)).to.be.true;

    let tx = await StanfordClassof2022NFT.connect(account1).mint();
    tx.wait();
    expect(await StanfordClassof2022NFT.totalSupply()).to.equal(1);
    await expect(StanfordClassof2022NFT.connect(account1).mint()).to.be.revertedWith("Address can only mint one token");
  });
  it("Should not be transferable", async function () {
    await StanfordClassof2022NFT.connect(minter).addAddressesToAllowlist([account1.address, account2.address]);
    const tx = await StanfordClassof2022NFT.connect(account1).mint();
    await tx.wait();
    let supply = await StanfordClassof2022NFT.totalSupply();
    await expect(
      StanfordClassof2022NFT.connect(account1).transferFrom(account1.address, account2.address, supply.toNumber() - 1)
    ).to.be.revertedWith("Token is not transferable");
  });
  */
});
