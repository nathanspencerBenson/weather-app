import "./main.css";
import "./header.css";
import "./mediaqueries.css";
import { fetchWeather, weatherData, fetchWeather2, displayWeather } from "./fetch-function";
import { index, backgroundChange } from "./background";


const searchIcon = document.querySelector('#search-icon');
const searchInput = document.querySelector('#search-input');

// setInterval(backgroundChange, 4000);

function fetchDisplayWeather () {
    fetchWeather2(searchInput.value);
    setInterval(function() {
        displayWeather();
        console.log(weatherData.main)
        backgroundChange();
    }, 2000);
    searchInput.value = '';
}



searchIcon.addEventListener('click', fetchDisplayWeather);
searchInput.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter') {
        fetchDisplayWeather();
    }

})




fetchWeather('london');
// fetchWeather2('marbella');
// console.log(weatherData);




