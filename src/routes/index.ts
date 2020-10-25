import express, { Request, Response, NextFunction } from "express"
import Matrix from '../models/Matrix'

const router = express.Router()

router.post(
  '/matrix', 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { matrix: _matrix, type } = req.body;
      const matrix = await new Matrix({
        matrix: _matrix,
        type: type
      }).save()
      res.status(200).json({ matrix: matrix })
    } catch (err) {
      next(err)
    }
  }
)

router.get(
  '/matrix/:type',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { type } = req.params;
      const matrix = await Matrix.find({ type: type })

      res.status(200).json({ data: matrix });
    } catch (err) {
      next(err)
    }
  }
)

export default router