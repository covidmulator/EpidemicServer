import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compress from 'compression'
import dotenv from 'dotenv';

import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'

import mongoose from 'mongoose'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(res => {
  console.log(`Successfully connected to mongodb`);
})

app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))

app.use(compress())

app.use(helmet())

app.use("/api", routes)

app.listen(3000, () => console.log(`EpidemicServer app listening at http://localhost:3000`))

export default app