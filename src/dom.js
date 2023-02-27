function dom(
  weatherMain,
  weatherDescription,
  temp,
  feelsLike,
  tempMin,
  tempMax,
  humidity,
  windSpeed,
  name
) {
  temp += " °C"
  feelsLike += " °C"
  tempMin += " °C"
  tempMax += " °C"
  weatherMain = weatherMain.toUpperCase();
  weatherDescription = weatherDescription.toUpperCase();

  const container = document.getElementById("weather-information-container");
  const card = document.createElement("div");
  card.classList = "card";

  const cardHeader = document.createElement("h3");
  cardHeader.classList = "card-header";
  cardHeader.innerText = name;

  const cardLeft = document.createElement("div");
  cardLeft.className = "card-left";
  cardLeft.innerHTML = `<p>${temp}</p>\n<p>${feelsLike}</p>`;

  const cardRight = document.createElement("div");
  cardRight.className = "card-right";
  cardRight.innerHTML = `<p>${weatherMain}</p>
    \n<p>${weatherDescription}</p>
    \n<p>${tempMin} | ${tempMax}</p>
    \n<p>${humidity}</p>
    \n<p>${windSpeed}</p>`;

  card.append(cardHeader, cardLeft, cardRight);
  container.appendChild(card);
}

export { dom };
