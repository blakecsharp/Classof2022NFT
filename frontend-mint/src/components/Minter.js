import { useEffect, useState } from "react";
import stanfordLogo from "./images/SUSig_Stack_red.png";
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
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  /*
  useEffect(async () => {
    //TODO: implement
  }, []);
  */

  const connectWalletPressed = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWallet(accounts);
  };

  const onMintPressed = async () => {
    //TODO: implement
    /*
    classContract.methods.addAddressesToAllowlist([
      "0xCD432FeFA0bC1B67044eD986BdFdbB9d77AfB05E",
    ]);
    */
  };

  console.log(classContract);

  return (
    <div className="Minter">
      <div id="header">
        <img src={stanfordLogo} height={60} alt="Stanford Logo" />
      </div>

      <br></br>
      <div className="content">
        <div className="leftTitle">
          <table className="titleTable">
            <tr>
              <td>2</td>
              <td>0</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>G</td>
              <td>R</td>
              <td>A</td>
              <td>D</td>
            </tr>
            <tr>
              <td>N</td>
              <td>F</td>
              <td>T</td>
              <td>S</td>
            </tr>
          </table>
        </div>
        <div className="right">
          <div className="square"></div>
        </div>
      </div>
      <div className="FAQ">
        <div className="FAQheader">
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
    </div>
  );
};

export default Minter;
