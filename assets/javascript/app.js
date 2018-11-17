

 
$("#searchEbayBtn").on("click", function() {
    console.log("hellow Ebay");
     var searchQuery = encodeURIComponent($("#menuOptions option:selected").val());

    console.log("searchQuery=" + searchQuery);
    
     var queryUrl = "https://cors-anywhere.herokuapp.com/http://open.api.ebay.com/shopping?version=1067&appid=michaelg-s-PRD-0c272c1de-fe286388&callname=FindProducts&QueryKeywords=" + searchQuery + "&MaxEntries=10&responseencoding=JSON";
    
    console.log(queryUrl);
    
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function(response) {
        console.log("raw response=" + response);
        response = JSON.parse(response);
        
        // response = response;
        console.log(response);
        var ebayResults = $("#ebayResults");
       function domLoop(response) {
        for (var i = 0; i < response.Product.length; i++)  {
            var link = response.Product[i].DetailsURL;
            console.log(link);
            var title = response.Product[i].Title;
            console.log(title);
             var mainCharacter = response.Product[i].ItemSpecifics.NameValueList[1].Value[0];
             console.log("mainCharacter=" + mainCharacter);
 
             
             var newCard = $("<div>").addClass("card ebayResult");
             
             var newURLDiv = $("<a>").attr("href", link).text(title);
             var newCharachterDiv = $("<div>").addClass("mainChar").attr("target", "top").attr("id", "title").text("Main Character: " + mainCharacter);
             newCard.append(newURLDiv);
             newCard.append(newCharachterDiv);
 
             ebayResults.append(newCard);
            
        }
       }

if (ebayResults.children().length == 0) {
    domloop(response);
} else {
    ebayResults.empty();
    domLoop(response);
}
    
        
    
    });

    
    
    
    
    });
    
    // Changes XML to JSON
    function xmlToJson(xml) {
        
    	// Create the return object
    	var obj = {};
    
    	if (xml.nodeType == 1) { // element
    		// do attributes
    		if (xml.attributes.length > 0) {
    		obj["@attributes"] = {};
    			for (var j = 0; j < xml.attributes.length; j++) {
    				var attribute = xml.attributes.item(j);
    				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
    			}
    		}
    	} else if (xml.nodeType == 3) { // text
    		obj = xml.nodeValue;
    	}
    

    };    
