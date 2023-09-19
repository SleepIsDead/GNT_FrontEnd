import React, { useEffect } from 'react'
import './GoogleMapMenu.css';
const { kakao } = window

const Mapitem = ({item}) =>{

  return (
    <div className='search_result_tap'>
        <div className='result_name'>
            <div>{item.place_name}</div>
            <div>{item.address_name}</div>
        </div>
        <div className='add_result'>
            <button>+</button>
        </div>
  </div>
  )
}

export default Mapitem