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
