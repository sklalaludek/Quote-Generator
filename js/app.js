$(document).ready(function() {

    function generateQuotes() {
        var btn = $("button");
        var urlChuckNorrisRandom = "https://api.chucknorris.io/jokes/random";
        var urlChuckNorrisGif = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=chuck+norris";

        /* Insert Random Quotes to DOM  */
        function getData(url) {
            $.ajax({
                    url: url,
                    method: "GET",
                    dataType: "json"
                })
                .done(function(response) {
                    $("#quotes").text(response.value);
                });
        }
        
        /* Insert Random Gifs to DOM  */
        function getPic(url) {
            $.ajax({
                    url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=chuck+norris",
                    method: "GET",
                    dataType: "json"
                })
                .done(function(response) {
                    console.log(response.data.image_url);
                    $("#gifs").css("background-image", 'url("' + response.data.image_url + '")');
                });
        }
        btn.on("click", function() {
            getData(urlChuckNorrisRandom);
            getPic(urlChuckNorrisGif);
        });
    }
    generateQuotes();
});
