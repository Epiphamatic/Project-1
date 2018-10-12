$(document).ready(function() {

// Firebase

var config = {
    apiKey: "AIzaSyC3qqQCLWKVU-kisz6cJuaR725aCNqQG5I",
    authDomain: "crypton-d95b2.firebaseapp.com",
    databaseURL: "https://crypton-d95b2.firebaseio.com",
    projectId: "crypton-d95b2",
    storageBucket: "crypton-d95b2.appspot.com",
    messagingSenderId: "249923183261"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

var queryUrl = "https://api.nomics.com/v1/exchange-markets/prices?key=2dc3cbe885c38fd8b528ac761e8ad9f1&quote=USDformat=csv"

dropdown("binance");
dropdown("bitfinex");
dropdown("gateio");
dropdown("hitbtc");
dropdown("kraken");
dropdown("poloniex");


var text;
var period;
function dropdown (object)
{
    $.ajax({
        url : queryUrl,
        method: "GET"
    }).then(function(response){
    $("." + object ).on('click', function(){

        $(".drop").remove();
        for(i = 0; i < response.length; i++)
        {
        if (response[i].quote === 'USDT' || response[i].quote === 'USD'){
    
            // console.log(response[i]);
    
            
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
        }
        $(".drop").on('click', function(){
            $(".ccc-widget").remove();
            text = $(this).text();
            console.log(text);
            $("#script").empty(); // this does nothing!
            period = "&period=1W" ;
            baseUrl = "https://widgets.cryptocompare.com/";
            var scripts = document.getElementsByTagName("script");
            var embedder = scripts[ scripts.length - 1 ];
            (function (){
            var appName = encodeURIComponent(window.location.hostname);
            if(appName==""){appName="local";}
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl+'serve/v1/coin/chart?fsym=' + text + '&tsym=USD';
            s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            embedder.parentNode.appendChild(s);
        })(); 
        })

        $(".1w").on('click', function(){
            $(".ccc-widget").remove();
            period = "&period=1W" ;
            baseUrl = "https://widgets.cryptocompare.com/";
            var scripts = document.getElementsByTagName("script");
            var embedder = scripts[ scripts.length - 1 ];
            (function (){
            var appName = encodeURIComponent(window.location.hostname);
            if(appName==""){appName="local";}
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl+'serve/v1/coin/chart?fsym=' + text + '&tsym=USD' + period;
            s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            embedder.parentNode.appendChild(s);
            })(); 
        });

        $(".2w").on('click', function(){
            $(".ccc-widget").remove();
            console.log("2W works");
            period = "&period=2W" ;
            baseUrl = "https://widgets.cryptocompare.com/";
            var scripts = document.getElementsByTagName("script");
            var embedder = scripts[ scripts.length - 1 ];
            (function (){
            var appName = encodeURIComponent(window.location.hostname);
            if(appName==""){appName="local";}
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl+'serve/v1/coin/chart?fsym=' + text + '&tsym=USD' + period;
            s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            embedder.parentNode.appendChild(s);
            })(); 
        });

        $(".1m").on('click', function(){
            $(".ccc-widget").remove();
            console.log("1M works");
            period = "&period=1M" ;
            baseUrl = "https://widgets.cryptocompare.com/";
            var scripts = document.getElementsByTagName("script");
            var embedder = scripts[ scripts.length - 1 ];
            (function (){
            var appName = encodeURIComponent(window.location.hostname);
            if(appName==""){appName="local";}
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl+'serve/v1/coin/chart?fsym=' + text + '&tsym=USD' + period;
            s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            embedder.parentNode.appendChild(s);
            })(); 
        });

        $(".3m").on('click', function(){
            $(".ccc-widget").remove();
            console.log("3M works");
            period = "&period=3M" ;
            baseUrl = "https://widgets.cryptocompare.com/";
            var scripts = document.getElementsByTagName("script");
            var embedder = scripts[ scripts.length - 1 ];
            (function (){
            var appName = encodeURIComponent(window.location.hostname);
            if(appName==""){appName="local";}
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl+'serve/v1/coin/chart?fsym=' + text + '&tsym=USD' + period;
            s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            embedder.parentNode.appendChild(s);
            })(); 
        });

        $(".6m").on('click', function(){
            $(".ccc-widget").remove();
            console.log("6M works");
            period = "&period=6M" ;
            baseUrl = "https://widgets.cryptocompare.com/";
            var scripts = document.getElementsByTagName("script");
            var embedder = scripts[ scripts.length - 1 ];
            (function (){
            var appName = encodeURIComponent(window.location.hostname);
            if(appName==""){appName="local";}
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl+'serve/v1/coin/chart?fsym=' + text + '&tsym=USD' + period;
            s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            embedder.parentNode.appendChild(s);
            })(); 
        });

        $(".1YR").on('click', function(){
            $(".ccc-widget").remove();
            console.log("1YR works");
            period = "&period=1Y" ;
            baseUrl = "https://widgets.cryptocompare.com/";
            var scripts = document.getElementsByTagName("script");
            var embedder = scripts[ scripts.length - 1 ];
            (function (){
            var appName = encodeURIComponent(window.location.hostname);
            if(appName==""){appName="local";}
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl+'serve/v1/coin/chart?fsym=' + text + '&tsym=USD' + period;
            s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            embedder.parentNode.appendChild(s);
            })(); 
        });
        });
    });
};

$(function (){
  
    $(".dropdown-menu a").click(function(){
      
    $(".btn-secondary:first-child").text($(this).text());
    // $(".btn-secondary:first-child").val($(this).text());

    });
  
});

//   $(function (){

//     $("#coinBtn").on('click',function(){
    
//       $(".btn-primary:first-child").text($(this).text());
//     //   $("#coinBtn:first-child").val($(this).text());
//     });

//   });

function coinClick() {

    var coinName = $(this).attr('data-name');

    console.log(coinName);

    var coinValue = $(this).attr('data-val');

    console.log(coinValue);

    var newCoin= {

        coinName: coinName,

        coinValue: coinValue,

    };

    database.ref().push(newCoin);

    // var user = firebase.auth().currentUser;
    // console.log(user);
    // var ref = firebase.database().ref('users/' + user);
    // ref.set(newCoin);

}

database.ref().on("child_added", function(childSnapshot, prevChildKey){

    var coinCard = $("<div class = 'card coinCard'>");

    var coinNameText = $("<div class = 'coinName'>" + childSnapshot.val().coinName + "</div>");

    var coinValueText = $("<div class = 'coinValue'> $ " + childSnapshot.val().coinValue + "</div>");

    coinCard.append(coinNameText, coinValueText);

    $("#coinRow").append(coinCard);

});

const txtEmail = $("#txtEmail");
const txtPassword = $("#txtPassword");
const btnLogin = $("#btnLogin");
const btnSignUp = $("#btnSignUp");
const btnLogout = $("#btnLogout");
var userId = "";

$(btnLogin).on("click", function() {

    const email = txtEmail.val().trim();
    const pass = txtPassword.val().trim();
    const auth = firebase.auth();
    userId = txtEmail.val().trim();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

$(btnSignUp).on("click", function() {

    const email = txtEmail.val().trim();
    const pass = txtPassword.val().trim();
    const auth = firebase.auth();
    userId = txtEmail.val().trim();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

$(btnLogout).on("click", function() {

    firebase.auth().signOut();
    userId = "";
});

firebase.auth().onAuthStateChanged(firebaseUser => {

    if (firebaseUser) {
        console.log(firebaseUser);
        btnLogout.removeClass("hide");
    } else {
        console.log("Not Logged In");
        btnLogout.addClass("hide");
    }
});

$(document).on("click", ".drop", coinClick);

$('.dropdown-menu a').click(function() {
    var input = $(".btn-secondary:first-child").text();
    var newsUrl = 'https://newsapi.org/v2/everything?q='+input+'&apiKey=83fb1989288a476683d74b5321ffd2a2';   
    
   $.getJSON(newsUrl).then(function(result){

        //  Debugging 

        // console.log(result.articles);

        // For loop for each item in the array 

        for(i = 0; i < result.articles.length; i++) {

            // Create initial body to hold all the article items
            
            var articles = $("<div class = 'article'>")

            // Call each of them individually and create divs to hold the data

            var title = $("<div class = 'title'>" + result.articles[i].title + "</div>");
            // console.log(title);
            var content = $("<div class = 'description'>" + result.articles[i].description + "</div>");
            var urlToImage = $("<img class = 'articleImg' src = " + result.articles[i].urlToImage + ">");
            var url = $("<a class = 'source' href = " + result.articles[i].url + "> Source </a>");

            // Append them all to the article body 

            articles.append(title, urlToImage, content, url);

            // Append each of the newly created article cards to the newsCard div

            $('#newsCard').append(articles);

        };

     
    });
});

$('.dropdown-menu a').click(function() {
    var input = $(".btn-secondary:first-child").text();
$.ajax({
    dataType:'JSON',
    url : 'https://api.nomics.com/v1/exchange-markets/prices?key=2dc3cbe885c38fd8b528ac761e8ad9f1&quote=USD'+input,
    method: 'GET',
    success: success});

function success(e)
{
var result="";
$.each(e,function(index,value)
{
    result += '<li>Ticker:  '+value.quote+'</li>';
    result += '<ul>Price: '+value.price_quote+'</ul>'
    result += '<ul>Time: '+moment(value.timestamp).format('mm/dd/yyy hh:mm') +'</ul>'
});

$('#statsCard').html(result);
}
})

});
