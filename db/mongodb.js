import mongoose from "mongoose";
import {DB_URI, NODE_ENV} from "../config/env.js"

const connectionDB = async ()=>{

try{
    await mongoose.connect(DB_URI);
    console.log(`Database connected on ${NODE_ENV} mode`)
} catch(err){
    console.log(err);
    process.exit(1);
}

}

export default connectionDB;