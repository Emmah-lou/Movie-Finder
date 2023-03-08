// var httpRequest = new XMLHttpRequest();
            
// httpRequest.onload = function() {
  
//   if (httpRequest.readyState === XMLHttpRequest.DONE) {
//     if (httpRequest.status === 200) {
//       console.log(httpRequest.responseText);
//       var movies = JSON.parse(httpRequest.responseText);
//       console.log(movies);
//       document.getElementById('poster').innerHTML = movies.Poster;
//       document.getElementById('title').innerHTML = movies.Title;
//       console.log(search);
//     } else {
//       console.log(httpRequest.statusText);
//     }
//   }
// };

// httpRequest.onreadystatechange = function() {
//   console.log('Ready state: ' + httpRequest.readyState + ', status: ' + httpRequest.status);
// };


// httpRequest.onerror = function() {
//   console.log(httpRequest.statusText);
// }


// httpRequest.open('GET', 'https://www.omdbapi.com/?s=' + search + '&plot=short&apikey=73740781');
// httpRequest.send();
var httpRequest = new XMLHttpRequest();
            
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      var movies = JSON.parse(httpRequest.responseText);
      console.log(movies);
      
    } else {
      console.log(httpRequest.statusText);
    }
  }
}

httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}
function searchMovies() {
  const search = $('input').val();
  if (search) {
    httpRequest.open('GET', 'https://www.omdbapi.com/?s=' + 'frozen' + '&plot=short&apikey=b7da8d63');
    httpRequest.send();
    console.log(search);
  }
}

$(document).ready(function() {
  $('button').on('click', searchMovies());
});
