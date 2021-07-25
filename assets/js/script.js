console.log("GUTEN MORGEN HERR PTERODACTYL");
// define variables
var searchFormEl = document.querySelector("#search");
var searchInputEl = document.querySelector("#search-box-form");
var searchButtonEl = document.querySelector("#btn");
var weatherContainerEl = document.querySelector("#present-container");
var futureContainerEl = document.querySelector("#future-container");
var pastSearchesEl = document.querySelector("#search-container");
var cityName = searchInputEl;


//function to prevent invalid searches
var formCitySearch = function (event) {
  // negates chances of error
  event.preventDefault();

  var cityName = searchInputEl;
  //let lat = response.data.coord.lat;
  //let lon = response.data.coord.lon;

  if (cityName) {
    getCityWeather(cityName);
   searchInputEl.value = "";
 } //else {
 //   alert("Please enter a valid city name.");
 // }
 // console.log(event);
};

//put saved cities into an array and save to local storage
function saveCity(city) {
  var placeObj= {
    city: city
  }
  placeArray.push(placeObj);
  localStorage.setItem('placeArray', JSON.stringify(placeArray));
};

//pull searches from local storage and set them onto page as buttons
//localStorage.setItem()
function makeButtons() {
  var placeArray = [];
  for (var i=0; i < placeArray.length; i++) {
    var button = $("<button>");
    button.text(placeArray[i].city);
    $("#search-container").append(button);
    $(button).setAttribute("style", "btn btn-secondary");
  }
}

// event listener for click
searchInputEl.addEventListener("submit", getCityWeather);
searchInputEl.addEventListener("submit", formCitySearch);
searchInputEl.addEventListener("submit", makeButtons);
//searchButtonEl.addEventListener("submit", getForecast);
// function to pull current weather
var getCityWeather = function (response) {
  var presentContainer = document.getElementById("#present-container");
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  console.log(lat + "" + lon);
  // format api URL
  var callApi =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial" +
    "&appid=0b83383bcfd7067d3c959dbf82b86dc0";
  fetch(callApi)
    .then(response => {
      return response.json()
      .then(post => {
          console.log(post.current.weather[0]);
          document.getElementById('air-temp').textContent = Math.round(post.current.temp);
          document.getElementById('wind-speed').textContent = "Wind speeds of" + post.current.wind_speed;
          document.getElementById('current-conditions').textContent = post.current.weather[0].description;
          document.getElementById('uv-index').textContent = post.current.uvi;

          // future forecasts
          document.getElementById('day-1').textContent = Math.round(post.daily[0].temp.day);
          document.getElementById('day-2').textContent = Math.round(post.daily[1].temp.day);
          document.getElementById('day-3').textContent = Math.round(post.daily[2].temp.day);
          document.getElementById('day-4').textContent = Math.round(post.daily[3].temp.day);
          document.getElementById('day-5').textContent = Math.round(post.daily[4].temp.day);
          // future condition
          document.getElementById('#day-1-conditions').textContent = post.daily[0].weather[0].main;
          document.getElementById('#day-2-conditions').textContent = post.daily[1].weather[0].main;
          document.getElementById('#day-3-conditions').textContent = post.daily[2].weather[0].main;
          document.getElementById('#day-4-conditions').textContent = post.daily[3].weather[0].main;
          document.getElementById('#day-5-conditions').textContent = post.daily[4].weather[0].main;
          // humidity forecast
          document.getElementById('day-1-humid').textContent = post.daily[0].humidity + "% humidity";
          document.getElementById('day-2-humid').textContent = post.daily[1].humidity + "% humidity";
          document.getElementById('day-3-humid').textContent = post.daily[2].humidity + "% humidity";
          document.getElementById('day-4-humid').textContent = post.daily[3].humidity + "% humidity";
          document.getElementById('day-5-humid').textContent = post.daily[4].humidity + "% humidity";
          // wind forecast
          document.getElementById('day-1-wind').textContent = post.daily[0].wind_speed;
          document.getElementById('day-2-wind').textContent = post.daily[1].wind_speed;
          document.getElementById('day-3-wind').textContent = post.daily[2].wind_speed;
          document.getElementById('day-4-wind').textContent = post.daily[3].wind_speed;
          document.getElementById('day-5-wind').textContent = post.daily[4].wind_speed;
      });
    })
    .catch(function (_error) {
      alert("Unable to connect to service.");
    });
};

// display weather for search value entered
//var displayWeather = function (data, current) {
  //var cityName = "Louisville";
  //weatherContainerEl.textContent = "";
  //var currentForecast = document.createElement("div");
  //currentForecast.classList = "flex-row justify-space-between align-center";
  //currentForecast.setAttribute("src", "./data/2.5/weather?q=" + cityName);
//};

// display future weather
//var getForecast = function (daily) {
//  var cityName = "Chicago";
  //fetch(
    //"https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
      //cityName +
    //  "&cnt=" +
    //  5 +
      //"&appid=0b83383bcfd7067d3c959dbf82b86dc0"
//  ).then(function (response) {
  //  response.json().then(function (data) {
    //  displayForecast(data, daily);
   // });
//  });
//};
