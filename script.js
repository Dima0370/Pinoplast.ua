// Map
const getPosition = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
      alert("Could not get your position");
    });
  }
};

var map = L.map("map").setView([49.86360663663534, 24.040539034816224], 15);
var marker = L.marker([49.86360663663534, 24.040539034816224]).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker([49.86360663663534, 24.040539034816224]).addTo(map).bindPopup("Вулиця Липинського, 54а <br> Пн-Сб: 08:00-20:00").openPopup();

//Скрол анімація
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}

// FOOTER FAQ
const faq = document.querySelector(".faq");
faq.addEventListener("click", event => {
  const question = event.target.closest(".faq__question");
  if (!question) return;
  const answer = question.nextElementSibling;
  // hide previously opened answer and show the clicked answer
  const currentAnswer = faq.querySelector('.faq__answer[aria-hidden="false"]');
  if (currentAnswer === answer) {
    // close the already open answer
    answer.setAttribute("aria-hidden", "true");
    answer.parentNode.classList.remove("faq__item--expanded");
    question.setAttribute("aria-expanded", "false");
  } else {
    // hide previously open answer and show the clicked answer
    if (currentAnswer) {
      currentAnswer.setAttribute("aria-hidden", "true");
      currentAnswer.parentNode.classList.remove("faq__item--expanded");
      currentAnswer.previousElementSibling.setAttribute("aria-expanded", "false");
    }
    answer.setAttribute("aria-hidden", "false");
    answer.parentNode.classList.add("faq__item--expanded");
    question.setAttribute("aria-expanded", "true");
  }
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// MODAL_WINDOW
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

/*Карусель*/
document.addEventListener("DOMContentLoaded", function (event) {
  let slides = document.getElementsByClassName("slide");
  let currentSlide = 0;
  let prevButton = document.querySelector(".prev-slide");
  let nextButton = document.querySelector(".next-slide");

  function showSlide(slideIndex) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("show");
    }
    slides[slideIndex].classList.add("show");
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }

  showSlide(currentSlide);

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500);
}
