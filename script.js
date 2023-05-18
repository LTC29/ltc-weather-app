const apiKey = '25ab549db2924f8aaa8112459231805';
const searchBtn = document.getElementById('searchCity');
const input = document.querySelector('input');
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const weatherDesc = document.querySelector('.description');

searchBtn.addEventListener('click', () => {
  let chosenCity = input.value;
  getWeather(chosenCity);
});

function getWeather(chosenCity) {
  console.log(chosenCity);

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${chosenCity}`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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
    });
}
