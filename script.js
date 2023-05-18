const apiKey = '25ab549db2924f8aaa8112459231805';
const searchBtn = document.getElementById('searchCity');
const input = document.querySelector('input');
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const weatherDesc = document.querySelector('.description');
const error = document.querySelector('.error');

searchBtn.addEventListener('click', () => {
  let chosenCity = input.value;
  getWeather(chosenCity);
});

function getWeather(chosenCity) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${chosenCity}`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        error.textContent = 'City not found. Please try again.';
        icon.innerHTML = '';
        weather.innerHTML = '';
        temperature.innerHTML = '';
        weatherDesc.innerHTML = '';
      } else {
        let weatherIcon = data.current.condition.icon;
        let weatherCityName = data.location.name;
        let weatherCountry = data.location.country;
        let weatherRegion = data.location.region;
        let weatherTemp = data.current.temp_c;
        let weatherText = data.current.condition.text;
        icon.innerHTML = `<img src="${weatherIcon}">`;
        weather.innerHTML = `<h2>${weatherCityName}, ${weatherRegion}, ${weatherCountry}</h2>`;
        temperature.innerHTML = `<h2>${weatherTemp}°c</h2>`;
        weatherDesc.innerHTML = `<h2>${weatherText}</h2>`;
        error.textContent = '';
      }
    })
    .catch((error) => {
      console.log('Error:', error);
      error.textContent = 'An error occurred. Please try again later.';
      icon.innerHTML = '';
      weather.innerHTML = '';
      temperature.innerHTML = '';
      weatherDesc.innerHTML = '';
    });
}
