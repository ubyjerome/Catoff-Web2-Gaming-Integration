import express from "express";
import Web3Controller from "../modules/web3/web3.controller"
import { validate } from "../middlewares/validation";
import { prepareToCreateWagerDTO, prepareToJoinWagerDTO, submitSignedTransactionDTO } from "../modules/web3/dto";

const web3Router = express.Router();

// Route to prepare a transaction for creating a wager
web3Router.post("/wager/create", validate(prepareToCreateWagerDTO), Web3Controller.prepareToCreateWager);

// Route to prepare a transaction for joining a wager
web3Router.post("/wager/join", validate(prepareToJoinWagerDTO), Web3Controller.prepareToJoinWager);

// Route to submit a signed transaction
web3Router.post("/transaction/submit", Web3Controller.submitSignedTransaction);

web3Router.post("/connect-wallet/prepare", Web3Controller.prepareConnectWallet);

web3Router.post("/connect-wallet/confirm", Web3Controller.confirmConnectWallet);

export = web3Router;
