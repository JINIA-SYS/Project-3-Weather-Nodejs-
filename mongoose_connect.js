
const mongoose = require("mongoose")
async function MONGODB_Weather_Connect(url) {
    return mongoose.set({ strictQuery: true })
        .connect(url)
        .then(() => { console.log(`MONGODB Connected at url:${url}`) })
        .catch((err) => { console.log("MongodB connection error") })
}

module.exports = { MONGODB_Weather_Connect }