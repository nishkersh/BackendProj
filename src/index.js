// connecting database in our indexedDB.js  remember always use async , await and wrap it inn try catch method because database may be in another continent

// Basically we have 2 approaches for connecting to our database
// 1. writing the conection code in our indexedDB.js file only 
// 2. Writing another file for connecting our database 



//    1st approach 



/*
import mongoose from "mongoose";
import { DB_Name } from "./constants";
import express  from "express";
const app =express()

// using ife function 
;( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)

        // to check if database is connected but expreass app is facing some issues
        app.on("error", (error)=>{
            console.log("Express app is not able to talk to database");
            throw error
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`App is listening to port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR",error)
        throw error
    }
})()
*/

//    2nd approach 

// require('dotenv').config({path: './env'})
// we will use another way of importing .env in madular way

import connectDB from "./db/dbConnect.js";
import { app } from "./app.js";
// import express  from "express";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(proceess.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port : ${proceess.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed",err)
})