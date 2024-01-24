import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async ()=>{
    try {
        // mongoose return an object while connecting which can be stored in a variable for other purposes it contains the responses 
        const DbConnectionInstance=await mongoose.connect(`${process.env.MongoDB_URI}/${DB_Name}`)
        // to know which host our DB is hosted we use DbConnectionInstance.connection.host
        //  it will be interesting to read about DbConnectionInstance so do consolelog about it 
        console.log(`\n MongoDB connected !! DB HOST ${ DbConnectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error", error)
        process.exit(1)
    }
}

export default connectDB