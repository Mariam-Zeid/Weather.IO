import "./TodaysHighlight.css";
export default function TodaysHighlight() {
  return (
    <section className="section highlights">
      <div className="card card-lg">
        <h2 className="title-2 font-semibold" id="highlights-label">
          Todays Highlights
        </h2>
        <div className="highlight-list">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            {/* 1. Air Quality Index */}
            <div className="card card-sm highlight-card one">
              <h3 className="title-3">Air Quality Index</h3>
              <div className="wrapper flex gap-10 items-center justify-around">
                <span className="m-icon">air</span>
                <ul className="card-list grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4">
                  <li className="card-item flex md:flex-col-reverse items-center gap-2">
                    <p className="title-1">21.5</p>
                    <p className="label-1">
                      PM<sub>2.5</sub>
                    </p>
                  </li>
                  <li className="card-item flex md:flex-col-reverse items-center gap-2">
                    <p className="title-1">12.5</p>
                    <p className="label-1">
                      SO<sub>2</sub>
                    </p>
                  </li>
                  <li className="card-item flex md:flex-col-reverse items-center gap-2">
                    <p className="title-1">5</p>
                    <p className="label-1">
                      NO<sub>2</sub>
                    </p>
                  </li>
                  <li className="card-item flex md:flex-col-reverse items-center gap-2">
                    <p className="title-1">30</p>
                    <p className="label-1">
                      O<sub>3</sub>
                    </p>
                  </li>
                </ul>
              </div>
              <span className={`badge aqi-1 label-1`} title="aqi 4">
                good
              </span>
            </div>
            {/* 2. Sunrise & Sunset */}
            <div className="card card-sm highlight-card two">
              <h3 className="title-3">Sunrise & Sunset</h3>
              <div className="card-list flex justify-between">
                <div className="card-item flex items-center gap-4 md:gap-5">
                  <span className="m-icon">clear_day</span>
                  <div>
                    <p className="label-1">Sunrise</p>
                    <p className="title-1">4:00am</p>
                  </div>
                </div>
                <div className="card-item flex items-center gap-4 md:gap-5">
                  <span className="m-icon">clear_night</span>
                  <div>
                    <p className="label-1">Sunset</p>
                    <p className="title-1">5:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-8">
            {/* 3. Humidity */}
            <div className="card card-sm highlight-card">
              <h3 className="title-3">Humitidy</h3>
              <div className="wrapper flex gap-6 justify-between items-center">
                <span className="m-icon">humidity_percentage</span>
                <p className="title-1">
                  35
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
                  20
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
                  10
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
                  25&deg;<sup>c</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
