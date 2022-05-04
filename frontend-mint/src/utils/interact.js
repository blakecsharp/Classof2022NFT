require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("./contract-abi.json");
const contractAddress = "0xD3A109bce5332A33652708D361188523f7e04297";

export const classContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

export const loadCurrentMessage = async () => {};

export const connectWallet = async () => {};

const getCurrentWalletConnected = async () => {};

export const updateMessage = async (message) => {};
