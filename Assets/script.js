/*
Global Variables: what needs to be stored and referenced in multiple function

var request URLS with unique name (url for 5 day forcase/ url for lat and long....)

var Store API keys
var Element Selectors (multiple)
*/

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
                

            // function coords(){}
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
