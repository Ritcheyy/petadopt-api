import { IPet, PetModel } from "../models/pet.model"

export const createPet = async (petInput: IPet) => {
  try {
    return await PetModel.create(petInput)
  } catch (error: any) {
    throw new Error(error)
  }
}
