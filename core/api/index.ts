import express from "express"
import apiRouter from "../routes"
const apiRoutes = express()

apiRoutes.use("/api/v1/", apiRouter)

export = apiRoutes