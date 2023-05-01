const modalContainer = document.querySelector("#modal__container");
const btnAddCities = document.querySelector(".nav__container__button--style");
const btnCloseModal = document.querySelector(".modal__container--close");
const magnifying = document.querySelector(".modal__container--magnifying");

const modalOpen = () => {
  modalContainer.classList.remove("visible");
};
const modalClose = () => {
  modalContainer.classList.add("visible");
};

btnAddCities.addEventListener("click", modalOpen);
btnCloseModal.addEventListener("click", modalClose);
