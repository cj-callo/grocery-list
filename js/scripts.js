$(document).ready(function() {
  $("#blanks form").submit(function() {
  var blanks = ["dairy","fruit","vegetable","grain","drink"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $(".result").show();

    event.preventDefault();
  });
});
