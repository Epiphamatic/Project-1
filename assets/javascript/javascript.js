$(document).ready(function() {

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
                    a.attr("data-name", response[i].base)
                    a.attr("data-val", Math.round(response[i].price_quote * 100) / 100)
                    console.log(a)
                    $(".base").append(a);
                }
            
            }
        });
    });
};

function coinClick() {

    $(".drop").click(function() {

        var coinCard = $("<div class = 'card coinCard'>");

        var coinName = $(this).attr('data-name');

        console.log(coinName);

        var coinValue = $(this).attr('data-val');

        console.log(coinValue);
        
        var coinNameText = $("<div class = 'coinName'>" + coinName + "</div>");

        var coinValueText = $("<div class = 'coinValue'> $ " + coinValue + "</div>");

        coinCard.append(coinNameText, coinValueText);

        console.log(coinCard);

        $("#coinRow").append(coinCard);

        coinCard.clear();

    });

}



$(document).on("click", ".drop", coinClick);

});
