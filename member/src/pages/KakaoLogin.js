import React from 'react'
import { Link } from'react-router-dom'
import Footer from '../components/Footer'
import login from './usepages.module.css'

export default function KakaoLogin() {
    return (
        <>
        <div className={login.loginpage}>
            <div className={login.logo}>
                <Link to="/"><img src = "../logoimg1.png"/></Link>
            </div>
            <Link to=""><img className={login.kakaoImg} src = "../kakao_login_large_wide.png"/></Link>
        </div>
            <Footer/> 
        </>
    );
};
