import mongoose from "mongoose"
import { DB_NAME } from "../constants"

const connectDB = async () =>{
    try {
        
    } catch (error) {
        console.log("MongoDB Connection error ",error);
        process.exit(1)
    }
}