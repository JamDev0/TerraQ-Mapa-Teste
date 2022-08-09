import { useEffect, useState } from 'react'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

interface mapInitialConfigs {
  center: { 
    lat: number,
    lng: number,
  },
  zoom: number
}

export function App() {
  const [mapInitialConfigs, setMapInitialConfigs] = useState<mapInitialConfigs>({
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 10
  })

  useEffect(() => {
    fetch('https://terraq.com.br/api/teste-leaflet/visao-inicial', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {setMapInitialConfigs({...data.initial_view})})
  }, [])

  return (
      <MapContainer
        key={String(new Date())}
        style={{
          height: '500px',
          width: '500px', 
          maxWidth: '100%',
          maxHeight: '100%'
        }}
        center={[
          mapInitialConfigs.center.lat,
          mapInitialConfigs.center.lng
        ]} 
        zoom={mapInitialConfigs.zoom} 
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
  )
}