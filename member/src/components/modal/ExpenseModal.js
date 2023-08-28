import React from 'react';
import ModalStyle from './modal/usemodalcomponent.module.css';
import Resetcss from './modal/resetcss.css';

export default function ExpenseModal() {

  return (
    <div className={ModalStyle.modalContainer}>
        <div className={ModalStyle.modalHeader}>
          <h3 className={ModalStyle.modalText1}>비용 추가</h3>
        </div>
        <div className={ModalStyle.modalContent}>
            <div className={ModalStyle.sideContent}>
              <ul className={ModalStyle.liStyle2}>
                <li>일자</li>
                <li>통화</li>
                <li>지출금액</li>
                <li>지불방식</li>
                <li>카테고리</li>
                <li>메모 </li>
              </ul>

            </div>
            <div className={ModalStyle.mainContent2}>
              <ul>
                <li>
                  <input type="date" className={ModalStyle.inputStyle1}></input>
                </li>
                <li>
                  <input type="button" value={"KRW"} className={ModalStyle.buttonStyle4}></input>
                  <input type="button" value={"USD"} className={ModalStyle.buttonStyle2}></input>
                  <input type="button" value={"기타"} className={ModalStyle.buttonStyle2}></input>
                </li>
                <li>
                  <input type="number" className={ModalStyle.inputStyle1}></input>
                </li>
                <li>
                  <input type="button" value={"카드"} className={ModalStyle.buttonStyle4}></input>
                  <input type="button" value={"현금"} className={ModalStyle.buttonStyle2}></input>
                  <input type="button" value={"기타"} className={ModalStyle.buttonStyle2}></input>
                </li>  
                <li>
                  <input type="button" value={"항공권"} className={ModalStyle.buttonStyle4}></input>
                  <input type="button" value={"숙박비"} className={ModalStyle.buttonStyle2}></input>
                  <input type="button" value={"식비"} className={ModalStyle.buttonStyle2}></input>
                  <br/>
                  <input type="button" value={"교통비"} className={ModalStyle.buttonStyle4}></input>
                  <input type="button" value={"쇼핑"} className={ModalStyle.buttonStyle2}></input>
                  <input type="button" value={"기타"} className={ModalStyle.buttonStyle3}></input>
                </li>
                <li>
                  <input type="text" className={ModalStyle.inputText2}></input>
                </li>
                </ul>
                <div className={ModalStyle.buttonContent2}>
                <button className={ModalStyle.buttonStyle5}>등록</button>
                <button className={ModalStyle.buttonStyle5}>취소</button>
                </div>
            </div>
            
        </div>
    </div>
)
};
