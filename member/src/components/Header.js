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

        <div>
            <header>
                <div className={bar.logo}>
                <Link to="/"><img className={bar.logoimg} src="../logoimg1.png"/></Link>
                </div>   
                <nav className={headstyle.headstyle}>
                    <div className="header">
                        <ul className="header-wrapper">
                            <h3 onClick={showModal}>여행 계획하기</h3>
                            {modalOpen && <CreatePlan setModalOpen={setModalOpen}/>}
                            <li><Link to="/kakaoLogin"><img src="../loginimg2.png"/></Link></li>
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
                    <img width="150px" src = "../profileimg.png" />
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
                        <Link to="/QNAInsert">1 : 1 문의하기</Link>
                    </div>
                    <div className = {bar.qlist}>
                        <Link to="/QNAList"> 나의 문의내역</Link>
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

