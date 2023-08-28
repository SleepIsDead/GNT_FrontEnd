import React from 'react';
import ModalStyle from './modal/usemodalcomponent.module.css';
import Resetcss from './modal/resetcss.css';

export default function Footer() {

  return (
    <div className={ModalStyle.modalContainer}>
        <div className={ModalStyle.modalHeader}>
          <h3 className={ModalStyle.modalText1}>닉네임 변경</h3>
        </div>
        <div className={ModalStyle.modalContent}>
            <div className={ModalStyle.sideContent}>
              <ul className={ModalStyle.liStyle3}>
                <li>현재 닉네임 : </li>
                <li>변경 닉네임 : </li>
              </ul>
            </div>
            <div className={ModalStyle.mainContent2}>
                <ul className={ModalStyle.liStyle3}>
                <li>
                111111
                </li>
                <li>
                <input type="text" className={ModalStyle.inputTextType}></input>
                </li>
                </ul>
                <div className={ModalStyle.buttonContent2}>
                <button className={ModalStyle.buttonStyle6}>등록</button>
                <button className={ModalStyle.buttonStyle6}>취소</button>
                </div>
            </div>
            
        </div>
    </div>
)
};
