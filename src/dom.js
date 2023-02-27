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
	temp += " °C";
	feelsLike += " °C";
	tempMin += " °C";
	tempMax += " °C";
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
	const cardLeftContainer = document.createElement("div");
	cardLeftContainer.classList = "card-left-container";

	const cardRight = document.createElement("div");
	cardRight.className = "card-right";
	cardRight.innerHTML = `<p>${weatherMain}</p>
    \n<p>${weatherDescription}</p>
    \n<p>${tempMin} | ${tempMax}</p>
    \n<p>${humidity}</p>
    \n<p>${windSpeed}</p>`;
	const cardRightContainer = document.createElement("div");
	cardRightContainer.classList = "card-right-container";

	cardLeftContainer.appendChild(cardLeft);
	cardRightContainer.appendChild(cardRight);
	card.append(cardHeader, cardLeftContainer, cardRightContainer);
	container.appendChild(card);
}

export { dom };
