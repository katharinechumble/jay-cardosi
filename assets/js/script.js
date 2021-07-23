console.log("GUTEN MORGEN HERR PTERODACTYL");
// define variables
var searchFormEl = document.querySelector("#search-box");
var searchInputEl = document.querySelector("#search");
var searchButtonEl = document.querySelector("#btn");
var weatherContainerEl = document.querySelector("#present-container");
var pastSearchesEl = document.querySelector("#search-container");

//function to prevent invalid searches
var formCitySearch = function(event) {
    // negates chances of error
    event.preventDefault();

    var cityName = searchInputEl.value.trim();

    if(cityName) {
        getCityWeather(cityName);
        searchInputEl.value = "";
    } else {
        alert("Please enter a valid city name.");
    }
    console.log(event);
};

// event listener for click
searchFormEl.addEventListener("submit", formCitySearch);
// function to pull current weather
var getCityWeather = function(current) {
    console.log("Eyyyyyy");
    // format api url
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=0b83383bcfd7067d3c959dbf82b86dc0")
    .then(function(response){
        return response.json();
    })
    .catch(function(error) {
        alert("Unable to connect to service!")
    })
};

getCityWeather();