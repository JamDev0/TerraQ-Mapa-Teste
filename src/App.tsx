import { ChangeMapStyleMenu } from './Components/ChangeMapStyleMenu'
import { Map } from './Components/Map'
import { PointHistoryModal } from './Components/PointHistoryModal'
import { UserMenu } from './Components/UserMenu'
import { MapTileProvider } from './hooks/useMapTile'
import { PointHistoryProvider } from './hooks/usePointHistory'

export function App() {
  return (
    <MapTileProvider>
      <PointHistoryProvider>
        <Map />
        <ChangeMapStyleMenu />
        <UserMenu />
        <PointHistoryModal />
      </PointHistoryProvider>
    </MapTileProvider>
  )
}