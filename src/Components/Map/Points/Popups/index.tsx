import { Popup } from "react-leaflet";

import parse from 'html-react-parser';

import { ApiPopupContentContainer, ListOfData, OpenHistory, PopupContainer, Title } from "./styles";

import { pointFromApi } from "../..";

import { usePointHistory } from "../../../../hooks/usePointHistory";

interface PopuspProps {
    point: pointFromApi
}

export function Popups({ point }: PopuspProps) {
  const { setPointId } = usePointHistory()

  return(
    <Popup>
      <PopupContainer>
      <Title>
          {point.geometry.type}
      </Title>
      <ApiPopupContentContainer>
        {
            parse(point.properties.popupContent) // Transformação de string para elemento react
        }
      </ApiPopupContentContainer>
      <ListOfData>
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
      </ListOfData>

      <OpenHistory
        onClick={() => {
          setPointId(point.properties.id) // Definição do estado ao clicar
        }}
      >
        Abrir histórico
      </OpenHistory>
      </PopupContainer>
    </Popup>
  )
} 