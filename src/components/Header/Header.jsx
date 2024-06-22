import logo from "../../assets/img/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header z-50">
      <div className="w-full max-w-[160rem] mx-auto md:px-12 md:py-12 p-7 flex justify-between items-center">
        <a href="#" className="logo w-[15rem] md:w-[20rem]">
          <img src={logo} alt="weatherio logo" className="weatherio-logo" />
        </a>
        <div className={`search-view`}>
          <div className="search-wrapper">
            <input
              type="search"
              name="search"
              className={`search-field md:px-24 md:py-6`}
              placeholder="Search for city..."
              autoComplete="off"
            />
            <span className="m-icon leading-icon">search</span>
            <button className="icon-btn leading-icon has-state">
              <span className="m-icon">arrow_back</span>
            </button>
          </div>
          <div className="search-result active">
            <ul className="view-list">
              <li className="view-item">
                <span className="m-icon">location_on</span>
                <div>
                  <p className="item-title">London</p>
                  <p className="label-2 item-subtitle">united kingdom</p>
                </div>
                <a href="#" className="item-link has-state"></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-actions flex items-center gap-6">
          <button className="icon-btn has-state">
            <span className="m-icon">search</span>
          </button>
          <a href="#" className="btn-primary has-state">
            <span className="m-icon">my_location</span>
            <span className="span">Current Location</span>
          </a>
        </div>
      </div>
    </header>
  );
}
