$("#submit").on("click", function() {


var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + searchQuery;
var searchQuery = $("#search").val();

$.ajax({
    url: queryURL,
    method: "get",
}).then(function(responce) {






    
});




});
