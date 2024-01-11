import { Request, Response } from "express"
import { Types } from "mongoose"
import { ReasonPhrases, StatusCodes } from "http-status-codes"
import { createPet, getAllPets, getPetById } from "../services/pet.service"

export const createPetHandler = async (req: Request, res: Response) => {
  try {
    await createPet(req.body)

    return res.status(200).send({
      message: "Pet created successfully",
      data: req.body,
    })
  } catch (error: any) {
    return res.handleResponse(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error.message,
      ReasonPhrases.INTERNAL_SERVER_ERROR,
    )
  }
}

export const fetchPetsHandler = async (req: Request, res: Response) => {
  try {
    const allPets = await getAllPets()

    return res.handleResponse(StatusCodes.OK, "Pets fetched successfully", allPets)
  } catch (error: any) {
    return res.handleResponse(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error.message,
      ReasonPhrases.INTERNAL_SERVER_ERROR,
    )
  }
}

export const fetchPetDetails = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return res.handleResponse(StatusCodes.BAD_REQUEST, "Pet ID is required")
    }

    if (!Types.ObjectId.isValid(req.params.id)) {
      return res.handleResponse(
        StatusCodes.BAD_REQUEST,
        "Invalid Pet ID",
        ReasonPhrases.BAD_REQUEST,
      )
    }

    const pet = await getPetById(req.params.id)

    return res.handleResponse(StatusCodes.OK, "Pet fetched successfully", pet)
  } catch (error: any) {
    return res.handleResponse(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error.message,
      ReasonPhrases.INTERNAL_SERVER_ERROR,
    )
  }
}
