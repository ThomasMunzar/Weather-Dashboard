
// Global Variables
var myApiKey = "c69f185cd8ad396017eee39ad71c6f59"
var weatherApi = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=c69f185cd8ad396017eee39ad71c6f59";

var storeApiKeys
var currentDate = dayjs().format('MM-DD-YYYY h:mm'); 
var searchBtnEl = $("#searchBtn");
var searchInputEl= $('#searchInput');
var currentWeatherEl= $('#currentWeather');
var weatherForecastEl= $('#weatherForecast');

// FUNCTIONS
function recentSearches(city){
    var history = JSON.parse(localStorage.getItem("cities"))||[];
    if (!history.includes(city)){ //This code will make the localStorage not display repeat cities in the recent search area.
    history.push(city)
    localStorage.setItem("cities"
    ,JSON.stringify(history))
    }
    displayRecentSearches()
}

function displayRecentSearches() {
    var history = JSON.parse(localStorage.getItem("cities")) || [];
    var recentSearchesEl = $("#recentSearches");
  
    recentSearchesEl.empty(); // Clear previous content
  
    for (var i = 0; i < history.length; i++) { //iterates through history array and creates a buttons for that history item.
      var cityBtn = $("<button>").text(history[i]);
      cityBtn.addClass("recent-search");
      recentSearchesEl.append(cityBtn);
    }
    $(".recent-search").on("click",function(){
        var city=$(this).text();
        fiveDayForecast(city);
        updateFirstDay(city);
    });
  }
  

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


function fiveDayForecast(searchCity){
    var city;
    if (!searchCity) {
    city = $("#searchInput").val()
    }else{
        city=searchCity
    }
        var latLonApi = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid="+ myApiKey + "&units=imperial";
        $("#weatherForecast").empty();
        fetch(latLonApi)

    .then(function(response){ 
    return response.json();
    })
    .then(function(data){
        console.log(data)
        var index = 1;
        for (var i=7; i<data.list.length;i+=8){
            var day = data.list[i]
            var fiveDayCard = $("<div>").attr("id", "card-"+index);
            var dateEl = $("<p></p>").text(dayjs.unix(day.dt).format("MM-DD-YYYY"))
            fiveDayCard.append(dateEl)
            var tempEl = $("<p></p>").text("Temperature: "+ day.main.temp)
            fiveDayCard.append(tempEl)
            var windEl = $("<p></p>").text("Wind: "+ day.wind.speed)
            fiveDayCard.append(windEl)
            var humEl = $("<p></p>").text("Humidity: "+ day.main.humidity)
            fiveDayCard.append(humEl)
            var imageEl =$("<img>").attr("src","https://openweathermap.org/img/wn/"+ day.weather[0].icon+".png")
            fiveDayCard.append(imageEl)
            $("#weatherForecast").append(fiveDayCard);
            index++
            
        }

    })
}
searchBtnEl.on("click",function(){
    updateFirstDay()
})

function updateFirstDay(searchCity){
    var city;
    if (!searchCity){
        city=$("#searchInput").val()

    } else{
        city = searchCity
    }


  

      
        recentSearches(city)
        var latLonApi = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ myApiKey + "&units=imperial";
        fetch(latLonApi)

    .then(function(response){
    return response.json();
    })
    .then(function(data){
    console.log(data);
    $("#city").text("City: "+ city+" "+dayjs.unix(data.dt).format("MM-DD-YYYY"))
    $("#weatherImage").attr("src","https://openweathermap.org/img/wn/"+ data.weather[0].icon+".png")
    $("#temp").text("Temperature: "+data.main.temp)
    $("#wind").text("Wind: "+ data.wind.speed)
    $("#humitdity").text("Humitdity: "+data.main.humidity)
    fiveDayForecast()
    })
}
    



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