$(document).ready(function() {
  $("form#appointment").submit(function(event) {
  var yourName = $("input#name").val();
  var description = $("input#desc").val();
  var date = $("input#date").val();
  var time = $("input#time").val();

  $(".name1").text(yourName);
  $(".date1").text(date);
  $(".desc1").text(description);
  $(".time1").text(time);
  $(".result").show();
  event.preventDefault();
  });
});
