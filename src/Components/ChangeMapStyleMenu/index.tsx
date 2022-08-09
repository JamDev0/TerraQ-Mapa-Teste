import { useMapTile } from '../../hooks/useMapTile'
import { Option, PopoverButton, PopoverContainer, PopoverPanel } from './styles'

export function ChangeMapStyleMenu() {
  const { setTileName } = useMapTile()

  return(
    <PopoverContainer>
      <PopoverButton>Mudar mapa</PopoverButton>
      <PopoverPanel>
        <Option
          onClick={() => {
            setTileName('Mapa Base 1 - OpenStreetMap')
          }}
        >
          Mapa 1
        </Option>

        <Option
          onClick={() => {
            setTileName('Mapa Base 2 - Satélite')
          }}
        >
          Mapa 2
        </Option>
      </PopoverPanel>
    </PopoverContainer>
  )
}