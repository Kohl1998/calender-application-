// selector for paragraph witin  Jumbotron
var currentTime = $('#currentDay');

// Sets text to current time using moment.js 
$(document).ready(function () {
    var datetime = $('#currentDay'),
        date = moment(new Date()),
        update = function(){
            currentTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
        };
    update();
    setInterval(update, 1000);
});

// currentTime.text(moment().format("DDD, MMM, YYYY, hh:mm:ss", 1000));



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

// Selectors for timeblocks
var nineAM = $('#9am');
var tenAm = $('#10am');
var elevenAm = $('#11am');
var Twelve = $('#12pm');
var onePM = $('#1pm') ;
var twoPm = $('#2pm');
var threePM = $('#3pm');
var fourPM = $('#4pm');
var fivePM = $('#5pm'); 


nineAM.text(Times[0]).attr("class", "hour")
tenAm.text(Times[1]).attr("class", "hour")
elevenAm.text(Times[2]).attr("class", "hour")
Twelve.text(Times[3]).attr("class", "hour")
onePM.text(Times[4]).attr("class", "hour")
twoPm.text(Times[5]).attr("class", "hour")
threePM.text(Times[6]).attr("class", "hour")
fourPM.text(Times[7]).attr("class", "hour")
fivePM.text(Times[8]).attr("class", "hour")



/* for  (var i = 0; i < Times.length; i++) {
    var timeHolders = $('<p>');
    timeHolders.text(Times[i]).appendTo('div');
} */