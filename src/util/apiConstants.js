const API_KEY = "4163e7bac36e7b88621b284df0a4479c";

const MAIN_URL = "https://api.openweathermap.org";

export const API_URLS = {
  currentWeather(lat, lon) {
    return `${MAIN_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  },
  forecast(lat, lon) {
    return `${MAIN_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  },
  airPollution(lat, lon) {
    return `${MAIN_URL}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  },
  reverseGeo(lat, lon) {
    return `${MAIN_URL}/geo/1.0/reverse?lat=${lat}lon=&${lon}&limit=5&appid=${API_KEY}`;
  },
  /**
   * @param {string} query search query e.g. :"london" , "New Yourk"
   */
  geo(query) {
    return `${MAIN_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`;
  },
};

export const AQI_TEXT = {
  1: {
    level: "Good",
    message:
      "Air quality is considered satisfactory, and air pollution poses little or no risk",
  },
  2: {
    level: "Fair",
    message:
      "Air quality is acceptable; however, for some pollutants, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution",
  },
  3: {
    level: "Moderate",
    message:
      "Members of sensitive groups may experience health affect. the general public is not likely to be affected.",
  },
  4: {
    level: "Poor",
    message:
      "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
  },
  5: {
    level: "Very Poor",
    message:
      "Health warnings of emergency conditions. the entire population is more likely to be affected.",
  },
};
