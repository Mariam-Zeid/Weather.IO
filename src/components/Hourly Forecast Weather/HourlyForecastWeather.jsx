import "./HourlyForecastWeather.css";
import weatherLogo from "../../assets/img/weather_icons/04d.png";
import directionLogo from "../../assets/img/weather_icons/direction.png";
export default function HourlyForecastWeather() {
  return (
    <section
      className="section hourly-forecast"
      aria-label="hourly forecast"
      data-hourly-forecast
    >
      <h2 className="title-2">Today at</h2>
      <div className="slider-container">
        <ul className="slider-list" data-temp>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={weatherLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">25&deg;</p>
            </div>
          </li>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={weatherLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">25&deg;</p>
            </div>
          </li>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={weatherLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">25&deg;</p>
            </div>
          </li>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={weatherLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">25&deg;</p>
            </div>
          </li>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={weatherLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">25&deg;</p>
            </div>
          </li>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={weatherLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">25&deg;</p>
            </div>
          </li>
        </ul>

        <ul className="slider-list" data-wind>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={directionLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">12 km/h</p>
            </div>
          </li>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={directionLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">12 km/h</p>
            </div>
          </li>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={directionLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">12 km/h</p>
            </div>
          </li>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={directionLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">12 km/h</p>
            </div>
          </li>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={directionLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">12 km/h</p>
            </div>
          </li>
          <li className="slider-item">
            <div className="card card-sm slider-card">
              <p className="body-3">03:00 PM</p>
              <img
                src={directionLogo}
                alt=""
                className="weather-icon"
                width="48"
                height="48"
                loading="lazy"
              />
              <p className="body-3">12 km/h</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
