import express, { Request, Response, NextFunction } from "express"
import Matrix from '../models/Matrix'

const router = express.Router()

router.post(
  '/matrix', 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const matrix = await new Matrix({
        matrix: req.body.matrix
      }).save()
      res.status(200).json({ matrix: matrix })
    } catch (err) {
      next(err)
    }
  }
)

export default router