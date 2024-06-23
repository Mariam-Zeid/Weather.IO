import { timeFotmatter } from "../../util/DateAndTimeUtil";
import { AQI_TEXT } from "../../util/apiConstants";
import "./TodaysHighlight.css";
export default function TodaysHighlight({ qualityData, currentWeatherData }) {
  return (
    <section className="section highlights">
      <div className="card card-lg">
        <h2 className="title-2 font-semibold" id="highlights-label">
          Todays Highlights
        </h2>
        <div className="highlight-list">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            {/* 1. Air Quality Index */}
            {qualityData.list.map((quality, index) => {
              return (
                <div key={index} className="card card-sm highlight-card one">
                  <h3 className="title-3">Air Quality Index</h3>
                  <div className="wrapper flex gap-10 items-center justify-around">
                    <span className="m-icon">air</span>
                    <ul className="card-list grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4">
                      <li className="card-item flex md:flex-col-reverse items-center gap-2">
                        <p className="title-1">
                          {quality.components.pm2_5.toPrecision(3)}
                        </p>
                        <p className="label-1">
                          PM<sub>2.5</sub>
                        </p>
                      </li>
                      <li className="card-item flex md:flex-col-reverse items-center gap-2">
                        <p className="title-1">
                          {quality.components.so2.toPrecision(3)}
                        </p>
                        <p className="label-1">
                          SO<sub>2</sub>
                        </p>
                      </li>
                      <li className="card-item flex md:flex-col-reverse items-center gap-2">
                        <p className="title-1">
                          {quality.components.no2.toPrecision(3)}
                        </p>
                        <p className="label-1">
                          NO<sub>2</sub>
                        </p>
                      </li>
                      <li className="card-item flex md:flex-col-reverse items-center gap-2">
                        <p className="title-1">
                          {quality.components.o3.toPrecision(3)}
                        </p>
                        <p className="label-1">
                          O<sub>3</sub>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <span
                    className={`badge aqi-${quality.main.aqi} label-1`}
                    title={AQI_TEXT[quality.main.aqi].message}
                  >
                    {AQI_TEXT[quality.main.aqi].level}
                  </span>
                </div>
              );
            })}
            {/* 2. Sunrise & Sunset */}
            {currentWeatherData.weather ? (
              <div className="card card-sm highlight-card two">
                <h3 className="title-3">Sunrise & Sunset</h3>
                <div className="card-list flex justify-between lg:justify-start lg:gap-12">
                  <div className="card-item flex items-center gap- md:gap-8">
                    <span className="m-icon">clear_day</span>
                    <div>
                      <p className="label-1">Sunrise</p>
                      <p className="title-1">
                        {timeFotmatter(currentWeatherData.sys.sunrise)}
                      </p>
                    </div>
                  </div>
                  <div className="card-item flex items-center gap- md:gap-8">
                    <span className="m-icon">clear_night</span>
                    <div>
                      <p className="label-1">Sunset</p>
                      <p className="title-1">
                        {timeFotmatter(currentWeatherData.sys.sunset)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          {currentWeatherData.weather ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-8">
              {/* 3. Humidity */}
              <div className="card card-sm highlight-card">
                <h3 className="title-3">Humitidy</h3>
                <div className="wrapper flex gap-6 justify-between items-center">
                  <span className="m-icon">humidity_percentage</span>
                  <p className="title-1">
                    {currentWeatherData.main.humidity}
                    <sub>%</sub>
                  </p>
                </div>
              </div>

              {/* 4. Pressure */}
              <div className="card card-sm highlight-card">
                <h3 className="title-3">Pressure</h3>
                <div className="wrapper flex gap-6 justify-between items-center">
                  <span className="m-icon">airwave</span>
                  <p className="title-1">
                    {currentWeatherData.main.pressure}
                    <sub>hPa</sub>
                  </p>
                </div>
              </div>

              {/* 5. Visibility */}
              <div className="card card-sm highlight-card">
                <h3 className="title-3">Visibility</h3>
                <div className="wrapper flex gap-6 justify-between items-center">
                  <span className="m-icon">visibility</span>
                  <p className="title-1">
                    {currentWeatherData.visibility / 1000}
                    <sub>km</sub>
                  </p>
                </div>
              </div>

              {/* 6. Feels Like */}
              <div className="card card-sm highlight-card">
                <h3 className="title-3">Feels Like</h3>
                <div className="wrapper flex gap-6 justify-between items-center">
                  <span className="m-icon">thermostat</span>
                  <p className="title-1">
                    {parseInt(currentWeatherData.main.feels_like)}&deg;
                    <sup>c</sup>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
