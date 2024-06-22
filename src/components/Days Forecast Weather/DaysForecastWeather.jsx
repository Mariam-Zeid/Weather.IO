import "./DaysForecastWeather.css";
import { dateFormatter, filterDaysByTime } from "../../util/DateAndTimeUtil";
import { getImageURL } from "../../util/imageUtil";
export default function DaysForecastWeather({ data }) {
  return (
    <section className="section forecast" data-5-day-forecast>
      <h2 className="title-2" id="forecast-label">
        5 Days Forecast
      </h2>
      <div className="card card-lg forecast-card">
        <ul>
          {filterDaysByTime(data.list).map((day, indx) => (
            <li className="card-item" key={indx}>
              <div className="icon-wrapper">
                <img
                  src={getImageURL(day.weather[0].icon)}
                  alt=""
                  width="36"
                  height="36"
                  className="weather-icon"
                  loading="lazy"
                />
                <span className="span">
                  <p className="title-2">{parseInt(day.main.temp_max)}&deg;</p>
                </span>
              </div>
              <p className="label-1">{dateFormatter(day.dt_txt)}</p>
              <p className="label-1">{dateFormatter(day.dt_txt, "dddd")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
