import { ChangeMapStyleMenu } from './Components/ChangeMapStyleMenu'
import { Map } from './Components/Map'
import { MapTileProvider } from './hooks/useMapTile'

export function App() {
  return (
    <MapTileProvider>
      <Map />
      <ChangeMapStyleMenu />
    </MapTileProvider>
  )
}