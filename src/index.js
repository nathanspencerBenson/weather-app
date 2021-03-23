import "./main.css";
import "./header.css";
import { fetchWeather, weatherData, fetchWeather2, displayWeather } from "./fetch-function";


const searchIcon = document.querySelector('#search-icon');
const searchInput = document.querySelector('#search-input');

function fetchDisplayWeather () {
    fetchWeather2(searchInput.value);
    setInterval(function() {
        displayWeather();
    }, 2000);
    searchInput.value = '';
}



searchIcon.addEventListener('click', fetchDisplayWeather);
searchInput.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter') {
        fetchDisplayWeather();
    }

})

// fetchWeather('london');
// fetchWeather2('marbella');
// console.log(weatherData);



// setInterval(function() {
//     displayWeather();
// }, 4000);


