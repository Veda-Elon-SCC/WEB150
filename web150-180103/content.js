//this is a comment

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >= 18 && hourNow <= 24) {
    greeting = "Good Evening!";
} else if (hourNow >= 12 && hourNow <= 18) {
    greeting = "Good Afternoon!"
} else {
    greeting = "Good Morning!";
}
//write the greeting to the browser
document.write('<h3>' + greeting + '</h3>');