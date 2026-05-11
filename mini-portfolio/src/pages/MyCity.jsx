import { useEffect, useState } from "react";

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <section>
      <h2>Моє місто</h2>

      <p>
        Київ — столиця України та одне з найстаріших міст Європи.
      </p>

      <h3>Поточна погода</h3>

      {weather ? (
        <div className="card">
          <p>Місто: Київ</p>
          <p>Країна: Україна</p>
          <p>Температура: {weather.current_weather.temperature}°C</p>
          <p>Координати: {weather.latitude}, {weather.longitude}</p>
          <p>Вітер: {weather.current_weather.windspeed} км/год</p>
        </div>
      ) : (
        <p>Завантаження...</p>
      )}
    </section>
  );
}

export default MyCity;