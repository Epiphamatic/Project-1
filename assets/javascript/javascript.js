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

var newsUrl = 'https://newsapi.org/v2/top-headlines?' +'sources=bbc-news&' +'apiKey=83fb1989288a476683d74b5321ffd2a2';  
    
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