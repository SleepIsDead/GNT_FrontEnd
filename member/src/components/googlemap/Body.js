import GoogleMap from "./GoogleMap";
import GoogleMapMenu from "./GoogleMapMenu";
import"./Body.css";

import React from 'react'

export default function Layouts() {
  return (
    <>
        <div className="googlemap_component">
            <GoogleMap/>
            <GoogleMapMenu/>
        </div>
    </>
  )
}