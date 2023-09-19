import React from 'react';
import ModalStyle from '../modal/usemodalcomponent.module.css';
import Resetcss from '../modal/resetcss.css';
import {Link} from 'react-router-dom';

function CreatePlan({ setModalOpen}) {

    const closeModal = () => {
      setModalOpen(false);
    };

    return (
      <>
        <div className={ModalStyle.modalbg} onClick={closeModal}>
        </div>
          <div className={ModalStyle.modalContainer}>
            <button className={ModalStyle.close} onClick={closeModal}>X</button>
              <div className={ModalStyle.modalHeader}>
                <h3 className={ModalStyle.modalText1}>새 계획 만들기</h3>
              </div>
              <div className={ModalStyle.modalContent}>
                  <div className={ModalStyle.sideContent}>
                    <ul className={ModalStyle.liStyle}>
                      <li>여행이름</li>
                      <li>출발일자</li>
                      <li>여행인원</li>
                      <li>설명</li>
                    </ul>
      
                  </div>
                  <div className={ModalStyle.mainContent}>
                    <ul>
                      <li>
                        <input type="text" className={ModalStyle.inputText1}></input>
                      </li>
                      <li>
                        <input type="date"></input>
                      </li>
                      <li>
                        <input type="number"></input>
                      </li>
                      <li>
                        <input type="text"></input>
                      </li>  
                      </ul>
                      <div className={ModalStyle.buttonContent}>
                      <Link to="/googlemap"><button className={ModalStyle.buttonStyle}>계획 만들기</button></Link>
                      <button className={ModalStyle.buttonStyle} onClick={closeModal}>창닫기</button>
                      </div>
                  </div>
                  
              </div>
          </div>
        </>
    );
}

export default CreatePlan;