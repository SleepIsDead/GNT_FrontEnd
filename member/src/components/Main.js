import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <div className='main_content'>
      <div className='main_banner'>
        <div className='main_banner_text'>
          <div className='main_banner_text_1'>
            <h1>트래블 메이커</h1>
            <h3>나만의 여행 플래너</h3>
            <h4>나만의 여행 플래너는 원하는 곳만 쏙쏙 골라 직접 여행 일정을 계획하는 여행 도우미입니다</h4>
          </div>
          <div className='main_banner_text_btn'>
            <a>
              <p>새 일정 만들기</p>
            </a>
          </div>
        </div>
      </div>
      <div className='main_content_dep'>
        <div className='main_content_dep1'>
          <div className='main_content_dep2 content_top'>
            <div>
              <h1>추천 일정</h1>
            </div>
            <div>
              <h3>더보기 {'>'}</h3>
            </div>
          </div>
          <hr/>
          <div className='main_content_dep2 content_under'>

          </div>
        </div>
      </div>
    </div>
  )
}
