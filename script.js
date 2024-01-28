const apikey = "5be9ed84013fd38633c021520cd33c19";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")
const error = document.querySelector(".error")
const weather = document.querySelector(".weather")

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        error.style.display = "block"
        weather.style.display = "none"

    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png"

        } else
            if (data.weather[0].main == "Clear") {
                weathericon.src = "images/clear.png"

            } else
                if (data.weather[0].main == "Rain") {
                    weathericon.src = "images/rain.png"

                } else
                    if (data.weather[0].main == "Drizzle") {
                        weathericon.src = "images/drizzle.png"

                    } else
                        if (data.weather[0].main == "Mist") {
                            weathericon.src = "images/mist.png"

                        }

                        else if (data.weather[0].main == "Snow") {
                            weathericon.src = "images/snow.png"

                        }


        document.querySelector(".weather").style.display = "block";
        error.style.display = "none";
    }

}



searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})


