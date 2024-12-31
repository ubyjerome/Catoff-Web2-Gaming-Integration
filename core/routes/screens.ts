import express from "express";
import { createWagerScreen, demoScreen, gamesScreen, homeScreen, joinWagerScreen } from "../controllers/screens/index";
const indexRouter = express.Router();

indexRouter.get("/", homeScreen);
indexRouter.get("/games", gamesScreen);

// indexRouter.get("/wager");
indexRouter.get("/wager/create", createWagerScreen);
indexRouter.get("/wager/join/:wagerId", joinWagerScreen);
// indexRouter.get("/wager/:wagerId");

// indexRouter.get("/me");
// indexRouter.get("/me/update");


indexRouter.get("/demo", demoScreen);

export = indexRouter;