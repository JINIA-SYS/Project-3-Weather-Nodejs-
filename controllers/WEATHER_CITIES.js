//const fetch = require('node-fetch');
async function POST_CITIES(req, res) {
    
    const city  = req.body.city
    console.log(city)
   

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = { method: 'GET', headers: { 'X-RapidAPI-Key': 'f691fbbe6bmsh2da196fb343b774p186171jsn97aff31669c4', 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com' } };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
    const length = Object.keys(result).length;
    const val = Object.values(result)
    console.log(length, val)
    return res.render("weather_Home",{ data: result,city:city })
}

module.exports = { POST_CITIES }


