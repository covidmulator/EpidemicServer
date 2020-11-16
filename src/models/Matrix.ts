import mongoose, { Schema } from 'mongoose';

export interface MatrixModel {
  _id: string;
  type: string;
  matrix: Array<number[]>;
}

const MatrixSchema: Schema<MatrixModel> = new Schema(
  {
    type: { type: String, required: true },
    matrix: [[{ type: Number, required: true }]]
  },
  { timestamp: true },
);

export default mongoose.model<MatrixModel>('Matrix', MatrixSchema);
