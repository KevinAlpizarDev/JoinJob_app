import L from "leaflet";
import iconUrl from "../../assets/icon.svg";
export const IconLocation = L.icon({
  iconUrl: iconUrl,
  iconRetinaUrl: iconUrl, // Usamos el mismo ícono para retina
  iconAnchor: [16, 32], // Punto del ícono que estará en la posición (centro abajo)
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35], // Tamaño del ícono
  className: "leaflet-venue-icon",
});
