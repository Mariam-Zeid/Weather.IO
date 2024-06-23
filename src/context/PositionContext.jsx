import { createContext, useEffect, useState } from "react";

export const PositionContext = createContext({
  latitude: null,
  longitude: null,
  iscurrentLocation: true,
  isGeolocationAvailable: false,
  setNewPosition: () => {},
  setCurrentLocation: () => {},
});

export function PositionContextProvider({ children }) {
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
  });
  const [iscurrentLocation, setCurrentLocation] = useState(true);
  const [isGeolocationAvailable, setGeolocationAvailable] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setGeolocationAvailable(true);
      });
    } else {
      console.log("Geolocation is not available in your browser.");
      setGeolocationAvailable(false);
    }
  }, []);

  const ctxValue = {
    latitude: position.latitude,
    longitude: position.longitude,
    isGeolocationAvailable,
    iscurrentLocation,
    setNewPosition: setPosition,
    setCurrentLocation,
  };
  return (
    <PositionContext.Provider value={ctxValue}>
      {children}
    </PositionContext.Provider>
  );
}
