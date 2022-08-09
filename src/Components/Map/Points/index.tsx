import { icon } from "leaflet"

import { Marker } from "react-leaflet"

import { Popups } from "./Popups"

import { pointFromApi } from ".."

interface PointsProps {
    points: pointFromApi[]
}

export function Points({ points }: PointsProps) {
    return(
        <>
          {
            points
            ? points.map((point) => {
              return(
                <Marker
                  key={point.properties.id} 
                  position={[
                    point.geometry.coordinates[1], point.geometry.coordinates[0]
                  ]}
                  icon={icon({
                    iconUrl: point.properties.icon,

                    iconSize: [32, 32],

                    iconAnchor:   [16, 32],
                    popupAnchor:  [0, -32],
                  })}
                >
                  <Popups point={point}/>
                </Marker>
              )
            })
            : null
          }
        </>
    )
}