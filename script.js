fetch("https://api.openweathermap.org/data/2.5/weather?q=kakkanad&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric").then((apiResponse)=>
{
    console.log(apiResponse);
    apiResponse.json().then((weatherdetails)=>{
        console.log(weatherdetails);
        document.getElementById('country').innerHTML+=`${weatherdetails.sys.country}`
        document.getElementById('pressure').innerHTML+=`${weatherdetails.main.pressure}`
        document.getElementById('wind').innerHTML+=`${weatherdetails.wind.speed}km/hr`
        document.getElementById('humidity').innerHTML+=`${weatherdetails.main.humidity}`
         document.getElementById('fp').innerHTML+=`${weatherdetails.main.temp}°`
         document.getElementById('fl').innerHTML+=`feels like  ${weatherdetails.main.feels_like}°`
            document.getElementById('kkd').innerHTML+=`${weatherdetails.name}`
         
    })

} 
).catch((error)=>
console.log(error));
