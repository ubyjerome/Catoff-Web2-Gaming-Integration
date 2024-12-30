import { Request, Response, NextFunction } from "express";
import { meta } from "../../screens/components/meta";
import { Configs } from "../../configs";
import logger from "../../utils/logger";
import { homeScreenContent } from "../../screens/index";
import { header } from "../../screens/components/header";
import { footer } from "../../screens/components/footer";
import { gamesScreenContent } from "../../screens/games";
import { demoScreenContent } from "../../screens/demo/test";
import { createWagerScreenContent } from "../../screens/createWager";


export const homeScreen = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render("index", {
      meta: meta(req, {
        pageTitle: Configs.organisation.name || "Web3 P2P Waging Platform",
        pageDescription: Configs.project.description,
      }),
      header: await header(),
      footer: await footer(),
      content: await homeScreenContent(),
    });
    
  } catch (error:any) {
    logger.error(error.message)
    console.log(error);
  }
};

export const gamesScreen = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render("index", {
      meta: meta(req, {
        pageTitle: `Available Games - ${Configs.organisation.name}` || "Available Games",
        pageDescription: Configs.project.description,
      }),
      header: await header(),
      footer: await footer(),
      content: await gamesScreenContent(),
    });
    
  } catch (error:any) {
    logger.error(error.message)
    console.log(error);
  }
};


export const createWagerScreen = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render("index", {
      meta: meta(req, {
        pageTitle: `Create Wager - ${Configs.organisation.name}` || "Available Games",
        pageDescription: Configs.project.description,
      }),
      header: await header(),
      footer: await footer(),
      content: await createWagerScreenContent(),
    });
    
  } catch (error:any) {
    logger.error(error.message)
    console.log(error);
  }
};




export const demoScreen = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render("index", {
      meta: meta(req, {
        pageTitle: `Demo - ${Configs.organisation.name}` || "Available Games",
        pageDescription: Configs.project.description,
      }),
      header: await header(),
      footer: await footer(),
      content: await demoScreenContent(),
    });
    
  } catch (error:any) {
    logger.error(error.message)
    console.log(error);
  }
};
