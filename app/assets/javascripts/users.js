var startTime;
var timeNow;
var diffTime;
var isCountdown = false;


$( "#ender" ).click(function() {
  diffTime = Date.new() - startTime;
  $(“.result”).val(diffTime);
});

$( "#starter" ).on("click",function() {
alert(“I’ve been called”);

  isCountdown = true;
  startTime = Date.new();

   function () {
   while (isCountdown == true) {
   function () {
    setTimeout(1);
    var timeNow = Date.new();
    if $(‘#timer’).val() <= 0 {
      isCountdown = false;
  }
}

function updateTimer () {
  // use me as a callback (nonblocking)
  setTimeout(1000);
  $('#timer').val(timeVal - 1);
}
}
}
});


