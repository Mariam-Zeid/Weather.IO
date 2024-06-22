import "./CurrentWeather.css";
import { getImageURL } from "../../util/imageUtil";
import { formatNowDate } from "../../util/DateAndTimeUtil";
export default function CurrentWeather({ data }) {
  return (
    <section
      className="section current-weather"
      aria-label="current weather"
      data-current-weather
    >
      {data.main ? (
        <div className="card card-lg current-weather-card">
          <h2 className="title-2">Now</h2>
          <div className="wrapper">
            <p className="heading">
              {Math.round(data.main.temp)}&deg;<sup>c</sup>
            </p>
            <img
              src={getImageURL(data.weather[0].icon)}
              alt={data.weather[0].description}
              className="weather-icon"
            />
          </div>
          <p className="body-3">{data.weather[0].description}</p>
          <ul className="meta-list">
            <li className="meta-item">
              <span className="m-icon">calendar_today</span>
              <p className="title-3 meta-text">{formatNowDate()}</p>
            </li>
            <li className="meta-item">
              <span className="m-icon">location_on</span>
              <p className="title-3 meta-text">
                {data.name.split(" ")[0]}, {data.sys.country}
              </p>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
