const API_KEY = `604676856a874813ab8132618230105`;
const modalContainer = document.querySelector("#modal__container");
const btnAddCities = document.querySelector(".nav__container__button--style");
const btnCloseModal = document.querySelector(".modal__container--close");
const magnifying = document.querySelector(".modal__container--magnifying");
const currentImg =document.querySelector ('.currentImg')
const cityName = document.querySelector('.cityName')
const currentTemp = document.querySelector('.temp')
const currentPressure = document.querySelector('.currentPressure')
const currentHumidity = document.querySelector('.currentHumidity')
const currentWind = document.querySelector('.currentWind')


const modalOpen = () => {
  modalContainer.classList.remove("visible");
};
const modalClose = () => {
  modalContainer.classList.add("visible");
};

const weatherApp = async () => {
  let cityValue = document.querySelector("#city").value;
  try {
    const result =
      await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityValue}&days=5
`);
    const data = await result.json();
    
    const weatherImg = data.current.condition.icon
    const city = data.location.name;
    const temp = data.current.temp_c;
    const pressure = data.current.pressure_mb
    const humidity = data.current.humidity
    const wind = data.current.vis_km
    const wind_dir = data.current.wind_dir


    currentImg.setAttribute('src', weatherImg);
    cityName.innerHTML = city
    currentTemp.innerHTML = `${temp} °C`
    currentPressure.innerHTML = `${pressure} hPa`
    currentHumidity.innerHTML = `${humidity} %`
    currentWind.innerHTML = `${wind_dir} ${wind} m/s`



    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
magnifying.addEventListener("click", weatherApp);


btnAddCities.addEventListener("click", modalOpen);
btnCloseModal.addEventListener("click", modalClose);
