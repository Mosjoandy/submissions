$( document ).ready(function() {
    // console.log( "ready!" );
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCs0mx4Dsdn3jOGwINSK5gcsTOaKq01lcQ",
    authDomain: "submissionform-55850.firebaseapp.com",
    databaseURL: "https://submissionform-55850.firebaseio.com",
    projectId: "submissionform-55850",
    storageBucket: "submissionform-55850.appspot.com",
    messagingSenderId: "550850797250"
};
firebase.initializeApp(config);

var database = firebase.database();

// Initial Values
var counterThumb = 0;
var counterClap = 0;
var counterRock = 0;
var counterFives = 0;

function crushIt() {

    $("#thanks").fadeIn();
    $("#showAll").hide();

    setTimeout(function () {
        $("#thanks").fadeOut();
        $("#showAll").fadeIn();
    }, 3500);

    var comment = $("#comment-input").val().trim();
    var email = $("#email-input").val().trim();
    var name = $("#name-input").val().trim();

    var newSub = {
        name: name,
        email: email,
        comment: comment
    };

    database.ref("contacts").push(newSub)

    $("#name-input").val("");
    $("#email-input").val("");
    $("#comment-input").val("");

}

$(document).ready(function () {
    $("#comment-input").keydown(function (event) {
        if (event.keyCode == 13) {
            crushIt()
            return false;
        }
    });
});

//Hide THank You Div
$("#thanks").hide();

$("#add-user").on("click", function (event) {

    event.preventDefault()
    crushIt()

});

//Thumbs Up
$("#click-button1").on("click", function () {
    counterThumb++;
    database.ref("counterThumb").set({
        counterThumb: counterThumb
    });
});

database.ref("counterThumb").on("value", function (snapshot) {
    $("#click-value1").text(snapshot.val().counterThumb);
    counterThumb = snapshot.val().counterThumb;
});

//Clap Up
$("#click-button2").on("click", function () {
    counterClap++;
    database.ref("counterClap").set({
        counterClap: counterClap
    });
});

database.ref("counterClap").on("value", function (snapshot) {
    $("#click-value2").text(snapshot.val().counterClap);
    counterClap = snapshot.val().counterClap;
});

//Rock Up
$("#click-button3").on("click", function () {
    counterRock++;
    database.ref("counterRock").set({
        counterRock: counterRock
    });
});

database.ref("counterRock").on("value", function (snapshot) {
    $("#click-value3").text(snapshot.val().counterRock);
    counterRock = snapshot.val().counterRock;
});

//High Fives
$("#click-button4").on("click", function () {
    counterFives++;
    database.ref("counterFives").set({
        counterFives: counterFives
    });
});

database.ref("counterFives").on("value", function (snapshot) {
    $("#click-value4").text(snapshot.val().counterFives);
    counterFives = snapshot.val().counterFives;
});
