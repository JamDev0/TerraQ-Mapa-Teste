import { Menu } from '@headlessui/react'
import { useMapTile } from '../../hooks/useMapTile'
import { MenuButton, MenuItem, MenuItems } from './styles'

export function ChangeMapStyleMenu() {
  const { setTileName } = useMapTile()

  return(
    <Menu>
      <MenuButton>Mudar mapa</MenuButton>
      <MenuItems>
          <MenuItem>
            <span
              onClick={() => {
                setTileName('Mapa Base 1 - OpenStreetMap')
              }}
            >
              Mapa 1
            </span>
          </MenuItem>

          <MenuItem>
            <span
              onClick={() => {
                setTileName('Mapa Base 2 - Satélite')
              }}
            >
              Mapa 2
            </span>
          </MenuItem>
      </MenuItems>
    </Menu>
  )
}