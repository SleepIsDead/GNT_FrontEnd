import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom'
// import Body from "../components/Body";
import Body from "../components/Main";


import React from 'react'

export default function Layouts() {
  return (
    <>
      <Header/>
      <Body/>
      <Outlet/>
      <Footer/>
    </>
  )
}
