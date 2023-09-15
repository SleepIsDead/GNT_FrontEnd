import headstyle from './usecomponents.module.css'
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './SideBar.css'
import bar from './usecomponents.module.css'
import CreatePlan from './modal/CreatePlan';



export default function Header() {

    const [isOpen, setMenu] = useState(false);  
    const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen); 
  }

  const showModal = () => {
    setModalOpen(true);
  }

    return (

        <div className={headstyle.mainheader}>
            <header>
                <div className={bar.logo}>
                <Link to="/"><img className={bar.logoimg} src="../travel-maker.png"/></Link>
                </div>   
                <nav className={headstyle.headstyle}>
                    <div className={headstyle.header}>
                        <h3 onClick={showModal}>여행 계획하기</h3>
                        <ul className="header-wrapper">                            
                            {modalOpen && <CreatePlan setModalOpen={setModalOpen}/>}
                            <li className={headstyle.hamburgerbtn}><img className={isOpen ? "hide-btn" : "show-btn"} src="../upArrow.png" onClick={()=>toggleMenu()}/></li>
                        </ul>
                    </div>    
                </nav>
            </header>
            <ul className={isOpen ? "show-menu" : "hide-menu"}> 
                <li className={bar.close}>
                    <img src="../downArrow.png" onClick={()=>toggleMenu()}/>
                    <p>로그아웃</p>
                </li>
                <div className={bar.mainmenudep}>
                    <article>
                        <div>
                            <img src = "../plus.png" />
                        </div>
                        <ul>
                            <li>어쩌구 유저 닉네임</li>
                        </ul>
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
                            <Link to="/QNAInsert">1 : 1 문의하기</Link>
                        </div>
                        <div className = {bar.qlist}>
                            <Link to="/QNAList"> 나의 문의내역</Link>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
        
    )
};

