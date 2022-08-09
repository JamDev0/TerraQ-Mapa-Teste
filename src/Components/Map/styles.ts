import { MapContainer } from 'react-leaflet';

import styled from 'styled-components';

export const MapWrapperContainer = styled.div`
    position: relative;

    max-width: 100vw;
    min-height: 100vh;
`

export const MapContainerStyled = styled(MapContainer)`
    height: 100vh;
    width: 100vw;

    max-width: 100vw;
    max-height: 100vh;
`