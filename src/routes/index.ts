import express from "express"

import authRoute from "./auth.route"
import petRoute from "./pet.route"

const router = express.Router()

export default (): express.Router => {
  authRoute(router)
  petRoute(router)

  return router
}
