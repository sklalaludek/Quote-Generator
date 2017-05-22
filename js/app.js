$(document).ready(function() {

    function generateQuotes() {
        var btn = $(".btn-display-quotes");
        var urlChuckNorrisRandom = "https://api.chucknorris.io/jokes/random";
        var urlChuckNorrisGif = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=chuck+norris";

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
                    url: url,
                    method: "GET",
                    dataType: "json"
                })
                .done(function(response) {
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
