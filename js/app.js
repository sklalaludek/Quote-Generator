$(document).ready(function() {

    function generateQuotes(){
        var btn = $("button");
        var urlChuckNorrisRandom = "https://api.chucknorris.io/jokes/random";
        var urlChuckNorrisGif = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=chuck+norris";

        /* Insert Random Quotes to DOM  */
          function getData(url){
              $.ajax({
                      url: url,
                      method: "GET",
                      dataType: "json"
                  })
                  .done(function(response) {
                      $("#quotes").text(response.value);
                  });
          }

          btn.on('click', function() {
              getData(urlChuckNorrisRandom);
          });
    }
    generateQuotes();
});
