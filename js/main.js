const inputField = document.getElementById('input-field');
document.getElementById('search-btn').addEventListener('click', () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=03e502c70d5c99fc75b083a2c362ea76`
    inputField.value = '';
    fetch(url).then(res => res.json()).then(data => displayWeather(data))
})

const city = document.getElementById('city');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');

function displayWeather(weather) {
    console.log(weather);

    city.innerText = weather.name

    temperature.innerHTML = `${(weather.main.temp - 273.15).toFixed(2)}&deg;C`
    condition.innerText = weather.weather[0].main

    console.log(weather.weather[0].main);
}