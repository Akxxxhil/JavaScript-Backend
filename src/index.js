import dotenv from 'dotenv'
import ConnectionDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

ConnectionDB()






















// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//     } catch (error) {
//         console.error("error", error)
//     }
// })()