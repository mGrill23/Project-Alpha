$("#submit").on("click", function() {


var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag&query=" + searchQuery + "";
var searchQuery = $("#search").val();

$.ajax({
    url: queryURL,
    method: "get",
}).then(function(responce) {

    for (var i = 0; i < responce.length; i++){

        var thumbnailUrl = responce[i].thumbnailImage;

        var productName = responce[i].name;

        var price = responce[i].salesPrice;

        



    }

});




});
