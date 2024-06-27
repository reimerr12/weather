const inputBox = document.getElementById("input-box");
const searchBtn = document.getElementById("button");
const weather_Img = document.getElementById("weather-image");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("percentagehumidity");
const windSpeed = document.getElementById("windvelocity");
const notFound = document.getElementById("locationerror");
const weather_body = document.getElementById("weatherbody");



searchBtn.addEventListener('click',function(){
    checkWeather(inputBox.value);
})

async function checkWeather(city){
    const api_key = "0a7e52850e13d73079ae8464b9677166";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

     if(weather_data.cod==='404'){
        notFound.style.display="flex";
        weather_body.style.display="none";
        console.log("error");
        return;
    } 

    console.log("not an error");
    notFound.style.display="none";
    weather_body.style.display="flex";

    temperature.innerHTML =`${Math.round(weather_data.main.temp - 272.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    windSpeed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_Img.src = "images/cloud.png";
            break;
        case 'Clear':
            weather_Img.src = "images/clear.png";
            break;
        case 'Mist':
            weather_Img.src = "images/mist.png";
            break;
        case 'Rain':
            weather_Img.src = "images/rain.png";
            break;
        case 'Snow':
            weather_Img.src = "images/snow.png";
            break;
    }
}