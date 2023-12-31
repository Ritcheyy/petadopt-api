import express from "express"

import { register } from "../controllers/Auth"

export default (router: express.Router) => {
  router.post("/auth/register", register)
}
