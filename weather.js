const inputbox=document.querySelector('#input-box');
const searchbutton=document.querySelector('#search-btn');
const weathericon=document.querySelector('.weather-icon');
const temperature=document.querySelector('.temp');
const description=document.querySelector('.description');
const humidity=document.querySelector('.humidity');
const windspeed=document.querySelector('.Wind');


async function checkweather(city){
    const api_key="45313ded33a3f74122ee0c721da33aa9"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data=await fetch(`${url}`).then(response=>response.json())
     console.log(weather_data);
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}℃`
    description.innerHTML=`${weather_data.weather[0].description}`
    console.log(weather_data);

    humidity.innerHTML=`${weather_data.main.humidity}%`
    windspeed.innerHTML=`${weather_data.wind.speed}Km/h`
}
searchbutton.addEventListener('click' , ()=>{
    checkweather(inputbox.value)})
    