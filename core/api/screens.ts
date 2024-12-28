import express from "express"
import path from "path";
import indexRouter from "../routes/screens"

const viewRoute = express()

viewRoute.set("views", path.join(__dirname, "../views"));
viewRoute.set("view engine", "ejs");

viewRoute.use("/", indexRouter)

export = viewRoute