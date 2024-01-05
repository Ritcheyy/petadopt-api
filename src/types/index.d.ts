import { Document, Model, Types } from "mongoose"

export interface IUser {
  username: string
  email: string
  authentication: {
    password: string
    salt: string
    sessionToken: string
  }
}

export interface IUserDocument extends IUser, Document {
  createdAt: Date
  updatedAt: Date
}

export interface IUserModel extends Model<IUserDocument> {}

// export interface IPet {
//   name: string
//   breed: string
//   location: string
//   gender: string
//   age: string
//   weight: string
//   details: string
//   isAdopted: boolean
//   imgURl: string
//   owner: Types.ObjectId
// }

// export interface IPetModel extends Model<IPetDocument> {}
