const temp = document.getElementById("temp");
const cityname = document.getElementById("cityname");
const windspeed = document.getElementById("windspeed");
const humidity = document.getElementById("humidity");
const sky= document.getElementById('sky');
const pressure = document.getElementById('pressure');
const weatherimg = document.getElementById('weatherimg');

const search1 = document.getElementById("input1");


const btn = document.getElementById("btn");

const API_KEY = "4d04704af4c9b4797f221d9a5d835294";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function weather1(city) {

  const W = await fetch(API_URL + city +  `&appid=${API_KEY}`);

  const data = await W.json();

  if(W.status == 404){
       return  cityname.innerHTML = 'Invalid city name!!'
  }

  console.log(data);

  cityname.innerHTML = data.name;
  sky.innerHTML = data.weather[0].description;
  temp.innerHTML = Math.round(data.main.temp) + "°C";
  windspeed.innerHTML = data.wind.speed + " m/s";
  humidity.innerHTML = data.main.humidity + " %";
  pressure.innerHTML = data.main.pressure + ' hPa';

  if(data.weather[0].main === 'Clear')
  {
    weatherimg.src = 'image/sunny.png';
  }
  else if(data.weather[0].main === 'Rain')
  {
    weatherimg.src = 'image/rain.png'
  }
  else if(data.weather[0].main === 'Clouds')
  {
    weatherimg.src = 'image/cloud.png'
  }
  else if(data.weather[0].main === 'Few clouds')
  {
    weatherimg.src = 'image/sun_cloud.png'
  }

}

btn.addEventListener("click",()=>{
    weather1(search1.value);
    
});

input1.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        weather1(search1.value);

    }

})
