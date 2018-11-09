$("#submit").on("click", function() {


var queryURL = "https://api.walmartlabs.com/v1/search?apiKey="+ apiKey + "&query=" + searchQuery + "&numItems=10";
var searchQuery = $("#search").val();
var apiKey;

$.ajax({
    url: queryURL,
    method: "get",
}).then(function(responce) {
    console.log(responce);

    var Items = responce.items;

    for (var i = 0; i < Items.length; i++){

        var thumbnailUrl = Items[i].thumbnailImage;

        var productName = Items[i].name;

        var price = Items[i].salesPrice;

        var product = $("<div>");

        var img = $("<img>").attr("src", thumbnailUrl);

        var name = $("<h4>").attr("val", productName);

        var pricetag = $("<p>").attr("val", price);

        product.append(img);
        product.append(name);
        product.append(pricetag);


    }

});




});
