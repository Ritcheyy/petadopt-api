import { Request, Response, NextFunction } from "express"
import { ZodTypeAny } from "zod"

const validate =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (error: any) {
      console.log('here')
      return res.status(400).send(error.errors)
    }
  }

export default validate
