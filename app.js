const weatherAPI = `837a4f558b14f4aad9867b738d2c0d37`;
const weatherIcons = `http://openweathermap.org/img/wn/`;
let cityName = `Dhaka`;
const icons = document.getElementById('icons');
const search = document.getElementById('search');
const weatherOfCity = document.getElementById('weatherOfCity');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');


search.addEventListener('click', function (e) {
    cityName = document.getElementById('cityName').value;
    getLocation(cityName)
})

// getting Location using API
function getLocation(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherAPI}`)
    .then(response => response.json())
        .then(data => {
            console.log(data)
            weatherOfCity.innerText = data.name;
            temperature.innerText = Math.round((data.main.temp) - 273.15);
            weatherCondition.innerText = data.weather[0].main;
            icons.setAttribute('src', `${weatherIcons}${data.weather[0].icon}.png`)
    })
}
getLocation(cityName)
