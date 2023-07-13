const express=require("express")
const router=express.Router()
const {GET_HOME}=require("../controllers/Weather_function.js")
//const {POST_CITIES}=require("../controllers/WEATHER_CITIES.js")
router.route("/Home").get(GET_HOME).post(GET_HOME)



module.exports=router