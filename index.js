import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

const application = express()
const PORT = 3000
console.log(process.env.DATABASE_URL)
application.use(express.json())

application.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})