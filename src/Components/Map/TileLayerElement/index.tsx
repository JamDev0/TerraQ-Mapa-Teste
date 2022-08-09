import { TileLayer } from "react-leaflet"

import { tileFromApi } from ".."

interface TileLayerProps {
    currentMapTile: tileFromApi | undefined
}

export function TileLayerElement({ currentMapTile }: TileLayerProps) {
  return(
    <>
      {
        currentMapTile
        ? <TileLayer
            attribution={currentMapTile.attribution}
            url={currentMapTile.url}
            maxZoom={currentMapTile.maxZoom}
          />
        : <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />
      }
    </>
  )
}