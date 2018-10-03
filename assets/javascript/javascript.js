var queryUrl = "https://api.nomics.com/v1/prices?key=2dc3cbe885c38fd8b528ac761e8ad9f1"

$.ajax({
    url : queryUrl,
    method: "GET"
}).then(function(response){
    console.log(response);
});