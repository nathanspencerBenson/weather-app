import { weatherData } from "./fetch-function";

export let index = 0;


export function backgroundChange () {
    const html = document.querySelector('html');
    if(weatherData.main == 'Clear') {
        html.style = "background: linear-gradient(0deg, rgba(26, 24, 25, 0.3), rgba(17, 15, 16, 0.3)), url('/images/background-start.jpg') no-repeat center center fixed; background-size: cover;";
    } else if (weatherData.main == 'Rain') {
        html.style = "background: linear-gradient(0deg, rgba(26, 24, 25, 0.45), rgba(17, 15, 16, 0.45)), url('/images/rain.jpg') no-repeat center center fixed; background-size: cover;";
    } else if (weatherData.main == 'Clouds') {
        html.style = "background: linear-gradient(0deg, rgba(26, 24, 25, 0.45), rgba(17, 15, 16, 0.45)), url('/images/cloudy.jpg') no-repeat center center fixed; background-size: cover;";
    } else if (weatherData.main == 'Snow') {
        html.style = "background: linear-gradient(0deg, rgba(26, 24, 25, 0.45), rgba(17, 15, 16, 0.45)), url('/images/winter.jpg') no-repeat center center fixed; background-size: cover;";
    } else if (weatherData.main == 'Thunderstorm') {
        html.style = "background: linear-gradient(0deg, rgba(26, 24, 25, 0.45), rgba(17, 15, 16, 0.45)), url('/images/thunderstorm.jpg') no-repeat center center fixed; background-size: cover;";
    } else if (weatherData.main == 'Drizzle') {
        html.style = "background: linear-gradient(0deg, rgba(26, 24, 25, 0.45), rgba(17, 15, 16, 0.45)), url('/images/drizzle.jpg') no-repeat center center fixed; background-size: cover;";
    } else {
        html.style = "background: linear-gradient(0deg, rgba(26, 24, 25, 0.45), rgba(17, 15, 16, 0.45)), url('/images/spring.jpg') no-repeat center center fixed; background-size: cover;";
    }
}