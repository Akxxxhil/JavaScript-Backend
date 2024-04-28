import dotenv from 'dotenv'
import ConnectionDB from "./db/index.js";
import app from "./app.js"

dotenv.config({
    path:"./env"
})

ConnectionDB()
.then(
    app.listen(process.env.PORT|| 8000,()=>{
console.log(`Server running Successfully ${process.env.PORT}`);
    })
)
.catch((error)=>{
    console.log("mongo conncetion failed",error)
})






















// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//     } catch (error) {
//         console.error("error", error)
//     }
// })()