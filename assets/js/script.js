console.log("GUTEN MORGEN HERR PTERODACTYL");
// define variables
var searchFormEl = document.querySelector("#search");
var searchInputEl = document.querySelector("#search-box-form");
var searchButtonEl = document.querySelector("#btn");
var weatherContainerEl = document.querySelector("#present-container");
var pastSearchesEl = document.querySelector("#search-container");

//function to prevent invalid searches
var formCitySearch = function (event) {
  // negates chances of error
  event.preventDefault();

  var cityName = searchInputEl;

  if (cityName) {
    getCityWeather(cityName);
    searchInputEl.value = "";
  } else {
    alert("Please enter a valid city name.");
  }
  console.log(event);
};

// event listener for click
searchInputEl.addEventListener("submit", formCitySearch);
// function to pull current weather
var getCityWeather = function (lat, lon) {
  var presentContainer = document.getElementById("present-container");
  console.log(lat + "" + lon);
  // format api URL
  var callApi =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial" +
    "&appid=imperial&appid=0b83383bcfd7067d3c959dbf82b86dc0";
  fetch(callApi)
    .then(response => {
      return response.json()
      .then(post => {
          console.log(post.current.weather[0]);
          document.getElementById
      })
    })
    .catch(function (error) {
      alert("Unable to connect to service.");
    });
};

// display weather for search value entered
var displayWeather = function (data, current) {
  var cityName = "Louisville";
  weatherContainerEl.textContent = "";
  var currentForecast = document.createElement("div");
  currentForecast.classList = "flex-row justify-space-between align-center";
  currentForecast.setAttribute("src", "./data/2.5/weather?q=" + cityName);
};

// display future weather
var getForecast = function (daily) {
  var cityName = "Chicago";
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
      cityName +
      "&cnt=" +
      5 +
      "&appid=0b83383bcfd7067d3c959dbf82b86dc0"
  ).then(function (response) {
    response.json().then(function (data) {
      displayForecast(data, daily);
    });
  });
};

//save searches to local storage
//localStorage.setItem()
