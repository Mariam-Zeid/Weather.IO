import "./WeatherLayout.css";
import Header from "../Header/Header";
import CurrentWeather from "../Current Weather/CurrentWeather";
import DaysForecastWeather from "../Days Forecast Weather/DaysForecastWeather";
import TodaysHighlight from "../Today's Highlight/Today'sHighlight";
import HourlyForecastWeather from "../Hourly Forecast Weather/HourlyForecastWeather";
import Footer from "../Footer/Footer";
export default function WeatherLayout() {
  return (
    <>
      <Header />
      <main
        id="main"
        className="w-full max-w-[160rem] mx-auto md:px-12 md:py-12 p-7"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-x-16 md:gap-x-6 gap-y-10">
          <div className="md:col-span-1 flex flex-col gap-10">
            <CurrentWeather />
            <DaysForecastWeather />
          </div>
          <div className="md:col-span-2 flex flex-col gap-10">
            <TodaysHighlight />
            <HourlyForecastWeather />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
