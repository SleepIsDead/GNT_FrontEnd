import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getPostByNo } from './Data.js'
import './QNA.css';

const PostView = ({ history, location, match }) => {
  const [ data, setData ] = useState({});
  const { no } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setData(getPostByNo(no));
    // fetch(`http://localhost:8080/postView/${no}`, {
    //         method : "GET"   
    //     }).then(res=>res.json()).then(res=>{
    //         console.log(1, res);
    //         setMovies(res);
    //     });  
  }, [ ]);

  const onClickHandler = () =>{
    navigate(`/QNAList`)
}

  return (
    <>
      <div className="post-view-wrapper_main">
      <h2 align="center">내 문의 글</h2>

        <div className="post-view-wrapper">
          {
            data ? (
              <>
                <div className="post-view-row">
                  <label>문의글 번호</label>
                  <label>{ data.no }</label>
                </div>
                <div className="post-view-row">
                  <label>문의 제목</label>
                  <label>{ data.title }</label>
                </div>
                <div className="post-view-row">
                  <label>작성일</label>
                  <label>{ data.createDate }</label>
                </div>
                <div className="post-view-row">
                  <label>문의 내용</label>
                  <div>
                    {
                      data.content
                    }
                  </div>
                </div>
              </>
            ) : '해당 게시글을 찾을 수 없습니다.'
          }          
        </div>
        <div className='post-view-wrapper btn_list'>
          <button className="post-view-go-list-btn" onClick={onClickHandler}>목록으로 돌아가기</button>
        </div>
      </div>
    </>
  )
}

export default PostView;