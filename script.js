var searchMovies = function (e) {
  e.preventDefault();
  var searchResult = $("input").val();
  
  if (searchResult) {
    var httpRequest = new XMLHttpRequest();           
    httpRequest.onload = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var response = JSON.parse(httpRequest.responseText);
          console.log(response);
          var results = $('.movie-container');
          results.empty();
          for (let i = 0; i < response.Search.length; i++) {
            const movie = response.Search[i];
            results.append(
              '<div class="movieItem">' +
              '<img class="img-fluid" src="' + movie.Poster + '" alt="~Movie Poster Not Found~">' +
              '<h3>Title: ' + movie.Title + '</h3>' +
              '<p>Year: ' + movie.Year + '</p>' +
              '<p>Type: ' + movie.Type + '</p>' +
              '</div>'
            );
          }
        } else {
          console.log(httpRequest.statusText);
        }
      }
    };
    httpRequest.onerror = function() {
      console.log(httpRequest.statusText);
    };
    httpRequest.open('GET', 'https://www.omdbapi.com/?s=' + searchResult + '&plot=short&apikey=73740781');
    httpRequest.send(null);
  }
};
