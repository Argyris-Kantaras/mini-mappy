import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../css-modules/displayMap.css";
import { Leaflet, Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { useParams } from "react-router";

function DisplayMap(props) {
  const coords = useParams();
  const id = coords.id.split(",");
  return (
    <div>
      <MapContainer center={id} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={id}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>The right address of the hotel</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default DisplayMap;

//39.9822,2025.4012
// spiti ======== 39.9822, 1825.4012
