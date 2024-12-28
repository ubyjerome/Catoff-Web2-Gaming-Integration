import express, { Request, Response, NextFunction } from "express";
import { Configs } from "../configs";
const apiRouter = express.Router();

apiRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      isSuccess: true,
      message: `${Configs.project.name} is listening on port ${Configs.project.port}`,
      data: [],
    });
  } catch (error) {
    console.error(error);
  }
});

export = apiRouter;
