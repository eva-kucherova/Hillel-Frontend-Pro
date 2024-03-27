// --- Task 30 ---

// За допомогою ajax-запиту вивести погоду

// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19

// q=XXX - місто, для якого показати погоду
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість
// speed – швидкість вітру
// deg - напрям у градусах
// icon - значок, де 10d код іконки
// http://openweathermap.org/img/w/10d.png

const weatherDatas = document.getElementById('div');
const xml = new XMLHttpRequest();
const header = document.getElementById('header');
xml.open(
  'GET',
  'https://api.openweathermap.org/data/2.5/weather?q=SOFIA&units=metric&APPID=5d066958a60d315387d9492393935c19'
);

xml.send();

xml.addEventListener('load', (event) => {
  const response = JSON.parse(event.target.response);
  header.innerHTML = `Weather in ${response.name}`;
  weatherDatas.innerHTML = '';
  weatherDatas.innerHTML +=
    `Temperature: ${response.main.temp} °C` +
    '<br>' +
    `Pressure: ${response.main.pressure} hPa` +
    '<br>' +
    `Description: ${response.weather[0].description}` +
    '<br>' +
    `Humidity: ${response.main.humidity} %` +
    '<br>' +
    `Wind speed: ${response.wind.speed} km/h` +
    '<br>' +
    `Wind degree: ${response.wind.deg} °` +
    '<br>';
  const icon = document.createElement('img');
  icon.src = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
  const container = document.querySelector('#div');
  container.append(icon);
});
