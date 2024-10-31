// import React from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import Markers from "./Markers";

// export const MapView = () => {
//   return (
//     <>
//       <MapContainer
//         center={{ lat: 9.97635, lng: -84.835612 }}
//         zoom={13}
//         style={{ height: "400px", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Markers />
//       </MapContainer>
//       <h1>Mapa Satelital</h1>
//     </>
//   );
// };

// import React from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import Markers from "./Markers";

// const MapView = () => {
//   return (
//     <>
//       <MapContainer
//         center={{ lat: 9.97635, lng: -84.835612 }}
//         zoom={13}
//         style={{ height: "400px", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Markers />
//       </MapContainer>
//       <h1>Mapa Satelital</h1>
//     </>
//   );
// };

// export default MapView;
// MapView.js
// import React from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import Markers from "./Markers";

// const MapView = ({ latitude, longitude }) => {
//   return (
//     <>
//       <MapContainer
//         center={{ lat: latitude, lng: longitude }}
//         zoom={13}
//         style={{ height: "400px", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Markers latitude={latitude} longitude={longitude} />
//       </MapContainer>
//       <h1>Mapa Satelital</h1>
//     </>
//   );
// };

// export default MapView;
// MapView.js
import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";

const MapView = ({ latitude, longitude }) => {
  const position = { lat: latitude, lng: longitude };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers latitude={latitude} longitude={longitude} />
    </MapContainer>
  );
};

const ModalWithMap = ({ isOpen, onClose, latitude, longitude }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ease-in-out duration-500 opacity-100 animate-fadeIn">
      <div className="relative bg-white p-6 w-11/12 max-w-lg rounded-2xl shadow-lg transform transition-all ease-[cubic-bezier(0.25,0.1,0.25,1.0)] duration-500 scale-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
        >
          X
        </button>
        <h2 className="text-center font-semibold text-lg mb-4">Mapa Satelital</h2>
        <MapView latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-500 ease-in-out"
      >
        Ver Mapa
      </button>
      <ModalWithMap
        isOpen={isModalOpen}
        onClose={closeModal}
        latitude={51.505}   // Coordenadas de ejemplo
        longitude={-0.09}   // Coordenadas de ejemplo
      />
    </div>
  );
};

export default MapView;
