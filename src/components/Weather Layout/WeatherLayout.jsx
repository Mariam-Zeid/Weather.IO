import "./WeatherLayout.css";
import Header from "../Header/Header";
import CurrentWeather from "../Current Weather/CurrentWeather";
import DaysForecastWeather from "../Days Forecast Weather/DaysForecastWeather";
import TodaysHighlight from "../Today's Highlight/Today'sHighlight";
import HourlyForecastWeather from "../Hourly Forecast Weather/HourlyForecastWeather";
import Footer from "../Footer/Footer";
import { PositionContext } from "../../context/PositionContext";
import { useContext, useEffect } from "react";
import { API_URLS } from "../../util/apiConstants";
import useFetchWeather from "../../hooks/useFetchWeather";
import Loading from "../Loading Screen/Loading";
import Error from "../Error Screen/Error";

export default function WeatherLayout() {
  const { latitude, longitude, isGeolocationAvailable } =
    useContext(PositionContext);

  // Current Weather API
  const {
    isFetching: isFetchingCurrentWeather,
    fetchWeatherData: fetchCurrentWeather,
    weatherData: currentWeatherData,
    error: currentWeatherError,
  } = useFetchWeather();

  // Forecast Weather API
  const {
    isFetching: isFetchingForecastWeather,
    fetchWeatherData: fetchForecastWeather,
    weatherData: forecastWeatherData,
    error: forecastWeatherError,
  } = useFetchWeather();

  // AirPollution API
  const {
    isFetching: isFetchingAirPollution,
    fetchWeatherData: fetchAirPollution,
    weatherData: airPollutionData,
    error: airPollutionError,
  } = useFetchWeather();

  useEffect(() => {
    const fetchAllData = async () => {
      if (isGeolocationAvailable) {
        await fetchCurrentWeather(API_URLS.currentWeather(latitude, longitude));
        await fetchForecastWeather(API_URLS.forecast(latitude, longitude));
        await fetchAirPollution(API_URLS.airPollution(latitude, longitude));
      }
    };
    fetchAllData();
  }, [latitude, longitude]);

  if (
    currentWeatherError ||
    forecastWeatherError ||
    airPollutionError ||
    !isGeolocationAvailable
  ) {
    return <Error />;
  }

  if (
    isFetchingCurrentWeather ||
    isFetchingForecastWeather ||
    isFetchingAirPollution
  ) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <main
        id="main"
        className="w-full max-w-[160rem] mx-auto md:px-12 md:py-12 p-7"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-x-16 md:gap-x-6 gap-y-10">
          <div className="md:col-span-1 flex flex-col gap-10">
            <CurrentWeather data={currentWeatherData} />
            <DaysForecastWeather data={forecastWeatherData} />
          </div>
          <div className="md:col-span-2 flex flex-col gap-10">
            <TodaysHighlight
              qualityData={airPollutionData}
              currentWeatherData={currentWeatherData}
            />
            <HourlyForecastWeather data={forecastWeatherData} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
