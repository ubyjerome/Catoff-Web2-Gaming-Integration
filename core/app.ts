import express, { Request, Response, NextFunction } from "express";
import { Configs } from "./configs";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import viewRoute from "./api/screens";
import apiRoutes from "./api";
import { initializeDatabase } from "./database";
import logger from "./utils/logger";

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cookieParser());

//Routes Handler Here
app.use("/", viewRoute);
app.use(apiRoutes);

//Error Handler Here
// app.use((err: any, req: Request, res: Response, next: NextFunction)

app.listen(Configs.project.port, async () => {
  try {
    logger.info(`${Configs.project.name} started on port ${Configs.project.port}`)
    // await initializeDatabase()
    logger.info(
      `${Configs.project.name} Server is now listening on port ${Configs.project.port}`
    ); 
  } catch (error:any) {
    logger.error(error.message)
    console.log(error)
  }
});
