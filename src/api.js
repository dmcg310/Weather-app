import { dom } from "./dom.js";

function getUserSelectedCity() {
  const container = document.getElementById("weather-information-container");
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    container.innerHTML = "";

    const city = document.getElementById("user-city").value;
    getWeather(city);
  });
}

async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=050bbef77d1e1eeb2549979a3c38ae80&units=metric`,
    { mode: "cors" }
  );

  if (!response.ok) {
    const modal = document.getElementById("validation-error-modal");
    modal.style.display = "block";

    const closeBtn = document.getElementById("validation-error-modal-close");
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.style.display = "none";
      }
    });

    return;
  }

  const data = await response.json();

  const weatherMain = data.weather[0].main;
  const temp = data.main.temp;
  const feelsLike = data.main.feels_like;
  const tempMin = data.main.temp_min;
  const tempMax = data.main.temp_max;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const name = data.name;

  dom(
    weatherMain,
    temp,
    feelsLike,
    tempMin,
    tempMax,
    humidity,
    windSpeed,
    name
  );
}

export { getUserSelectedCity, getWeather };
