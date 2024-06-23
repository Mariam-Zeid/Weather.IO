import axios from "axios";
import { useReducer } from "react";

// Initial state for weather data
const initialState = {
  isSearching: false,
  isFetching: true,
  weatherData: {},
  error: null,
};

// Actions for reducer
const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

const weatherReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        ...state,
        isFetching: true,
        isSearching: true,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isSearching: false,
        weatherData: action.payload,
        error: null,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        isSearching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default function useFetchWeather() {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const fetchWeatherData = async (api_url) => {
    dispatch({ type: ACTIONS.FETCH_START });
    try {
      const response = await axios.get(api_url);
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_ERROR, payload: error });
    }
  };

  return { ...state, fetchWeatherData };
}
