const getPosition = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
      alert("Could not get your position");
    });
  }
};

var map = L.map("map").setView([49.86365979573527, 24.040477857333414], 15);
var marker = L.marker([49.86365979573527, 24.040477857333414]).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

mySlider.oninput = showSliderValue;

function showSliderValue() {
  result.innerText = this.value;
}
/*document.addEventListener('DOMContentLoaded', function () {
  // инициализация слайдера
  var slider = new SimpleAdaptiveSlider('.slider', {
    autoplay: true,
    interval: 10000,
  });
});*/
// Отримуємо елемент хідеру
const header = document.querySelector('header');

// Функція для закріплення хідеру
function fixHeader() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

// Слідкуємо за прокруткою та викликаємо функцію закріплення хідеру
window.addEventListener('scroll', fixHeader);
