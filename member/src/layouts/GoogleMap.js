import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom'
import Body from "../components/googlemap/Body";


import React from 'react'

export default function GoogleMap() {
  return (
    <>
      <Header/>
      <Body/>
      <Outlet/>
      <Footer/>
    </>
  )
}
