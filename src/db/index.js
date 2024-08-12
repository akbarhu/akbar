import mongoose from "mongoose";
import { DB_NAME } from "../contrants.js";


const connectDB = async () => {
    try {
       const connectionINstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n mongoDb connected !! DB HOST: ${connectionINstance.connection.host}` )
    } catch (error) {
        console.log("MONGODB connection failed ", error)
        process.exit(1)

    }
}

export default connectDB;