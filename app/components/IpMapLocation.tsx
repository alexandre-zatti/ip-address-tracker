'use client'

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { IpResult } from "@/app/types/IpResult";

type IpMapLocationProps = {
  ipDataResult: IpResult
}

const IpMapLocation = ({ipDataResult}: IpMapLocationProps) => {
  const marker = new Icon({iconUrl: "./icon-location.svg", iconSize: [38, 48]})
  const latLng: LatLngExpression = [ipDataResult.data?.latitude ?? 1, ipDataResult.data?.longitude ?? 1]

  return (

    <MapContainer center={latLng} zoom={15}
                  zoomControl={false} key={`${ipDataResult.data?.ip}`}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={latLng} icon={marker}>
      </Marker>
    </MapContainer>

  )
}

export default IpMapLocation