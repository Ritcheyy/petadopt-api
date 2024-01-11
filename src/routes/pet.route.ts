import { Router } from "express"
import validateResourceMiddleware from "../middleware/validateResource.middleware"
import { CreatePetInputSchema } from "../schema/pet.schema"
import { createPetHandler, fetchPetsHandler } from "../controllers/pet.controller"

export default (router: Router) => {
  router.post(
    "/pet/create",
    validateResourceMiddleware(CreatePetInputSchema),
    createPetHandler,
  )

  router.get("/pets", fetchPetsHandler)
}
