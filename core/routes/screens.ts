import express from "express";
import { gamesScreen, homeScreen } from "../controllers/screens/index";
const indexRouter = express.Router();

indexRouter.get("/", homeScreen);
indexRouter.get("/games", gamesScreen);

// indexRouter.get("/wager");
// indexRouter.get("/wager/create");
// indexRouter.get("/wager/join/:wagerId");
// indexRouter.get("/wager/:wagerId");

// indexRouter.get("/me");
// indexRouter.get("/me/update");


export = indexRouter;