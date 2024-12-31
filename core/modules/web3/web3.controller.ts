import { Request, Response, NextFunction } from "express";
import {
  prepareConnectWalletTransaction,
  confirmConnectWalletTransaction,
  prepareCreateWagerTransaction,
  prepareJoinWagerTransaction,
  submitSignedTransaction
} from "./index";
import logger from "../../utils/logger";
import serverResponse from "../../utils/serverResponse";

class Web3Controller {
  async prepareConnectWallet(req: Request, res: Response, next: NextFunction) {
    const { userPublicKey } = req.body;

    try {
      if (!userPublicKey) {
        return serverResponse.handleError(
          req,
          res,
          "unauthorized",
          "Public key is required to connect the wallet."
        );
      }

      const base58Regex = /^[A-HJ-NP-Za-km-z1-9]{32,44}$/;
      if (!base58Regex.test(userPublicKey)) {
        throw new Error("Invalid Base58 Public Key");
      }

      const transaction = await prepareConnectWalletTransaction(userPublicKey);

      serverResponse.handleResponse(
        req,
        res,
        { transaction },
        "success",
        "Wallet connection transaction prepared successfully."
      );
    } catch (error: any) {
      logger.error(`Error preparing wallet connection: ${error.message}`);
      serverResponse.handleError(
        req,
        res,
        "internalServerError",
        "Failed to prepare wallet connection transaction."
      );
    }
  }

  async confirmConnectWallet(req: Request, res: Response, next: NextFunction) {
    const { signedTransaction } = req.body;

    try {
      if (!signedTransaction) {
        return serverResponse.handleError(
          req,
          res,
          "unauthorized",
          "Signed transaction is required."
        );
      }

      const result = await confirmConnectWalletTransaction(signedTransaction);

      serverResponse.handleResponse(
        req,
        res,
        { result },
        "success",
        "Wallet connected successfully."
      );
    } catch (error: any) {
      logger.error(`Error confirming wallet connection: ${error.message}`);
      serverResponse.handleError(
        req,
        res,
        "internalServerError",
        "Failed to confirm wallet connection."
      );
    }
  }

  async prepareToCreateWager(req: Request, res: Response, next: NextFunction) {
    const { amount, creatorPublicKey } = req.body;

    try {
      if (!amount || !creatorPublicKey) {
        return serverResponse.handleError(
          req,
          res,
          "unauthorized",
          "Amount and creator public key are required."
        );
      }

      const transaction = await prepareCreateWagerTransaction(amount, creatorPublicKey);

      serverResponse.handleResponse(
        req,
        res,
        { transaction },
        "success",
        "Wager creation transaction prepared successfully."
      );
    } catch (error: any) {
      logger.error(`Error preparing wager creation transaction: ${error.message}`);
      serverResponse.handleError(
        req,
        res,
        "internalServerError",
        "Failed to prepare wager creation transaction."
      );
    }
  }

  async prepareToJoinWager(req: Request, res: Response, next: NextFunction) {
    const { wagerId, participantPublicKey, amount } = req.body;

    try {
      if (!wagerId || !participantPublicKey || !amount) {
        return serverResponse.handleError(
          req,
          res,
          "unauthorized",
          "Wager ID, participant public key, and amount are required."
        );
      }

      const transaction = await prepareJoinWagerTransaction(wagerId, participantPublicKey, amount);

      serverResponse.handleResponse(
        req,
        res,
        { transaction },
        "success",
        "Transaction prepared for joining wager."
      );
    } catch (error: any) {
      logger.error(`Error preparing wager join transaction: ${error.message}`);
      serverResponse.handleError(
        req,
        res,
        "internalServerError",
        "Failed to prepare transaction for joining wager."
      );
    }
  }

  async submitSignedTransaction(req: Request, res: Response, next: NextFunction) {
    const { signedTransaction } = req.body;

    try {
      if (!signedTransaction) {
        return serverResponse.handleError(
          req,
          res,
          "unauthorized",
          "Signed transaction is required."
        );
      }

      const txSignature = await submitSignedTransaction(signedTransaction);

      serverResponse.handleResponse(
        req,
        res,
        { signature: txSignature },
        "success",
        "Transaction submitted successfully."
      );
    } catch (error: any) {
      logger.error(`Error submitting transaction: ${error.message}`);
      serverResponse.handleError(
        req,
        res,
        "internalServerError",
        "Failed to submit transaction."
      );
    }
  }
}

export default new Web3Controller();