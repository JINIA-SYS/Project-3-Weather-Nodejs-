//const fetch = require('node-fetch');
async function GET_City(element) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${element}`
    const options = { method: 'GET', headers: { 'X-RapidAPI-Key': 'f691fbbe6bmsh2da196fb343b774p186171jsn97aff31669c4', 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com' } };
    const response = await fetch(url, options);
    return response.json()
}





async function GET_HOME(req, res) {
    const city = req.body.city
    console.log(city)
    let result;
    if (req.body.city) {
        result = await GET_City(city)
    }
    else {
        result = await GET_City("Delhi")
    }
    console.log(result)
    const location= ['New York', 'Dubai', 'Paris', 'Rome', 'Moscow', 'London'];
    const values=[]
    for (var i = 0; i <location.length; i++) {
        var element = location[i]
       var results = await GET_City(element)
     
        values.push({[element]:results})
    }
    return res.render("weather_Home", { data:result, city:city,value:values })
}

module.exports = { GET_HOME }




/*

const citi = await GET_City(city)
console.log(citi)

const cities = await GET_City("MOSCOW")
console.log("MOSCOW:", cities)

/*
 console.log("DELHI:", result)
 const city = req.body.city
    const request = GET_City(city)
    console.log(request)


const length = Object.keys(result).length;
const val = Object.values(result)
console.log(length, val)*/


/*
async function cities() {
        for (const element of arr) {
            const city = await GET_City(element)
            console.log(city, element)
        };

    
    }
    cities()
const arr = ["New York", "Dubai", "Paris", "Rome", "Moscow", "London"]


const options = { method: 'GET', headers: { 'X-RapidAPI-Key': 'f691fbbe6bmsh2da196fb343b774p186171jsn97aff31669c4', 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com' } };
const response = await fetch(url, options);

return response.json()*/

