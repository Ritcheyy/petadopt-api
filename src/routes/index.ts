import express from "express"

import auth from "./auth.route"

const router = express.Router()

export default (): express.Router => {
  auth(router)

  return router
}
