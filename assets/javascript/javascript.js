var queryUrl = "https://api.nomics.com/v1/exchange-markets/prices?key=2dc3cbe885c38fd8b528ac761e8ad9f1&quote=USD";
// var newsUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR';
// var newsUrl = "https://cors.io/?https://cryptopanic.com/api/posts/?auth_token=57b7c8bf35d5e74e30e83d460c3b51cc6b6f4093&currencies=BTC,ETH";
var newsUrl = 'https://newsapi.org/v2/top-headlines?' +'sources=bbc-news&' +'apiKey=83fb1989288a476683d74b5321ffd2a2';

dropdown("binance");
dropdown("bitfinex");
dropdown("gateio");
dropdown("hitbtc");
dropdown("kraken");
dropdown("poloniex");


function dropdown (object)
{
    $.ajax({
        url : queryUrl,
        method: "GET"
    }).then(function(response){
    $("." + object ).on('click', function(){

        $(".drop").remove();
        for(i = 0; i < response.length; i++)
        if (response[i].quote === 'USDT' || response[i].quote === 'USD'){
    
            // console.log(response[i]);
    
            
                if(response[i].exchange === object)
                {
    
                    var a = $("<a class = 'dropdown-item drop' >");
                    a.text(response[i].base);
    
                    $(".base").append(a);
                }
            
            }
        });
    });


}


$(function (){
  
    $(".dropdown-menu a").click(function(){
      
      $(".btn-secondary:first-child").text($(this).text());
       $(".btn-secondary:first-child").val($(this).text());
    });
  
  });



// Fixed API Call for News API. Styling in indexZach.html
  
$(document).ready(function() {

    var newsUrl = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=83fb1989288a476683d74b5321ffd2a2';   
    
    $.getJSON(newsUrl).then(function(result){

        //  Debugging 

        console.log(result.articles);

        // For loop for each item in the array 

        for(i = 0; i < result.articles.length; i++) {

            // Create initial body to hold all the article items
            
            var articles = $("<div class = 'article'>")

            // Call each of them individually and create divs to hold the data

            var title = $("<div class = 'title'>" + result.articles[i].title + "</div>");
            console.log(title);
            var content = $("<div class = 'description'>" + result.articles[i].description + "</div>");
            var urlToImage = $("<img class = 'articleImg' src = " + result.articles[i].urlToImage + ">");
            var url = $("<a class = 'source' href = " + result.articles[i].url + "> Source </a>");

            // Append them all to the article body 

            articles.append(title, urlToImage, content, url);

            // Append each of the newly created article cards to the newsCard div

            $('#newsCard').append(articles);

        };

        //  var result="";
        //  $.each(result,function(index,value)
        //  {
        //     result += '<li>'+value['articles']+'</li>';
        //     // result += '<p>'+value.description+'</p>';
        // });
        
        // $('#newsCard').html(result); 
    });
});