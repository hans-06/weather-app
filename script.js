function myfunc() {
  var cityName = document.getElementById("cityInput").value;
  var icon = document.getElementById("myIcon");
  var city = document.getElementById("city");
  var temp = document.getElementById("temp");
  var weatherDisplay = document.getElementById("weather");
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=78559cb41df5294bc001b59e01629d53";
  // console.log(cityName);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      city.innerHTML = `<span>${data.name}</span>`;
      temp.innerHTML = `<span>${Math.round(
        data.main.temp - 273
      )}</span><span>&degC</span>`;
      var weatherType = data.weather[0].main;
      weatherDisplay.innerHTML = `<span>${weatherType}</span>`;
      // console.log(weatherType);

      if (weatherType == "Haze") {
        icon.innerHTML = `<i class="bi bi-cloud-haze2"></i>`;
      } else if (weatherType == "Clear") {
        icon.innerHTML = `<i class="bi bi-brightness-high">`;
      } else if (weatherType == "Rain") {
        icon.innerHTML = `<i class="bi bi-cloud-rain"></i>`;
      } else if (weatherType == "Clouds") {
        icon.innerHTML = `<i class="bi bi-cloud"></i>`;
      } else if (weatherType == "Thunderstorm") {
        icon.innerHTML = `<i class="bi bi-cloud-lightning-rain"></i>`;
      } else if (weatherType == "Drizzle") {
        icon.innerHTML = `<i class="bi bi-cloud-drizzle"></i>`;
      } else if (weatherType == "snow") {
        icon.innerHTML = `<i class="bi bi-snow2"></i>`;
      }
    });
}
