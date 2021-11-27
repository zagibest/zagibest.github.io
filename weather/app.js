let weather = {
    fetchWeather: function (city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=b34c2b4695fae01d1f6bdb8a4862a553")
        .then((response) => {
          if (!response.ok) {
            alert("City not avaivable.");
            throw new Error("City not available.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + "@4x.png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".degree").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather-card").classList.remove("loading");
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search-btn").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Ulaanbaatar");
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();