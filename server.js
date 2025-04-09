//! variaveis de ambiente

import {PORT} from "./config/env.js";

// import database
import connectionDB from "./db/mongodb.js"

//! server express
import express from "express";

//! importação das rotas
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"

const app = express();

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes)

app.get("/", (req, res)=>{
res.send("Welcome to my app!!!")
})

app.listen(PORT, async ()=>{
    console.log(`APP RUNNING ON http://localhost:${PORT}`);
    await connectionDB();
})


