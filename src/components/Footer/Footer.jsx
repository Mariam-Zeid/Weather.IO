import openweatherLogo from "../../assets/img/openweather.png";
export default function Footer() {
  return (
    <footer className="footer flex justify-center items-center gap-3 my-12">
      <p>powerd by</p>
      <a href="https://openweathermap.org/api" className="openWeather-link">
        <img
          src={openweatherLogo}
          alt="OpenWeather logo"
          className="openWeather-logo"
        />
      </a>
    </footer>
  );
}
