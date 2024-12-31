import Joi from "joi";

// DTO for preparing a transaction to create a wager
export const prepareToCreateWagerDTO = Joi.object({
  creatorPublicKey: Joi.string()
    .required()
    .pattern(/^([1-9A-HJ-NP-Za-km-z]{32,44})$/, "base58"),
  game: Joi.string().required(),
  gameMode: Joi.string().required(),
  stakeAmount: Joi.number().min(0.5).required(),
  gameUsername: Joi.string().required(),
  wagerDuration: Joi.date().iso().required(),
});



// DTO for preparing a transaction to join a wager
export const prepareToJoinWagerDTO = Joi.object({
  publicKey: Joi.string()
    .required()
    .pattern(/^([1-9A-HJ-NP-Za-km-z]{32,44})$/, "base58"),
  wagerId: Joi.string()
    .required(),
});

// DTO for submitting a signed transaction
export const submitSignedTransactionDTO = Joi.object({
  transaction: Joi.string().required(),
  publicKey: Joi.string()
    .required()
    .pattern(/^([1-9A-HJ-NP-Za-km-z]{32,44})$/, "base58"),
});
