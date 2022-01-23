
let userInput = $("userInput");
let textArea = $("textarea");

$(document).ready(function () {
$(".saveBtn").on("click",function() {
    let = userInput = $(this).sibling(".description").val();
    let = time = $(this).parent().attr("id");
    localStorage.setItem(time, userInput);
})

/* Local Storage*/
$("#9-hour .description").val(localStorage.getItem("9-hour"));
$("#10-hour .description").val(localStorage.getItem("10-hour"));
$("#11-hour .description").val(localStorage.getItem("11-hour"));
$("#12-hour .description").val(localStorage.getItem("12-hour"));
$("#13-hour .description").val(localStorage.getItem("13-hour"));
$("#14-hour .description").val(localStorage.getItem("14-hour"));
$("#15-hour .description").val(localStorage.getItem("15-hour"));
$("#16-hour .description").val(localStorage.getItem("16-hour"));
$("#17-hour .description").val(localStorage.getItem("17-hour"));
$("#18-hour .description").val(localStorage.getItem("18-hour"));
});

/* current date  */  
$("#currentDay").text(moment().format("dddd MMM Do YYYY"))


/* current time */
let now = moment().hour();

/* change text area color based on the current time*/
let colour = function () {
$(".time-block").each(function () {
    let Timeframe= parseInt($(this).attr("id"));
    if (Timeframe < now) {
        $(this).addClass("past");
        console.log ("working lines 12-16")
    }else if
    (Timeframe === now) {
        $(this).removeClass("past");
        $(this).addClass("present");
        console.log ("Lines 18-21 working")
    }else {
        $(this).removeClass("present")
        $(this).removeClass("past")
        $(this).addClass("future")
        console.log ("Lines 23-26 working")
    }
});

};
colour();
