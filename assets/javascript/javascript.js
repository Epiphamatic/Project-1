var queryUrl = "https://api.nomics.com/v1/exchange-markets/prices?key=2dc3cbe885c38fd8b528ac761e8ad9f1&quote=USD"

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
    
            console.log(response[i]);
    
            
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
$(function(){
  
    $(".dropdown-menu a").click(function(){
      
      $(".btn-secondary:first-child").text($(this).text());
       $(".btn-secondary:first-child").val($(this).text());
    });
  
  });
