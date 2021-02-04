const weatherAPI = `837a4f558b14f4aad9867b738d2c0d37`;
const weatherIcons = `http://openweathermap.org/img/wn/`;
let cityName = `Dhaka`;
const icons = document.getElementById("icons");
const search = document.getElementById("search");
const weatherOfCity = document.getElementById("weatherOfCity");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weatherCondition");

document.getElementById("form").addEventListener("keypress", function (e) {
    e.preventDefault();
    if (e.key === 'Enter') {
        cityName = document.getElementById("cityName").value;
        if (cityName) getLocation(cityName);
    }
});
search.addEventListener("click", function (e) {
    e.preventDefault();
    cityName = document.getElementById("cityName").value;
    if (cityName) getLocation(cityName);
});

// getting Location using API
function getLocation(cityName) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherAPI}`
    )
        .then((response) => response.json())
        .then((data) => {
            if (data.name) weatherOfCity.innerText = data.name;
            temperature.innerText = Math.round(data.main.temp - 273.15);
            weatherCondition.innerText = data.weather[0].description;
            icons.src = `${weatherIcons}${data.weather[0].icon}.png`;
        })
        .catch((e) => {
            alert(e.message);
        });
}
getLocation(cityName);
