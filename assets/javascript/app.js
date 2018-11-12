var $search = $("#search");
$("#submit").on("click", function() {


    var queryURL = "https://open.api.ebay.com/shopping?&callname=FindProductss&version=1063&responseencoding=JSON&appid="+ apiKey + "&QueryKeywords=" + searchQuery + "&AvailableItemsOnly=true&MaxEntries=10";
    var searchQuery = $("#search").val().trim();
    var apiKey = "michaelg-s-PRD-0c272c1de-fe286388";
    
    
    
    $.ajax({
        url: queryURL,
        method: "get",
    }).then(function(responce) {
        console.log(responce);
    
        // var Items = responce.items;
    
        // for (var i = 0; i < Items.length; i++){
    
        //     var thumbnailUrl = Items[i].thumbnailImage;
    
        //     var productName = Items[i].name;
    
        //     var price = Items[i].salesPrice;
    
        //     var cardNum = i + 1;
    
        //     var product = $("#card" + cardNum);
    
        //     var img = $("<img>").attr("src", thumbnailUrl);
    
        //     var name = $("<h5>").attr("val", productName);
    
        //     var pricetag = $("<p>").attr("val", price);
    
        //     product.append(img);
        //     product.append(name);
        //     product.append(pricetag);
    
    
        // }
    
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