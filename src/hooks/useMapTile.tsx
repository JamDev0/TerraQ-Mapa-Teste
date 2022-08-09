import { createContext, ReactNode, useContext, useState } from "react";

type tileName = 'Mapa Base 1 - OpenStreetMap' | 'Mapa Base 2 - Sat\u00e9lite'

interface mapTileContext {
  tileName: tileName | null
  setTileName: (arg: tileName) => void
}

interface MapTileProviderProps {
  children: ReactNode
}

const mapTileContext = createContext<mapTileContext>({} as mapTileContext)

export function MapTileProvider({ children }: MapTileProviderProps) {
  const [tileName, setTileName] = useState<tileName | null>(null)

  return(
    <mapTileContext.Provider value={{ setTileName, tileName }}>
        {children}
    </mapTileContext.Provider>
  )
}

export function useMapTile() {
  const context = useContext(mapTileContext)

  return context
}