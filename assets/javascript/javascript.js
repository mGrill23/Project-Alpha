$(document).ready(function() {
    console.log("here");
    callAPI();
});

function callAPI() {
    console.log("call api");

    var APIkey = "16429cd639ebeac0b07237ba3d66f2a6";
    var queryURL = "https://cors-anywhere.herokuapp.com/https://gateway.marvel.com:443/v1/public/characters?apikey=" + APIkey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    // define the funtion to be executed when the api returns
    .then(function(response) {
        console.log("enter callback");
        console.log(response);
    })
};