import { Request, Response, NextFunction } from "express";
import {
  connectWallet,
  prepareCreateWagerTransaction,
  prepareJoinWagerTransaction,
  chooseWinner,
  submitSignedTransaction
} from "./index";
import logger from "../../utils/logger";
import serverResponse from "../../utils/serverResponse";

class Web3Controller {
  async connectWallet(req: Request, res: Response, next: NextFunction) {
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

      const transactionId = await connectWallet(userPublicKey);

      serverResponse.handleResponse(
        req,
        res,
        { transactionId },
        "success",
        "Wallet connected successfully."
      );
    } catch (error: any) {
      logger.error(`Error connecting wallet: ${error.message}`);
      serverResponse.handleError(
        req,
        res,
        "internalServerError",
        "Failed to connect wallet."
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

      const serializedTransaction = prepareCreateWagerTransaction(amount, creatorPublicKey);

      serverResponse.handleResponse(
        req,
        res,
        { transaction: serializedTransaction },
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

      const serializedTransaction = prepareJoinWagerTransaction(wagerId, participantPublicKey, amount);

      serverResponse.handleResponse(
        req,
        res,
        { transaction: serializedTransaction },
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

  async resolveWager(req: Request, res: Response, next: NextFunction) {
    const { wagerId, winnerPublicKey } = req.body;

    try {
      if (!wagerId || !winnerPublicKey) {
        return serverResponse.handleError(
          req,
          res,
          "unauthorized",
          "Wager ID and winner public key are required."
        );
      }

      const transactionId = await chooseWinner(wagerId, winnerPublicKey);

      serverResponse.handleResponse(
        req,
        res,
        { transactionId },
        "success",
        "Wager resolved successfully."
      );
    } catch (error: any) {
      logger.error(`Error resolving wager: ${error.message}`);
      serverResponse.handleError(
        req,
        res,
        "internalServerError",
        "Failed to resolve wager."
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