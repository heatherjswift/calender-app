//set current date at the top of the app
const today = moment();
document.getElementById("currentDay").innerHTML = today.format("dddd, MMMM Do")

//grabs textarea and stores text value
$(".btn").on("click", function() {
    var key = $(this).siblings(".textareavalue").attr("id")
    var value = $(this).siblings(".textareavalue").val();
    localStorage.setItem(key, value)
    console.log(key, value)
})

// gets stored value when page refreshed
$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))

//current time for comparison
var currentTime = moment().format("HH")

// 9 am colors
if (currentTime > 9) {
    $("#9").addClass("past-grey")    
};

if (currentTime === 9) {
    $("#9").addClass("present-red")
};

if (currentTime < 9) {
    $("#9").addClass("future-green")
};

// 10 am colors
if (currentTime > 10) {
    $("#10").addClass("past-grey")    
};

if (currentTime === 10) {
    $("#10").addClass("present-red")
};

if (currentTime < 10) {
    $("#10").addClass("future-green")
};

// 11 am colors
if (currentTime > 11) {
    $("#11").addClass("past-grey")    
};

if (currentTime === 11) {
    $("#11").addClass("present-red")
};

if (currentTime < 11) {
    $("#11").addClass("future-green")
};

// 12 pm colors
if (currentTime > 12) {
    $("#12").addClass("past-grey")    
};

if (currentTime === 12) {
    $("#12").addClass("present-red")
};

if (currentTime < 12) {
    $("#12").addClass("future-green")
};

// 1 pm aka 13:00 colors
if (currentTime > 13) {
    $("#13").addClass("past-grey")    
};

if (currentTime === 13) {
    $("#13").addClass("present-red")
};

if (currentTime < 13) {
    $("#13").addClass("future-green")
};

// 2 pm aka 14:00 colors
if (currentTime > 14) {
    $("#14").addClass("past-grey")    
};

if (currentTime === 14) {
    $("#14").addClass("present-red")
};

if (currentTime < 14) {
    $("#14").addClass("future-green")
};

// 3 pm aka 15:00 colors
if (currentTime > 15) {
    $("#15").addClass("past-grey")    
};

if (currentTime === 15) {
    $("#15").addClass("present-red")
};

if (currentTime < 15) {
    $("#15").addClass("future-green")
};

// 4 pm aka 16:00 colors
if (currentTime > 16) {
    $("#16").addClass("past-grey")    
};

if (currentTime === 16) {
    $("#16").addClass("present-red")
};

if (currentTime < 16) {
    $("#16").addClass("future-green")
};

// 5 pm aka 17:00 colors
if (currentTime > 17) {
    $("#17").addClass("past-grey")    
};

if (currentTime === 17) {
    $("#17").addClass("present-red")
};

if (currentTime < 17) {
    $("#17").addClass("future-green")
};

console.log(currentTime)