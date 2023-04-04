//Functions and variables that allows you to pull cotentent from text area and time to be able to save them to local storage.
$(document).ready(function () {
  buttons.on("click", function () {
    var textarea = $(this).siblings(".description").val().trim();
    console.log(textarea);
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, textarea);
  });

  // Function and variables that colors the blocks based on the current time
  function blockcoloring() {
    // Variable for current hour 
    var currenttime = moment().hour();
    
    // Variables and if else statements to apply the past, present, or future class to each time block by comparing the id to the current hour.
    $(".time-block").each(function () {
      var blocks = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blocks);
      if (blocks < currenttime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blocks === currenttime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

   // Code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  blockcoloring();
});

// This displays the cureent date at the top of the schedule 
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// variables for the cureent day and also the save buttons 
var currentDay = $("#currentDay");
var buttons = $(".saveBtn");