var httpRequest = new XMLHttpRequest();           
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      //console.log(httpRequest.responseText);
      var response = JSON.parse(httpRequest.responseText);
      console.log(response);
      //document.getElementById('poster').src = response.Search[0].Poster;
      for (let i = 0; i < response.Search.length; i++) {
        
        const movie = response.Search[i];
        var results = $('div');
        results.append(
          '<img src="' + movie.Poster + '" alt="movie poster">' +
          '<h3>Title: ' + movie.Title + '</h3>' +
          '<p>' + movie.Year + '</p>' +
          '<p>' + movie.Type + '</p>'
        );
      }
      
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}
var searchMovies = function (e) {
  e.preventDefault();
  var searchResult = document.querySelector("input").value;
  
  if (searchResult) {
    httpRequest.open('GET', 'https://www.omdbapi.com/?s=' + searchResult + '&plot=short&apikey=73740781');
    httpRequest.send(null);
    
  }
}
