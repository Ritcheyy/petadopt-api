import { IPet, PetModel } from "../models/pet.model"
import { Schema } from "mongoose"

export const createPet = async (petInput: IPet) => {
  try {
    return await PetModel.create(petInput)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getAllPets = async () => {
  try {
    return await PetModel.find()
      .select([
        "-__v",
        "-owner",
        "-updatedAt",
        "-createdAt",
        "-location",
        "-weight",
        "-details",
        "-isAdopted",
      ])
      .limit(20)
      .exec()
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getPetById = async (petId: string) => {
  try {
    return await PetModel.findById(petId, "-__v")
      .populate("owner", "-__v -updatedAt")
      .exec()
  } catch (error: any) {
    throw new Error(error)
  }
}
