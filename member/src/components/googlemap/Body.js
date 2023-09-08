import GoogleMap from "./GoogleMap";
import GoogleMapMenu from "./GoogleMapMenu";
import Kakao from "./KakaoMap";
import"./Body.css";

import React from 'react'

export default function Layouts() {
  return (
    <>
        <div className="googlemap_component">
            
            <GoogleMapMenu/>
        </div>
    </>
  )
}