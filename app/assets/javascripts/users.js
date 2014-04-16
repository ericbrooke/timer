$(function() {

  var startTime;
  var diffTime;
  var timeVal;
  var isCountdown = false;

  $( "#ender" ).click(function() {

    diffTime = ((new Date()) - startTime);
    isCountdown = false;
    $(".result").val(diffTime);
  });

  $( "#starter" ).on("click",function() {
    isCountdown = true;
    startTime = new Date();
    while (isCountdown == true) {
      var timeVal = $('#timer').text();
      setInterval(function () {
        if (timeVal >= 0) { isCountdown = false; }
        $('#timer').text(timeVal - 1);
      }, 1000);
    };
  });
});