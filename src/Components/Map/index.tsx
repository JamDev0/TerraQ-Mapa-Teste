import { icon } from 'leaflet'
import { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

interface mapInitialConfigs {
  center: { 
    lat: number
    lng: number
  }
  zoom: number
}

interface pointFromApi {
  type: string
  geometry: {
    type: string
    coordinates: [number, number]
  }
  properties: {
  historico_ponto: string
  icon: string
  id: number
  name: string
  popupContent: string
  precipitacao: number
  temperatura: number
  umidade: number
  vento: number
  visibilidade: number
  }
}

export function Map() {
  const [mapInitialConfigs, setMapInitialConfigs] = useState<mapInitialConfigs | null>(null)

  const [points, setPoints] = useState<pointFromApi[]>([])

  useEffect(() => {
    fetch('https://terraq.com.br/api/teste-leaflet/visao-inicial', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
      setMapInitialConfigs({...data.initial_view})
    })

    fetch('https://terraq.com.br/api/teste-leaflet/pontos')
    .then((res) => res.json())
    .then((data) => {
      setPoints(data)
    })
  }, [])

  return (
    <>
      {
        mapInitialConfigs
        ? <MapContainer
            key={String(new Date())}
            style={{
              height: '100vh',
              width: '100vw', 
              maxWidth: '100vw',
              maxHeight: '100vh'
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
            {
              points
              ? points.map((point) => {
                return(
                  <Marker
                    key={point.properties.id} 
                    position={[
                      point.geometry.coordinates[1], point.geometry.coordinates[0]
                    ]}
                    icon={icon({
                      iconUrl: point.properties.icon,

                      iconSize: [32, 32],

                      iconAnchor:   [16, 32],
                      popupAnchor:  [0, -32],
                    })}
                  >
                    <Popup>
                      <p>
                        {point.geometry.type}
                      </p>
                      {
                        parse(point.properties.popupContent)
                      }
                      <ul>
                        <li>
                          Preciptação:
                          {
                            point.properties.precipitacao
                          }
                        </li>
                        <li>
                          Temperatura:
                          {
                            point.properties.temperatura
                          }
                        </li>
                        <li>
                          Umidade:
                          {
                            point.properties.umidade
                          }
                        </li>
                        <li>
                          Vento:
                          {
                            point.properties.vento
                          }
                        </li>
                        <li>
                          Visibilidade:
                          {
                            point.properties.visibilidade
                          }
                        </li>
                      </ul>
                    </Popup>
                  </Marker>
                )
              })
              : null
            }
          </MapContainer>
        : <span>
            Loading...
          </span>
      }
    </>
  )
}