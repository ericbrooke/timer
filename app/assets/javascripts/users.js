$(function() {

  var startTime;
  var diffTime;
  var timeVal = $('#timer').text();
  var isCountdown = false;

  $( "#ender" ).click(function() {
    diffTime = ((new Date()) - startTime);
    isCountdown = false;
    $(".result").val(diffTime);
  });

  $( "#starter" ).on("click",function() {
    isCountdown = true;
    startTime = new Date();

    while(isCountdown == true) {
      // setTimeout(1);
      if($('#timer').text() <= 0){
        isCountdown = false;
      }else{
        $('#timer').text(timeVal - 1);
        timeVal = $('#timer').text();
      }
    }
  });
});