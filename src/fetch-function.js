export let weatherData = {

};


export function fetchWeather (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72c205fe50ec0c81fbf1577dbf8e83f0&units=metric`)
    .then(response => {
        return response.json();

    }).then(response => {
       console.log(response)
    })
    .catch(error => {
        console.log('we made a mistake' + error);

    });
};

export function fetchWeather2 (city) {
        document.querySelector('.error').classList.remove('error-active');

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72c205fe50ec0c81fbf1577dbf8e83f0&units=metric`)
        .then(response => {
            return response.json();

        }).then(response => {
            weatherData.name = response.name;
            weatherData.country = response.sys.country.toUpperCase();
            weatherData.description = response.weather[0].description;
            weatherData.iconData = response.weather[0].icon;
            weatherData.temp = Math.round(response.main.temp);
            weatherData.feels_like = Math.round(response.main.feels_like);
            weatherData.humidity = response.main.humidity;
            weatherData.wind = Math.round(response.wind.speed);
            weatherData.minTemp = Math.round(response.main.temp_min);
            weatherData.maxTemp = Math.round(response.main.temp_max);
            weatherData.main = response.weather[0].main;
            document.querySelector('.weather-output').style = "visibility: visible;";
        })
        .catch(error => {
            document.querySelector('.error').classList.add('error-active');
            document.querySelector('.weather-output').style = "visibility: hidden;";
        });

 };



 export function displayWeather() {
     const cityName = document.querySelector('.weather-city');
     const description = document.querySelector('.weather-description');
     const weatherIcon = document.querySelector('.weather-icon');
     const weatherTemp = document.querySelector('.weather-temp');
     const feelsLike = document.querySelector('#feels-like');
     const humidity = document.querySelector('#humidity');
     const wind = document.querySelector('#wind');
     const minTemp = document.querySelector('#min-temp');
     const maxTemp = document.querySelector('#max-temp');
     
     cityName.textContent = weatherData.name+ ', ' + weatherData.country;
     weatherTemp.textContent = weatherData.temp;
     description.textContent = weatherData.description;
     weatherIcon.style = `background: url("http://openweathermap.org/img/wn/${weatherData.iconData}@2x.png") no-repeat;`
     feelsLike.textContent = weatherData.feels_like;
     humidity.textContent = weatherData.humidity;
     wind.textContent = weatherData.wind;
     minTemp.textContent = weatherData.minTemp;
     maxTemp.textContent = weatherData.maxTemp;

 };



