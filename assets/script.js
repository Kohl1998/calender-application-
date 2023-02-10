// selector for paragraph witin  Jumbotron
var currentTime = $('#currentDay');

// Sets text to current time using moment.js 
$(document).ready(function () {
    var datetime = $('#currentDay'),
        date = moment(new Date()),
        update = function () {
            currentTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
        };
    update();
    setInterval(update, 1000);
});

console.log(moment().hour())

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
var onePM = $('#1pm');
var twoPm = $('#2pm');
var threePM = $('#3pm');
var fourPM = $('#4pm');
var fivePM = $('#5pm');

// To set the class to hour for css styles
nineAM.text(Times[0]).attr("class", "hour")
tenAm.text(Times[1]).attr("class", "hour")
elevenAm.text(Times[2]).attr("class", "hour")
Twelve.text(Times[3]).attr("class", "hour")
onePM.text(Times[4]).attr("class", "hour")
twoPm.text(Times[5]).attr("class", "hour")
threePM.text(Times[6]).attr("class", "hour")
fourPM.text(Times[7]).attr("class", "hour")
fivePM.text(Times[8]).attr("class", "hour")


var currentHour = moment().hour();
var textInput = $('textarea');
textInput.each(function () {
    var hour = $(this).attr("class")
    $(this).val(localStorage.getItem(hour))
})
textInput.each(function (textarea){
    var currentTextarea = parseInt($(this).attr("class"))
    if(currentHour > currentTextarea) {
        $(this).addClass("past")
    } else if (currentHour === currentTextarea) {
        $(this).removeClass("past")
        $(this).addClass("present")
    } else {
        $(this).removeClass("present")
        $(this).removeClass("past")
        $(this).addClass("future")
    }
})

console.log($('.saveBtn'))
$('.saveBtn').on("click", function (){
    var value = $(this).siblings("textarea").val()
    var time = $(this).siblings("textarea").attr("class").split(" ")[0]
    localStorage.setItem(time, value)
    console.log(time, value)
})



