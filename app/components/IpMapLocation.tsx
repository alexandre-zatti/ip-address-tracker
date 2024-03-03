'use client'

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet"
import 'leaflet/dist/leaflet.css'
import { useContext } from "react";
import { IpDataContext } from "@/app/components/IpDataProvider";

export const IpMapLocation = () => {
  const {ipData} = useContext(IpDataContext)

  const marker = new Icon({iconUrl: "./icon-location.svg", iconSize: [38, 48]})

  return (
    <>
      {ipData.latitude && (
        <MapContainer center={[ipData.latitude, ipData.longitude]} zoom={15}
                      zoomControl={false} key={`${ipData.ip}`}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[ipData.latitude, ipData.longitude]} icon={marker}>
          </Marker>
        </MapContainer>
      )}
    </>
  )
}