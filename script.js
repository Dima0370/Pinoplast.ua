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

//Скрол анімація
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

