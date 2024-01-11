import express, { Request, Response } from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import config from "config"
import database from "./database"

import router from "./routes"
import responseHandler from "./helpers/responseHandler"

const PORT = config.get<number>("port")

const app = express()

app.use(
  cors({
    credentials: true,
  }),
)

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(responseHandler)

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

database.connect()

app.use("/", router())

app.use((req: Request, res: Response) => {
  res.status(404).send({ statusCode: 404, message: "Route not found" }).end()
})
