const API_KEY = `604676856a874813ab8132618230105`;
const modalContainer = document.querySelector("#modal__container");
const btnAddCities = document.querySelector(".nav__container__button--style");
const btnCloseModal = document.querySelector(".modal__container--close");
const magnifying = document.querySelector(".modal__container--magnifying");

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

const modalOpen = () => {
  modalContainer.classList.remove("visible");
};
const modalClose = () => {
  modalContainer.classList.add("visible");
};
const closeCity = () => {
  cityDiv.classList.add("visible");
};



const weatherApp = async () => {
  const body = document.querySelector('body')
  
  const cityDiv = document.querySelector(".section__city");

  const newDiv = document.createElement("div");
  const newBtn = document.createElement("button");
  const circleExit = document.createElement("i");
  const newDivTop = document.createElement("div");
  const img = document.createElement("img");
  const divInfo = document.createElement("div");
  const newParagraph = document.createElement("p");
  const newSpan = document.createElement("span");
  const divSpecifications = document.createElement("div");
  const ul = document.createElement("ul");
  const liPressure = document.createElement("li");
  const liHumidity = document.createElement("li");
  const liWind = document.createElement("li");
  const divBotton = document.createElement("div");

  newDiv.setAttribute("class", "cities__container");
  newBtn.setAttribute("class", "cities__container--close");
  circleExit.setAttribute("class", "fa-solid fa-circle-xmark");
  newDivTop.setAttribute("class", "cities__container__top");
  img.setAttribute("class", "currentImg");
  divInfo.setAttribute("class", "cities__container__top--info");
  newParagraph.setAttribute("class", "cityName");
  newSpan.setAttribute("class", "temp");
  divSpecifications.setAttribute(
    "class",
    "cities__container__top--specification"
  );
  liPressure.setAttribute("class", "currentPressure");
  liHumidity.setAttribute("class", "currentHumidity");
  liWind.setAttribute("class", "currentWind");
  divBotton.setAttribute("class", "cities__container__bottom");

  cityDiv.prepend(newDiv);
  newDiv.append(newBtn);
  newBtn.append(circleExit);
  newDiv.append(newDivTop);
  newDivTop.append(img);
  newDivTop.append(divInfo);
  divInfo.append(newParagraph);
  divInfo.append(newSpan);
  newDivTop.appendChild(divSpecifications);
  divSpecifications.append(ul);
  ul.appendChild(liPressure);
  ul.appendChild(liHumidity);
  ul.appendChild(liWind);
  newDiv.appendChild(divBotton);

  circleExit.addEventListener('click',()=>{
    newDiv.remove()
  })

  let cityValue = document.querySelector("#city").value;

  try {
    const result =
      await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityValue}&days=5
`);

    const data = await result.json();
    const weatherImg = data.current.condition.icon;
    const city = data.location.name;
    const temp = data.current.temp_c;
    const pressure = data.current.pressure_mb;
    const humidity = data.current.humidity;
    const wind = data.current.vis_km;
    const wind_dir = data.current.wind_dir;
    const day = data.forecast.forecastday;

    day.map((data) => {
      const newUl = document.createElement("ul");
      newUl.setAttribute("class", "ul__weather");

      const days = data.date;
      const weathers = data.day.condition.icon;
      const temps = data.day.avgtemp_c;
      divBotton.append(newUl);

      const liDay = document.createElement("li");

      liDay.setAttribute("class", "day");
      liDay.innerHTML = days;
      newUl.append(liDay);

      const liWeather = document.createElement("li");
      const imgIcon = document.createElement("img");
      liWeather.setAttribute("class", "weather");
      imgIcon.setAttribute("src", weathers);
      newUl.append(liWeather);
      liWeather.append(imgIcon);

      const liTempDays = document.createElement("li");
      liTempDays.setAttribute("class", "tempDays");
      liTempDays.innerHTML = temps + "°C";
      newUl.append(liTempDays);
    });

    img.setAttribute("src", weatherImg);
    newParagraph.innerHTML = city;
    newSpan.innerHTML = `${temp} °C`;
    liPressure.innerHTML = `${pressure} hPa`;
    liHumidity.innerHTML = `${humidity} %`;
    liWind.innerHTML = `${wind_dir} ${wind} m/s`;
  } catch (err) {
    console.log(err);
  }
};

magnifying.addEventListener("click", weatherApp);

btnAddCities.addEventListener("click", modalOpen);
btnCloseModal.addEventListener("click", modalClose);
