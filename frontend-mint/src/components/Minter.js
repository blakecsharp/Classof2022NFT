import { useEffect, useState } from "react";
import stanfordLogo from "./images/SUSig_Stack_red.png";
import alumniLogo from "./images/StanfordAlumniLogo.png";
require("dotenv").config();

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const contractAddress = "0xD3A109bce5332A33652708D361188523f7e04297";

export const classContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

const Minter = (props) => {
  return (
    <div className="Minter">
      <div id="header">
        <img src={stanfordLogo} height={60} alt="Stanford Logo" />
      </div>

      <br></br>
      <div className="content">
        <div className="title">
          <h1>2022 GRAD NFTS</h1>
          <img src={alumniLogo} height={250} alt="Stanford Alumni Logo" />
        </div>
      </div>
      <div className="Instructions">
        <div className="Instructionsheader">
          <h2>Claim your Stanford Graduation NFT with just a few clicks.</h2>
        </div>
        <div className="instructions">
          <ol>
            <li>
              Get a Metamask Wallet
              <div className="listContent">
                Go to{" "}
                <a href="https://metamask.io/download/">metamask.io/download</a>{" "}
                and download Metamask for Chrome, iOS, or Android. Follow the
                setup instructions and make sure to keep your secret phrase
                somewhere safe.
              </div>
            </li>
            <li>
              Submit your wallet address to our form
              <div className="listContent">
                Open your wallet, copy your wallet address by tapping on the
                shorthand address starting with “0x”. For more help, refer to
                these quick instructions. Click the “Submit my Wallet” button
                below and submit your wallet address to the form.
              </div>
              <div id="formButton">
                <button
                  onClick={() => {
                    window.location.href =
                      "https://forms.gle/5PQ5WJef6eHizE8v8";
                  }}
                >
                  Submit Wallet Address
                </button>
              </div>
            </li>
            <li>
              Receive your personalized Stanford Graduation NFT
              <div className="listContent">
                Now, we’ll do all the work and drop your NFT directly into your
                wallet! We’ll email you once it’s done, and you can open your
                wallet to access your new NFT.
              </div>
            </li>
          </ol>
        </div>
        <div className="contactUs">
          <h3>Need more help?</h3>
          <p>
            For detailed step-by-step instructions, follow Steps 1 and 2 from
            <a href="https://metamask.zendesk.com/hc/en-us/articles/360015289512-How-to-copy-your-MetaMask-account-public-address-#:~:text=To%20access%20additional%20information%20about%20your%20account%2C%20see%20instructions%20here.&text=When%20you%20hover%20over%20the,account's%20address%20to%20the%20clipboard.">
              {" "}
              this article.{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="FAQ">
        <div className="FAQHeader">FAQ</div>
        <div className="FAQContent">
          <div className="FAQQuestion">What is this project?</div>
          <div className="FAQAnswer">
            This project is the beginning of (hopefully) a tradition at Stanford
            to provide a graduation NFT to each Stanford graduate. We are 4
            current Stanford undergrads developing the NFTs and creating the NFT
            art, and we are excited to share this with you!
          </div>
          <div className="FAQQuestion">What are NFTs?</div>
          <div className="FAQAnswer">
            NFTs ("Non-Fungible Tokens") are one-of-a-kind tokens that represent
            a unique good or asset, like digital art. They can be owned, traded,
            and sold.
          </div>
          <div className="FAQQuestion">How do I claim my NFT?</div>
          <div className="FAQAnswer">
            Follow the setup instructions above - create a wallet and share your
            wallet address in the form we provide.
          </div>
          <div className="FAQQuestion">What does the art look like?</div>
          <div className="FAQAnswer">
            This will be a surprise! Our amazing artist has created beautiful
            artwork for your graduating class’ unique NFT, and it will be
            revealed once you receive it from us. Set up your wallet and stay
            tuned!
          </div>
          <div className="FAQQuestion">Does this cost money?</div>
          <div className="FAQAnswer">
            No! This is free. We will give you your NFT through a method called
            “airdropping”. Once you set up your wallet using the setup
            instructions above, we will airdrop you your NFT.
          </div>
          <div className="FAQQuestion">
            NFTs are environmentally taxing. What are you doing about that?
          </div>
          <div className="FAQAnswer">
            We are buying carbon offsets for all the carbon we are producint
            through this project.
          </div>
          <div className="FAQQuestion">Why would I want this?</div>
          <div className="FAQAnswer">
            This will be an NFT unique to your graduating class, which you can
            own and show others in the future. Also, if you have any interest in
            the crypto space, this is a great opportunity to dip your toes by
            owning your first NFT. Lastly, in the future, we hope to create real
            utility behind owning a graduation NFT, such as group messages,
            events, and other opportunities exclusive to owners of the NFT.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minter;
