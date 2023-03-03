function dom(
  weatherMain,
  temp,
  feelsLike,
  tempMin,
  tempMax,
  humidity,
  windSpeed,
  name
) {
  temp += " °C";
  feelsLike += " °C";
  tempMin += " °C";
  tempMax += " °C";
  humidity += "%";
  windSpeed += "m/s";

  const container = document.getElementById("weather-information-container");
  container.style.display = "block";

  const card = document.createElement("div");
  card.classList = "card";
  card.innerHTML = `<h3 class="card-header">${name}   /   ${temp}</h3>
	<p>Feels like ${feelsLike}</p>
	<p>${weatherMain}</p>
  <p>${humidity} Humidity</p>
  <p>Wind ${windSpeed}</p>
  <p>Lowest today is ${tempMin} and highest is ${tempMax}</p>`;

  container.appendChild(card);
}

export { dom };
