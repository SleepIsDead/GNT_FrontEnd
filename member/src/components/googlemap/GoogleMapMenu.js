import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Kakao from './KakaoMap'
import './reset.css';
import './GoogleMapMenu.css';
const Test = props => {
  const [ isTrue, setIsTrue ] = useState(true);

  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChangeHadler = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }
  const toggleMenu = () => {
    setIsTrue(!isTrue);
  }
  return (
    <>
      <Kakao searchPlace={Place}/>
        <div className='top'>
          <div className='top_menu'>
            <div className='top_menu_left'>
              <div className={isTrue ? "top_menu_left" : "white_color"} onClick={toggleMenu}>
                <p onClick={toggleMenu}>일정표</p>
              </div>
            </div>
            <div className='top_menu_right'>
              <div className={isTrue ? "white_color" : "top_menu_right"} onClick={toggleMenu}>
                <p >검색</p>
              </div>
            </div>
          </div>
          <div className={isTrue ? "top_dep_1_content_left display_none" : "top_dep_1_content_left"} >
            <div className='top_dep_2_moreMenu'>
              <div>
                <button>+</button>
                <button>-</button>
              </div>
              <div>
                <p>1Days</p>
                <p>2Days</p>
                <p>3Days</p>
                <p>4Days</p>
                <p>5Days</p>
              </div>
            </div>
            <div className='top_dep_2_content'>
              <div className='plus_content'>
                <div className='plus_content_left'>
                  <p>1</p>
                </div>
                <div className='plus_content_right'>
                  <div>보여줄 내용</div>
                </div>
              </div>              
            </div>
            <div className='top_dep_2_button'>
                <button>+</button>
            </div>
          </div>
          <div className={isTrue ? "top_dep_1_content_right" : "top_dep_1_content_right display_none"}>
            <div className='search_content'>
              <form className="inputForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="검색어를 입력하세요" onChange={onChangeHadler} value={InputText} className='search_place'/><button type="submit">검색</button>
              </form>
            </div>
            <div className='search_result'>
              <div className='search_result_tap'>
                보여줄 내용
              </div>
              <div className='search_result_tap'>
                보여줄 내용
              </div>
              <div className='search_result_tap'>
                보여줄 내용
              </div>
              <div className='search_result_tap'>
                보여줄 내용
              </div>
              <div className='search_result_tap'>
                보여줄 내용
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Test;