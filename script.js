var timeDisplayEl = $("#time-display");
var textEl = $(".description");

function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] h:mm:ss a");
  timeDisplayEl.text(rightNow);
}

$(".saveBtn").on("click", function () {
  var dailyTask = $(this).siblings(".description").val();
  var taskTime = $(this).parent().attr("id");
  localStorage.setItem(taskTime, dailyTask);
});

$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

function colorTime() {
  var presentTime = this.textContent;
  if (colorTime < timeNow) {
    return "style", "color:white;";
  } else if (colorTime === timeNow) {
    setAttribute("style", "color:red;");
  } else colorTime > timeNow;
  {
  }
}

setInterval(displayTime, 1000);
