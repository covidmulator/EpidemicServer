import mongoose, { Schema } from 'mongoose'

export interface MatrixModel {
  _id: string;

  matrix: Array<Array<number>>;
}

const MatrixSchema: Schema<MatrixModel> = new Schema(
  {
    matrix: [[{ type: Number, required: true }]]
  },
  { timestamp: true }
)

export default mongoose.model<MatrixModel>("Matrix", MatrixSchema)