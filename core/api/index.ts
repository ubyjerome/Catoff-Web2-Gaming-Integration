import express from "express"
import apiRouter from "../routes"
import web3Router from "../routes/web3"
const apiRoutes = express()

apiRoutes.use("/api/v1/", apiRouter)
apiRoutes.use("/api/v1/web3", web3Router)

export = apiRoutes