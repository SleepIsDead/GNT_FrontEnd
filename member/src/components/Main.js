import React, { useEffect } from 'react'
import './Main.css'
import { useState } from 'react';

export default function Main() {
  useEffect(() => {
    let bannerWidth = 0;
    let bannerMV = setInterval(() => {
        bannerHandlerNext();
    }, 4500);

    function bannerHandlerNext(){
      bannerWidth = bannerWidth-100;
      if(bannerWidth < -200){
        bannerWidth =0
      }
      document.getElementsByClassName("main_banner_wrap")[0].style.left=bannerWidth+"%";
    }

    return()=>{
      clearInterval(bannerMV);
    };
  },[])
  

  return (
    <div className='main_content'>
      <div className='main_banner_wrap bg_1'>          
          <div className='main_banner'>
            <div className='main_banner_text'>
              <div className='main_banner_text_1'>
                <h3>당신만의 맞춤 여행을 만들어보세요</h3>
              </div>
              <div className='main_banner_text_btn'>
                <a>
                  <p>새일정 만들기</p>
                </a>
              </div>
            </div>  
          </div>
          
          <div className='main_banner bg_2'>
            <div className='main_banner_text'>
              <div className='main_banner_text_1'>
                <h3>여행 중 예산 걱정은 이제 그만</h3>
              </div>
              <div className='main_banner_text_btn'>
                <a>
                  <p>가계부</p>
                </a>
              </div>
            </div>
          </div>

          <div className='main_banner bg_3'>
            <div className='main_banner_text'>
              <div className='main_banner_text_1'>
                <h3>질문이나 도움이 필요하신가요?</h3>
              </div>
              <div className='main_banner_text_btn'>
                <a>
                  <p>문의하기</p>
                </a>
              </div>
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
