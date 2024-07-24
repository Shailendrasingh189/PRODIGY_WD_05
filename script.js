const weather = document.getElementById("weather-details");
const search = document.querySelector("#search input");
const showErr = document.getElementById("error");

const searchBtn = document.querySelector("#search button");
const weatherIcon = document.querySelector("#weather img")

const apiKey = "50d546c1f017ef762afe04e6b618906e";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//show the Weather 
const weatherShow = (data) => {
    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/clouds.png";
    }
}

//check the city to weather
const checkWeather = async (data) => {
    document.querySelector(".city").innerHTML = `${data.name}`;
    temp = Math.round(data.main.temp);
    document.querySelector(".temp").innerHTML = `${temp}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    details.querySelector(".wind").innerHTML = `${data.wind.speed} Km/h`;
    weatherShow(data);

    weather.style.display = "block";
    
};

//data fetch through API
const getdata = async (city) => {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();
        if(response.status == "404") {
            weather.style.display = "none";
            showErr.style.display = "block";

        }
        else {
            showErr.style.display = "none";
            checkWeather(data);

        }
    
};  


searchBtn.addEventListener("click", () => {
    getdata(search.value);
});
