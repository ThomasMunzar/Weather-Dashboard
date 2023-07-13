/*
Global Variables: what needs to be stored and referenced in multiple function

var request URLS with unique name (url for 5 day forcase/ url for lat and long....)
    var weatherAPI = https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=c69f185cd8ad396017eee39ad71c6f59
    var latLonApi = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
var Store API keys
var Element Selectors (multiple)
var currentDate use DAYJS
var searchBtnEl
var searchInputEl = document.queryselector("#") maybe decide if you want to use jquery


*/
// Global Variables
var myApiKey = "c69f185cd8ad396017eee39ad71c6f59"
var weatherApi = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=c69f185cd8ad396017eee39ad71c6f59";
var latLonApi = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ myApiKey;
var storeApiKeys
var currentDate = dayjs().format('MM-DD-YYYY h:mm'); 
var searchBtnEl = $("#searchBtn");
var searchInputEl= $('#searchInput');
var currentWeatherEl= $('#currentWeather');
var weatherForecastEl= $('#weatherForecast');
var city;
var stateCode;
var countryCode;
var lat;
var lon;
//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ","+ stateCode + ","+ countryCode +"&appid=" + myApiKey;


function recentSearches(){}

function search(city){
    fetch(latLonApi)
getCoordinates(city)
.then(function(coordinates){
    return getWeather(coordinates.lat, coordinates.lon);
})
.then(function(weatherData){
    displayData(weatherData);
})
.catch(function(error){
    console.log(error);

});
}

function getCoordinates(){}

function getWeather(){
    fetch(weatherApi)
    .then(function (response){
        return response.json();
    })
}

function displayData(){}



    searchBtnEl.on("click", function() {
        // Get the city name from the input element
        var city = searchInputEl.val();
        // Call the search function with the city name
        search(city);
      });



    // FUNCTIONS

        // Recent Searches- check localStorage
                // function that displays data on the page

                //  function for storing search
        // update recent search / call recent search function
        //

        // Search Function
            // function search(cityName){}
                //Take in input
                // call function that saves recent searches
                

            // function getCoordinates(city){}
                // fetch request to lat/long api
                // .then convert to JSON format
                //.then - receieve and extract coord data
                //  This returns coordinates (lat/long).. Extract data and identify lat and long
                // CALL weather FUNCTION


            // FUNCTION weather (coords){}
                // use coordinates to FETCH REQUEST weather DATA from weather api
                //.then convert to JSON format
                //  extract data to pull info we want (temp wind humidity and 5 day forecast) convert from UNIX to normal date
                //call display data function
            
            // 
            //function displayData(multiple variables (current weather, 5day, wind)){}
                // Display data to page dependant on HTML
                // You can only fetch weather data AFTER coordinates come back

    
// event listeners for search button 
    //("click", function(){
    //  variable for search input (city)
    // call function named- search(variable)
    //})
// event listener for recent searches("click", function(event){
    //create variable for seatch term(text on button)
    //console.log(event.target)
    //call search function