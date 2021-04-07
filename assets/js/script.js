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
