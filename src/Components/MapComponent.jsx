import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
const MapComponent = () => {
  const position = [12.888768, 77.597447];

  return (
    <div
      className="w-full md:w-1/2 h-72 md:h-[30rem] relative rounded-lg overflow-hidden z-30"
      data-aos="fade-left"
    >
      <MapContainer
        center={position}
        zoom={14}
        style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            12.888768" 77.597447"
            <br />
            Salarpuria Symbiosis, Ground Floor, Bannerghatta Road, Arekere
            Village, Begur Hobli, Bengaluru, Karnataka 560076
          </Popup>
        </Marker>
      </MapContainer>
      <div className="absolute top-2 left-2 bg-white text-black text-xs p-1 rounded">
        49°51'22.0"N 2°22'33.5"E
        <br />
        Saint-Leu, France
        <br />
        <a href="#" className="text-blue-600">
          View larger map
        </a>
      </div>
    </div>
  );
};

export default MapComponent;
