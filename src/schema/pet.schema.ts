import { z } from "zod"

export const CreatePetInputSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name field is required" }),
    breed: z.string({
      required_error: "Breed field is required",
    }),
    location: z.string({
      required_error: "Location field is required",
    }),
    gender: z.string({
      required_error: "Gender field is required",
    }),
    age: z.string({
      required_error: "Age field is required",
    }),
    weight: z.string({
      required_error: "Weight field is required",
    }),
    details: z.string({
      required_error: "Details field is required",
    }),
    imgUrl: z
      .string({
        required_error: "Image is required",
      })
      .url(),
    owner: z.string({
      required_error: "Owner Id is required",
    }),
  }),
})

export type CreatePetInput = z.infer<typeof CreatePetInputSchema>
