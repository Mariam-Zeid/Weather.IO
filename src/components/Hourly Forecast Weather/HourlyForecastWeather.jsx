import "./HourlyForecastWeather.css";
import weatherLogo from "../../assets/img/weather_icons/04d.png";
import directionLogo from "../../assets/img/weather_icons/direction.png";
import { getImageURL } from "../../util/imageUtil";
import { timeFotmatter } from "../../util/DateAndTimeUtil";
export default function HourlyForecastWeather({ data }) {
  if (!data || !data.list || !Array.isArray(data.list)) {
    return null; // or handle loading state/error state as needed
  }

  // Assuming data.list contains hourly forecast data
  const hourlyForecasts = data.list.slice(0, 8);

  console.log(hourlyForecasts);

  const mps_to_kmh = (mps) => {
    const mph = mps * 3600;
    const kmh = parseInt(mph / 1000);
    return kmh;
  };

  return (
    <section className="section hourly-forecast" aria-label="hourly forecast">
      <h2 className="title-2">Today at</h2>
      <div className="slider-container">
        <ul className="slider-list">
          {hourlyForecasts.map((hour, index) => (
            <li key={index} className="slider-item">
              <div className="card card-sm slider-card">
                <p className="body-3">{timeFotmatter(hour.dt)}</p>
                <img
                  src={getImageURL(hour.weather[0].icon)}
                  alt={hour.weather[0].description}
                  className="weather-icon"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <p className="body-3">{parseInt(hour.main.temp)}&deg;</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="slider-list">
          {hourlyForecasts.map((hour, index) => (
            <li key={index} className="slider-item">
              <div className="card card-sm slider-card">
                <p className="body-3">{timeFotmatter(hour.dt)}</p>
                <img
                  src={directionLogo}
                  alt={hour.weather[0].description}
                  className="weather-icon"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <p className="body-3">{mps_to_kmh(hour.wind.speed)} km/h</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
