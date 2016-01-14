$(document).ready(function() {
  $("form#wiki").submit(function(event) {
    var page = $("select.program").val();
    location.href="./pages/" + page + ".html?";

    event.preventDefault();
  });


});
