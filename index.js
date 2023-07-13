            const express = require("express")
            const app = express()
            const fs = require("fs")
            const path = require("path")
            const PORT = 8050
            const mongoose = require("mongoose")
            const cookieparse = require("cookie-parser")
            //MONGODB Connection
            const { MONGODB_Weather_Connect } = require("./mongoose_connect.js")
            MONGODB_Weather_Connect("mongodb://127.0.0.1:27017/Weather")
            //Input formats 
            app.use(express.json())
            app.use(express.urlencoded({ extended: false }))
            app.use(cookieparse())
            //EJS Tempalate Engine
            app.set("view engine", "ejs")
            app.set("views", path.resolve("./views"))
            //SERVER PORT Running 
            app.listen(PORT, () => { console.log(`Server Running at PORT: ${PORT}`) })



            app.use((req, res, next) => {
                console.log("Middleware-1 connected")
                next()
            })

            app.use((req, res, next) => {
                console.log("Middleware-2 Connected")
                next()
            })


            const staticroutes=require("./routes/staticRoutes.js")

            app.use("/get",staticroutes)