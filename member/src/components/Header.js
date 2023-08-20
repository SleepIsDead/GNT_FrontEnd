import React from 'react'
import headstyle from './usecomponents.module.css'

export default function Header() {
    return (
    
    <div> 
        <div className={headstyle.headstyle}>
            <img src="../logo192.png"></img>
            <h3>여행 계획하기</h3>
        </div>    
    </div>    
    )
};
