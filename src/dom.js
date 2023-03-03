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
  let result;
  let impTemp = conversion(temp);
  let impFeelsLike = conversion(feelsLike);
  let impTempMin = conversion(tempMin);
  let impTempMax = conversion(tempMax);

  function conversion(unit) {
    result = (unit * 9) / 5 + 32;
    result = Math.round(result * 100) / 100;
    return (result += " °F");
  }

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

  const conversionButtonDiv = document.createElement("div");
  conversionButtonDiv.classList = "conversion-button-div";
  conversionButtonDiv.innerHTML = `<button type="submit" id="unit-conversion-button">Convert unit</button>`;

  container.append(card, conversionButtonDiv);

  domUnitConversion(card);

  function domUnitConversion(card) {
    const imperialButton = document.getElementById("unit-conversion-button");
    imperialButton.addEventListener("click", () => {
      card.innerHTML = `<h3 class="card-header">${name}   /   ${impTemp}</h3>
    <p>Feels like ${impFeelsLike}</p>
    <p>${weatherMain}</p>
    <p>${humidity} Humidity</p>
    <p>Wind ${windSpeed}</p>
    <p>Lowest today is ${impTempMin} and highest is ${impTempMax}</p>`;

      imperialButton.addEventListener("click", () => {
        card.innerHTML = `<h3 class="card-header">${name}   /   ${temp}</h3>
      <p>Feels like ${feelsLike}</p>
      <p>${weatherMain}</p>
      <p>${humidity} Humidity</p>
      <p>Wind ${windSpeed}</p>
      <p>Lowest today is ${tempMin} and highest is ${tempMax}</p>`;
        domUnitConversion(card);
      });
    });
  }
}

export { dom };
