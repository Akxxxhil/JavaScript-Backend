import mongoose from "mongoose";
import  {DB_NAME} from "../constants.js"

const ConnectionDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("mongoDb hosted properly");
        
    } catch (error) {
        console.log("mongodb connection failed",error);
        
    }
}

export default ConnectionDB


