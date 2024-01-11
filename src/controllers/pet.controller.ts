import { Request, Response } from "express"
import { createPet, fetchAllPets } from "../services/pet.service"

export const createPetHandler = async (req: Request, res: Response) => {
  try {
    const pet = await createPet(req.body)

    return res.status(200).send({ message: "Pet created successfully", data: req.body })
  } catch (error: any) {
    console.log(error)
    return res.status(400).send(error.message)
  }
}

export const fetchPetsHandler = async (req: Request, res: Response) => {
  try {
    const allPets = await fetchAllPets()

    return res.status(200).send({ message: "Pet fetched successfully", data: allPets })
  } catch (error: any) {
    console.log(error)
    return res.status(400).send(error.message)
  }
}
