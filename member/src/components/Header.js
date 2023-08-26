import headstyle from './usecomponents.module.css'
import React,{useState} from 'react';
import {Link} from'react-router-dom';
import './SideBar.css'
import bar from './usecomponents.module.css'



export default function Header() {

    const [isOpen, setMenu] = useState(false);  

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen); 
  }

    return (

        <div>
            <header>
                <img className={bar.logo} src="../plane_airplane_icon.png"/>
                <nav className={headstyle.headstyle}>
                    <div className="header">
                        <ul className="header-wrapper">
                            <h3>여행 계획하기</h3>
                            <li><Link to="/kakaoLogin"><img src="../person.png"/></Link></li>
                            <li><img src="../menubar.png" onClick={()=>toggleMenu()}/></li>
                        </ul>
                    </div>    
                </nav>
            </header>
            <ul className={isOpen ? "show-menu" : "hide-menu"}> 
                <article>
                    <div className={bar.close}>
                        <img src="../menubar.png" onClick={()=>toggleMenu()}/>
                    </div>
                    <img width="150px" src = "../person.png" />
                    <li>닉네임</li>
                    <li>닉네임 변경</li>
                </article>
                <div className={bar.menuList}>
                    <div className = {bar.plan}>
                        여행 계획하기
                    </div>
                    <div className = {bar.myplan}>
                        <Link to="/myplanList">나의 여행</Link>
                    </div>
                    <div className = {bar.money}>
                        여행 비용
                    </div>
                    <div className = {bar.q}>
                        1 : 1 문의하기
                    </div>
                    <div className = {bar.qlist}>
                        나의 문의내역
                    </div>
                </div>
                <div>
                    <li className={bar.logout}>
                        로그아웃
                    </li>
                </div>
            </ul>
        </div>
        
    )
};

