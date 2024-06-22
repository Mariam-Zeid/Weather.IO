import "./CurrentWeather.css";
import weatherLogo from "../../assets/img/weather_icons/04d.png";
export default function CurrentWeather() {
  return (
    <section
      className="section current-weather"
      aria-label="current weather"
      data-current-weather
    >
      <div className="card card-lg current-weather-card">
        <h2 className="title-2">Now</h2>
        <div className="wrapper">
          <p className="heading">
            25&deg;<sup>c</sup>
          </p>
          <img src={weatherLogo} alt="" className="weather-icon" />
        </div>
        <p className="body-3">Sunny</p>
        <ul className="meta-list">
          <li className="meta-item">
            <span className="m-icon">calendar_today</span>
            <p className="title-3 meta-text">25 June</p>
          </li>
          <li className="meta-item">
            <span className="m-icon">location_on</span>
            <p className="title-3 meta-text">Cairo, Egypt</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
