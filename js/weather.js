const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "4b655f37da6fa39a12fea9b22c0cc694";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // lang=kr 추가하여 한국어 응답을 받음, units=metric으로 섭씨 온도 적용
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      // data.weather[0].description은 한국어 날씨 설명을 반환합니다.
      weather.innerText = `${data.weather[0].description} / ${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("위치를 찾을 수 없어요. 당신을 위한 날씨예보도 없습니다~");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

/**

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "4b655f37da6fa39a12fea9b22c0cc694";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
*/
