import { IPet, PetModel } from "../models/pet.model"

export const createPet = async (petInput: IPet) => {
  try {
    return await PetModel.create(petInput)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const fetchAllPets = async () => {
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
