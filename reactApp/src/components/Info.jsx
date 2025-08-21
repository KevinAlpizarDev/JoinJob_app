import { useState } from "react";
import MapView from "./map/MapView";
import LocationIcon from "../assets/location.svg"; // Ajusta la ruta si es necesario

export default function Info({ courseId, latitude, longitude }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    console.log("ID del curso:", courseId);
    console.log("Latitud:", latitude);
    console.log("Longitud:", longitude);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="p-4 rounded-extra-rounded  transform transition-transform duration-200 scale-x-150  scale-y-150  hover:-scale-x-100  " // Agregado aquí
        aria-label="Información"
      >
        {/* Usar el SVG como contenido del botón */}
        <img
          src={LocationIcon}
          alt="Ubicación"
          className="relative rounded-extra-rounded  z-10 w-6 h-6"
        />
      </button>

      {isModalOpen && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center">
          {/* Fondo oscuro */}
          <div
            className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative w-[80%] h-[100%] max-w-6xl max-h-[700px] flex flex-col items-center justify-center">
            <MapView latitude={latitude} longitude={longitude} />
            <div></div>
            <button
              onClick={closeModal}
              className="rounded-b-extra-rounded w-full   right-8 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
