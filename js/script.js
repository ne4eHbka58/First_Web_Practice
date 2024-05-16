let whereFrom = document.querySelector("#test-0-fd");
let whereTo = document.querySelector("#test-0-fa");
let when = document.querySelector("#test-0-fdt");
let back = document.querySelector("#test-0-fat");
let count = document.querySelector("#test-0-fnp");
const searchWarn = document.querySelector("#searchWarn");
const container = document.querySelector("#log-container");
searchButton.addEventListener("click", proverka);
function proverka() {
  // Проверка на заполнение полей в поиске
  if (
    whereFrom.value == "" ||
    whereTo.value == "" ||
    when.value == "" ||
    back.value == "" ||
    count.value == ""
  ) {
    searchWarn.className = "warning";
    searchWarn.textContent = "Вы заполнили не все поля";
  } else {
    searchWarn.classList.remove("warning");
    searchWarn.textContent = "";
    window.location.href = "./search.html";
  }
}

const slider = document.querySelector(".slider");
const slides = Array.from(slider.children);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length - 1) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  clearInterval(intervalId); // сбросить предыдущий интервал
  intervalId = setInterval(nextSlide, 4000);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 2;
  }
  showSlide(currentSlide);
  clearInterval(intervalId); // сбросить предыдущий интервал
  intervalId = setInterval(nextSlide, 4000);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showSlide(currentSlide);
let intervalId = setInterval(nextSlide, 4000); //  Автоматическое переключение слайдов
