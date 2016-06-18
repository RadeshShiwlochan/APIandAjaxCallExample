$(document).ready(function() {
  $("#search").on("submit",function(e) {
    e.preventDefault();
    var formData = {
      "t" : $("input[name=t]").val(),
    };
    $.ajax({
      type: "GET",
      url: "http://www.omdbapi.com/?",
      data:formData,
      success: function(response) {
        var movieTitle = $("#movie-title").html(response.Title);
        var moviePoster = $("#poster").attr("src",response.Poster);
        console.log(moviePoster);
      }
    });
  });
});
  



