'use client'

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet"
import 'leaflet/dist/leaflet.css'
import { useContext } from "react";
import { IpDataContext } from "@/app/components/IpDataProvider";

export const Map = () => {
  const {ipData} = useContext(IpDataContext)

  const marker = new Icon({iconUrl: "./icon-location.svg", iconSize: [38, 48]})

  return (
    <>
      {ipData.location && (
        <MapContainer center={[ipData.location.lat, ipData.location.lng]} zoom={15} scrollWheelZoom={false}
                      zoomControl={false} key={`${ipData.location.lat}-${ipData.location.lng}`}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[ipData.location.lat, ipData.location.lng]} icon={marker}>
          </Marker>
        </MapContainer>
      )}
    </>
  )
}