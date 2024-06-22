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

export default function WeatherLayout() {
  const { latitude, longitude } = useContext(PositionContext);

  // Current Weather API
  const {
    isFetching: isFetchingCurrentWeather,
    fetchWeatherData: fetchCurrentWeather,
    weatherData: currentWeatherData,
    error: weatherError,
  } = useFetchWeather({});

  useEffect(() => {
    const fetchAllData = async () => {
      if (latitude !== null && longitude !== null) {
        await fetchCurrentWeather(API_URLS.currentWeather(latitude, longitude));
      }
    };
    fetchAllData();
  }, [latitude, longitude]);

  return (
    <>
      {isFetchingCurrentWeather ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main
            id="main"
            className="w-full max-w-[160rem] mx-auto md:px-12 md:py-12 p-7"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-x-16 md:gap-x-6 gap-y-10">
              <div className="md:col-span-1 flex flex-col gap-10">
                <CurrentWeather
                  data={currentWeatherData}
                  loading={isFetchingCurrentWeather}
                  error={weatherError}
                />
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
      )}
    </>
  );
}
