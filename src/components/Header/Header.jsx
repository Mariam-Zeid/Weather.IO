import { useContext, useRef, useState } from "react";
import logo from "../../assets/img/logo.png";
import "./Header.css";
import useFetchWeather from "../../hooks/useFetchWeather";
import { API_URLS } from "../../util/apiConstants";
import { PositionContext } from "../../context/PositionContext";

export default function Header() {
  const { setNewPosition, iscurrentLocation, setCurrentLocation } =
    useContext(PositionContext);

  const searchInputRef = useRef(null);

  const [searchToggle, setSearchToggle] = useState(false);
  const [, setSearchQuery] = useState(""); // Initial search query

  const { weatherData, fetchWeatherData, isFetching } = useFetchWeather();

  const handleSearchToggle = () => {
    setSearchToggle((prevState) => !prevState);
  };

  const handleInputChange = () => {
    const query = searchInputRef.current.value;
    setSearchQuery(query);
    if (query) {
      fetchWeatherData(API_URLS.geo(query));
    }
  };

  const handleSearchClick = (location) => {
    setNewPosition({
      latitude: location.lat,
      longitude: location.lon,
    });
    setCurrentLocation(false);
  };

  const handleLocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setNewPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setCurrentLocation(true);
      });
    }
  };

  return (
    <header className="header z-50">
      <div className="w-full max-w-[160rem] mx-auto md:px-12 md:py-12 p-7 flex justify-between items-center">
        <a href="#" className="logo w-[15rem] md:w-[20rem]">
          <img src={logo} alt="weatherio logo" className="weatherio-logo" />
        </a>
        <div className={`search-view ${searchToggle ? "active" : ""}`}>
          <div className="search-wrapper">
            <input
              type="search"
              name="search"
              className={`search-field md:px-24 md:py-6 ${
                isFetching && "searching"
              }`}
              placeholder="Search for city..."
              autoComplete="off"
              ref={searchInputRef}
              onChange={handleInputChange}
            />
            <span className="m-icon leading-icon">search</span>
            <button
              className="icon-btn leading-icon has-state"
              onClick={handleSearchToggle}
            >
              <span className="m-icon">arrow_back</span>
            </button>
          </div>
          <div className="search-result active">
            <ul className="view-list">
              {!isFetching && weatherData.length === 0 && (
                <li className="view-item">No results found 💩</li>
              )}
              {weatherData.length > 0 &&
                weatherData.map((location, index) => (
                  <li key={index} className="view-item">
                    <span className="m-icon">location_on</span>
                    <div>
                      <p className="item-title">{location.name}</p>
                      <p className="label-2 item-subtitle">
                        {location.state || ""} {location.country}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="item-link has-state"
                      onClick={() => handleSearchClick(location)}
                    ></a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="header-actions flex items-center gap-6">
          <button className="icon-btn has-state" onClick={handleSearchToggle}>
            <span className="m-icon">search</span>
          </button>
          <button
            className="btn-primary has-state"
            onClick={handleLocationClick}
            disabled={iscurrentLocation}
          >
            <span className="m-icon">my_location</span>
            <span className="span">Current Location</span>
          </button>
        </div>
      </div>
    </header>
  );
}
