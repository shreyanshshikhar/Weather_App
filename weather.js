const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
    const api_key = "accab798b92548c07224907a51d42b5c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json()); //convert .json data to string
    // console.log(weather_data);
    if (weather_data.cod == `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    location_not_found.style.display = "none";

    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}<sup>°C</sup>`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "https://cdn-icons-png.flaticon.com/512/1146/1146881.png?w=740&t=st=1689424795~exp=1689425395~hmac=0bef97599b08c27c13ac7d865ad80b1bbf84166d46f9391bcc5cb37f53b4bf4e";
            break;
        case 'Haze':
            weather_img.src = "https://cdn-icons-png.flaticon.com/512/1197/1197102.png?w=740&t=st=1689428463~exp=1689429063~hmac=0b2f7d508979b3c8c70adc4257655424da57a4fbf35f2af8eec25c7f8ffde11c";
            break;

        case 'Clear':
            weather_img.src = "https://cdn-icons-png.flaticon.com/512/1146/1146869.png?w=740&t=st=1689424844~exp=1689425444~hmac=957551cf613407e80a5af15a2a65bbb3a10ca8a55dddd2bc5edc43729ca5a795";
            break;
        case 'Rain':
            weather_img.src = "https://cdn-icons-png.flaticon.com/512/1164/1164945.png?w=740&t=st=1689423344~exp=1689423944~hmac=f20c51df4e74f1ec48818cfbebf61faf26f6d34f4e015738ed2ab6eee6071671";
            break;

        case 'Mist':
            weather_img.src = "https://cdn-icons-png.flaticon.com/512/414/414975.png?w=740&t=st=1689424673~exp=1689425273~hmac=f96fc317b4e40008a0b166bf18e50dce0f1b957777d3abbaa955b68a5bb12e47";
            break;
        case 'Snow':
            weather_img.src = "https://cdn-icons-png.flaticon.com/512/414/414934.png?w=740&t=st=1689424279~exp=1689424879~hmac=07556d5fe6762e12a3727162f185fc6643284b44674ac0aa8c1cd8de88bebc72";
            break;
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});