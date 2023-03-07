// Get the user's location
navigator.geolocation.getCurrentPosition(position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Use the OpenWeatherMap API to get the weather data
  const API_KEY = 'd0e5168a0c36cff27633a2801c36a964';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      // Display the weather data to the user
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;

      // Update the UI with the weather data
      const temperatureEl = document.getElementById('temperature');
      const descriptionEl = document.getElementById('description');
      const iconEl = document.getElementById('icon');

      temperatureEl.innerHTML = `${temperature}°C`;
      descriptionEl.innerHTML = description;
      iconEl.src = `https://openweathermap.org/img/w/${icon}.png`;
    })
    .catch(error => {
      console.log(error);
    });
});
