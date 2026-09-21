import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

const markerIconDefault = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

function HotelMap({ hotels }) {
  const center = hotels.length
    ? [hotels[0].lat, hotels[0].lng]
    : [20, 0]

  return (
    <MapContainer
      className="hotel-map"
      center={center}
      zoom={hotels.length ? 3 : 2}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hotels.map((hotel) => (
        <Marker key={hotel.id} position={[hotel.lat, hotel.lng]} icon={markerIconDefault}>
          <Popup>
            <strong>{hotel.name}</strong>
            <br />
            {hotel.city}
            <br />
            ⭐ {Number(hotel.rating || 0).toFixed(1)} · ${hotel.pricePerNight} / night
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default HotelMap
