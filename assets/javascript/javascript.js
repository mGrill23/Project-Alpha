$(document).ready(function() {
    console.log("here");
});


$("#searchBtn").on("click", function(event) {
       // var searchName = $("#searchBtn");
       var searchName = $("#searchName").val();
       var APIkey = "16429cd639ebeac0b07237ba3d66f2a6";
                                                        //    https://gateway.marvel.com:443/v1/public/comics?apikey=16429cd639ebeac0b07237ba3d66f2a6
       var queryURL = "https://cors-anywhere.herokuapp.com/https://gateway.marvel.com:443/v1/public/comics?apikey=" + APIkey + "&limit=10&titleStartsWith=" + searchName + "&format=comic&formatType=comic";
   
       console.log("Marvel API=" + queryURL);
       $.ajax({
           url: queryURL,
           method: "GET"
       })
   
       // define the funtion to be executed when the api returns
       .then(function(response) {
            console.log(response);
            console.log("length=" + response.data.results.length);
            for (var i=0; i < response.data.results.length;i++) {
                //console.log(response.data.results[i].name);
                console.log(response.data.results[i].title);
                var btnDropdown = $(".dropdown-menu");
        
                var newOption = $("<a>").addClass("dropdown-item").addClass("dropdown-itm").attr("href", "#").attr("id", response.data.results[i].title).text(response.data.results[i].title);
                btnDropdown.append(newOption);
            }
       })
       
});

