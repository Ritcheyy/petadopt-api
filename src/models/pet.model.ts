import { model, Schema, InferSchemaType, Model } from "mongoose"

const PetSchema = new Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    location: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    weight: { type: String, required: false },
    details: { type: String, required: false },
    isAdopted: { type: Boolean, default: false },
    imgUrl: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
)

export type IPet = InferSchemaType<typeof PetSchema>

interface IPetModel extends Model<IPet> {}

export const PetModel = model<IPet, IPetModel>("Pet", PetSchema)
