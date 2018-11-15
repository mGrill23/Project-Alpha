
 
var $search = $("#search");
    
 
$("#searchBtn").on("click", function() {
    console.log(" I AM HERE");
     var searchQuery = $("#searchName").val().trim();
     var queryUrl = "https://cors-anywhere.herokuapp.com/http://open.api.ebay.com/shopping?version=1067&appid=michaelg-s-PRD-0c272c1de-fe286388&callname=FindProducts&QueryKeywords=" + searchQuery + "&MaxEntries=10$responseencoding=JSON";
    
    console.log(queryUrl);
    
    
    
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function(response) {
        var ebayObj = JSON.parse(response);
        
       for (var i = 0; i < 10; i++)  {
           var link = ebayObj.Products[i].DetaildURL;
           console.log(link);
           var imgURL = ebayObj.Products[i].StockPhotoURL;
           console.log(imgURL);
           var title = ebayObj.Products[i].Title;
           console.log(title);

           var div = $("<div>");
           var p = $("<p>");
           var h6 = $("<h6>");
           var img = $("<img>");

           
           p.attr("text", link);
           h6.attr("text", title);
           img.attr("src", imgUrl);
           div.append(img);
           div.append(h6);
           div.append(p);
       }
    
        
    
    });

    
    
    
    
    });
    
    // // Changes XML to JSON
    // function xmlToJson(xml) {
        
    // 	// Create the return object
    // 	var obj = {};
    
    // 	if (xml.nodeType == 1) { // element
    // 		// do attributes
    // 		if (xml.attributes.length > 0) {
    // 		obj["@attributes"] = {};
    // 			for (var j = 0; j < xml.attributes.length; j++) {
    // 				var attribute = xml.attributes.item(j);
    // 				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
    // 			}
    // 		}
    // 	} else if (xml.nodeType == 3) { // text
    // 		obj = xml.nodeValue;
    // 	}
    
    // 	// do children
    // 	if (xml.hasChildNodes()) {
    // 		for(var i = 0; i < xml.childNodes.length; i++) {
    // 			var item = xml.childNodes.item(i);
    // 			var nodeName = item.nodeName;
    // 			if (typeof(obj[nodeName]) == "undefined") {
    // 				obj[nodeName] = xmlToJson(item);
    // 			} else {
    // 				if (typeof(obj[nodeName].push) == "undefined") {
    // 					var old = obj[nodeName];
    // 					obj[nodeName] = [];
    // 					obj[nodeName].push(old);
    // 				}
    // 				obj[nodeName].push(xmlToJson(item));
    // 			}
    // 		}
    // 	}
    // 	return obj;
    // };    
