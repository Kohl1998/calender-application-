// selector for paragraph witin  Jumbotron
var currentTime = $('#currentDay');

// Sets text to current time using moment.js 
currentTime.text(moment().format("DDD, MMM, YYYY, hh:mm:ss", 1000));

// Appends it to text field 
currentTime.appendTo('.currentDay')


