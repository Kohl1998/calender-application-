// selector for paragraph witin  Jumbotron
var currentTime = $('#currentDay');

// Sets text to current time using moment.js 
currentTime.text(moment().format("DDD, MMM, YYYY, hh:mm:ss", 1000));

// Appends it to text field 
currentTime.appendTo('.currentDay')

// To select div container
var timeBlocks = $('.container');

var Times = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm"
]



