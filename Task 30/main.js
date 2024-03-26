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

xml.open(
  'GET',
  'http://api.openweathermap.org/data/2.5/weather?q=SOFIA&units=metric&APPID=5d066958a60d315387d9492393935c19'
);

xml.send();

xml.addEventListener('load', (event) => {
  const response = JSON.parse(event.target.response);

  weatherDatas.innerHTML = '';
  weatherDatas.innerHTML += `Temperature: ${response.main.temp} °C` + '<br>';
  weatherDatas.innerHTML += `Pressure: ${response.main.pressure} hPa` + '<br>';
  weatherDatas.innerHTML +=
    `Description: ${response.weather[0].description}` + '<br>';
  +'<br>';
  weatherDatas.innerHTML += `Humidity: ${response.main.humidity} %` + '<br>';
  weatherDatas.innerHTML += `Wind speed: ${response.wind.speed} km/h` + '<br>';
  weatherDatas.innerHTML += `Wind degree: ${response.wind.deg} °` + '<br>';
  const icon = document.createElement('img');
  icon.src = 'http://openweathermap.org/img/w/01d.png';
  const container = document.querySelector('#div');
  container.append(icon);
});
