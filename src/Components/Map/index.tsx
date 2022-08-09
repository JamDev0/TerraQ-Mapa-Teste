import { icon } from 'leaflet'
import { useEffect, useState } from 'react'

import { Marker, Popup, TileLayer } from 'react-leaflet'
import { useMapTile } from '../../hooks/useMapTile'
import { Points } from './Points'
import { MapContainerStyled, MapWrapperContainer } from './styles'
import { TileLayerElement } from './TileLayerElement'

interface mapInitialConfigs {
  center: { 
    lat: number
    lng: number
  }
  zoom: number
}

export interface pointFromApi {
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

export interface tileFromApi {
  name: string
  url: string
  attribution: string
  maxZoom: number
}

export function Map() {
  const [mapInitialConfigs, setMapInitialConfigs] = useState<mapInitialConfigs | null>(null)

  const [points, setPoints] = useState<pointFromApi[]>([])
  
  const [mapTiles, setMapTiles] = useState<tileFromApi[]>([])
  
  const { tileName } = useMapTile()

  const currentMapTile = mapTiles.find((mapTile) => mapTile.name === tileName)

  useEffect(() => {
    fetch('https://terraq.com.br/api/teste-leaflet/visao-inicial', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
      setMapInitialConfigs({...data.initial_view})
      setMapTiles([...data.tile_layers])
    })

    fetch('https://terraq.com.br/api/teste-leaflet/pontos')
    .then((res) => res.json())
    .then((data) => {
      setPoints(data)
    })
  }, [])

  return (
    <MapWrapperContainer>
      {
        mapInitialConfigs
        ? <MapContainerStyled
            key={String(new Date())}
            center={[
              mapInitialConfigs.center.lat,
              mapInitialConfigs.center.lng
            ]} 
            zoom={mapInitialConfigs.zoom} 
          >
            <TileLayerElement currentMapTile={currentMapTile} />
            <Points points={points} />
          </MapContainerStyled>
        : <span>
            Loading...
          </span>
      }
    </MapWrapperContainer>
  )
}