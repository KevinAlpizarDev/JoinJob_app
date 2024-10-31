// import React from "react";
// import { Marker } from "react-leaflet";
// import { IconLocation } from "./IconLocation"; // Asegúrate de importar el ícono correctamente

// const Markers = () => {
//   const position = { lat: 9.98105549, lng: -84.81466933 }; // Coordenadas del marcador

//   return <Marker position={position} icon={IconLocation} />;
// };

// export default Markers;
// Markers.js
import React from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";

const Markers = ({ latitude, longitude }) => {
  const position = { lat: latitude, lng: longitude };

  return <Marker position={position} icon={IconLocation} />;
};

export default Markers;
