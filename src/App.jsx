import WeatherLayout from "./components/Weather Layout/WeatherLayout";
import { PositionContextProvider } from "./context/PositionContext";

function App() {
  return (
    <PositionContextProvider>
      <WeatherLayout />
    </PositionContextProvider>
  );
}

export default App;
