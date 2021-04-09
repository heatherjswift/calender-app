//set current date at the top of the app
const today = moment();
document.getElementById("currentDay").innerHTML = today.format("dddd, MMMM Do")

$(".btn").on("click", function() {
    var key = $(this).siblings(".textareavalue").attr("id")
    var value = $(this).siblings(".textareavalue").val();
    localStorage.setItem(key, value)
    console.log(key, value)
})

$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))

var currentTime = moment().format("HH")

if (currentTime > 9) {
    $("#9").addClass("past-grey")    
};

// if (9 = 9) {
//     $("#9").addClass("past-grey")
// }

console.log(currentTime)