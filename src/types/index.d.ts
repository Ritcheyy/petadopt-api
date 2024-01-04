import { Document, Model } from "mongoose"

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
