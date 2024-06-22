import { createContext, useEffect, useState } from "react";

export const PositionContext = createContext({
  latitude: null,
  longitude: null,
});

export function PositionContextProvider({ children }) {
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  const ctxValue = {
    latitude: position.latitude,
    longitude: position.longitude,
  };
  return (
    <PositionContext.Provider value={ctxValue}>
      {children}
    </PositionContext.Provider>
  );
}
