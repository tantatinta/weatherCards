var APIKey = "166a433c57516f51dfab1f7edaed8413";
$("#searchBtn").on("click", function(event) {
    event.preventDefault();
        var country = $("#searchCountry").val().trim();
    var city = $("#searchCity").val().trim();
    if (country === "" || city === "") {
        return;
    }
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=imperial&appid=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var iconCode = response.weather[0].icon;
        var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        var tempInput = response.main.temp;
        var card = $("<div class='card'>");
        var cardBody = $("<div class='card-body'>");
        card.append(cardBody);

        var cardTitle = $("<h5 class='card-title'>");
        var iconImage = $("<img src='" + iconURL + "'>");
        var temperature = $("<p class='card-text'>");
        var humidity = $("<p class='card-text'>");
        var windSpeed = $("<p class='card-text'>");

        
        cardTitle.text(response.name + ", " + response.sys.country + " on " + moment().format("MMM Do YYYY"));
        cardTitle.append(iconImage);
        temperature.text("Temperature (F): " + tempInput.toFixed());
        humidity.text("Humidity: " + response.main.humidity + "%");
        windSpeed.text("Wind Speed: " + response.wind.speed + " mph");
        
        cardBody.append(cardTitle, temperature, humidity, windSpeed);
        $(".mainDiv").prepend(card);
    })
})


