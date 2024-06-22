import "./DaysForecastWeather.css";
import weatherLogo from "../../assets/img/weather_icons/04n.png";
export default function DaysForecastWeather() {
  return (
    <section className="section forecast" data-5-day-forecast>
      <h2 className="title-2" id="forecast-label">
        5 Days Forecast
      </h2>
      <div className="card card-lg forecast-card">
        <ul>
          <li className="card-item">
            <div className="icon-wrapper">
              <img
                src={weatherLogo}
                alt=""
                width="36"
                height="36"
                className="weather-icon"
                loading="lazy"
              />
              <span className="span">
                <p className="title-2">25&deg;</p>
              </span>
            </div>
            <p className="label-1">25 June</p>
            <p className="label-1">saturday</p>
          </li>
          <li className="card-item">
            <div className="icon-wrapper">
              <img
                src={weatherLogo}
                alt=""
                width="36"
                height="36"
                className="weather-icon"
                loading="lazy"
              />
              <span className="span">
                <p className="title-2">25&deg;</p>
              </span>
            </div>
            <p className="label-1">25 June</p>
            <p className="label-1">saturday</p>
          </li>
          <li className="card-item">
            <div className="icon-wrapper">
              <img
                src={weatherLogo}
                alt=""
                width="36"
                height="36"
                className="weather-icon"
                loading="lazy"
              />
              <span className="span">
                <p className="title-2">25&deg;</p>
              </span>
            </div>
            <p className="label-1">25 June</p>
            <p className="label-1">saturday</p>
          </li>
          <li className="card-item">
            <div className="icon-wrapper">
              <img
                src={weatherLogo}
                alt=""
                width="36"
                height="36"
                className="weather-icon"
                loading="lazy"
              />
              <span className="span">
                <p className="title-2">25&deg;</p>
              </span>
            </div>
            <p className="label-1">25 June</p>
            <p className="label-1">saturday</p>
          </li>
          <li className="card-item">
            <div className="icon-wrapper">
              <img
                src={weatherLogo}
                alt=""
                width="36"
                height="36"
                className="weather-icon"
                loading="lazy"
              />
              <span className="span">
                <p className="title-2">25&deg;</p>
              </span>
            </div>
            <p className="label-1">25 June</p>
            <p className="label-1">saturday</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
