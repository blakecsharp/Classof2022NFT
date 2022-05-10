import { useEffect, useState } from "react";
import stanfordLogo from "./images/SUSig_Stack_red.png";
require("dotenv").config();
/*
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = []
const contractAddress = "0xD3A109bce5332A33652708D361188523f7e04297";

export const classContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);
*/

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

  return (
    <div className="Minter">
      <div id="header">
        <img src={stanfordLogo} height={60} alt="Stanford Logo" />
        <button id="walletButton" onClick={connectWalletPressed}>
          {walletAddress.length > 0 ? (
            "Connected: " +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(38)
          ) : (
            <span>Connect Wallet</span>
          )}
        </button>
      </div>

      <br></br>
      <div className="content">
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
        <div className="right">
          <div className="square"></div>
        </div>
      </div>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status">{status}</p>
    </div>
  );
};

export default Minter;
