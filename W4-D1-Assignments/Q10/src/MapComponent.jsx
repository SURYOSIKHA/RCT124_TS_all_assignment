import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMarker = React.memo(() => {
  const [position, setPosition] = useState(null);
  const map = useMap();

  // Track user's real-time location
  useEffect(() => {
    map.locate().on("locationfound", (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position ? <Marker position={position}></Marker> : null;
});

const MapComponent = React.memo(() => (
  <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <LocationMarker />
  </MapContainer>
));

export default MapComponent;
