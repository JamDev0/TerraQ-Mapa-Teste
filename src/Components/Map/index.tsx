import { useEffect, useState } from 'react'

import { MapContainerStyled, MapWrapperContainer } from './styles'

import { useMapTile } from '../../hooks/useMapTile'

import { Points } from './Points'

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
  const [mapInitialConfigs, setMapInitialConfigs] = useState<mapInitialConfigs | null>(null) // Definição de um estado para o armazenamento das configurações iniciais do mapa

  const [points, setPoints] = useState<pointFromApi[]>([]) // Definição de um estado responsável por armazenas todos os pontos e seus dados
  
  const [mapTiles, setMapTiles] = useState<tileFromApi[]>([]) // Definição de um estado que ira armazenar os possíveis tiles do map
  
  const { tileName } = useMapTile()

  const currentMapTile = mapTiles.find((mapTile) => mapTile.name === tileName) // Procura por meio do nome do estilo de mapa selecionado

  useEffect(() => {
    fetch('https://terraq.com.br/api/teste-leaflet/visao-inicial', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
      setMapInitialConfigs({...data.initial_view}) // Definição dos valores retornados pela api como valor do estado
      setMapTiles([...data.tile_layers]) // Definição dos valores retornados pela api como valor do estado
    })

    fetch('https://terraq.com.br/api/teste-leaflet/pontos')
    .then((res) => res.json())
    .then((data) => {
      setPoints(data) // Definição dos valores retornados pela api como valor do estado
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