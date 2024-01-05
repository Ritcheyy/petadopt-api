import { IUserDocument } from "../types"
import { UserModel } from "../models/user.model"
import { FilterQuery, QueryOptions, ProjectionFields } from "mongoose"

// export const getUsers = () => UserModel.find()

export const findUser = async (
  query: FilterQuery<IUserDocument>,
  options: QueryOptions = { lean: true },
): Promise<IUserDocument | null> => {
  try {
    const user = await UserModel.findOne(query, {}, options || {})
    if (!user) {
      return null
    }
    return user
  } catch (error) {
    console.log(error)
    throw error
  }
}

// export const getUserBySessionToken = (token: string) =>
//   UserModel.findOne({ "authentication.sessionToken": token })

// export const getUserById = (id: string) => UserModel.findById({ id })

// export const createUser = (values: Record<string, any>) =>
//   new UserModel(values).save().then((user) => user.toObject())

// export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id })

// export const updateUserById = (id: string, values: Record<string, any>) =>
//   UserModel.findByIdAndUpdate(id, values)
