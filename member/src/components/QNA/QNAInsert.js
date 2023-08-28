import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getPostByNo } from './Data';
import './Post.css';

const QNAInsert = ({ history, location, match }) => {
  const [ data, setData ] = useState({
    title: '',
    content: '',
    readCount: 0
  });
  const { no } = useParams();
  const navigate = useNavigate();

    const handleSubmit = (e) => {
      // e.preventDefault(); // submit action을 안타도록 설정
      fetch("http://localhost:8080/", {
          method : "PUT",
          headers : {
              "Content-Type":"application/json; charset=utf-8"
          },
          body: JSON.stringify(data)
      })
      .then(res=>{
          console.log(res)
          return res.json();
      })
      .then(res=> {
          console.log(res);
      });
  }


  const onClickHandler = () =>{
    navigate(`/`)
  }

  const handleValueChange = (e) => {
    setData({
        ...data,
        [e.target.name]:e.target.value
    });
}   

  return (
    <>
      <h2 align="center">1 :1 문의하기</h2>

      <div className="post-view-wrapper">
        {
          data ? (
            <>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="post-view-row">
                  <label>제목</label>
                  <input type="text" placeholder="Movie title" name="title" onChange={(e) => handleValueChange(e)}/>
                </div>
                <div className="post-view-row">
                  <label>내용</label>
                  <textarea type="text" placeholder="1 ~ 10" name="content" onChange={(e) => handleValueChange(e)}/>
                </div>
              </form>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="post-view-go-list-btn" onClick={onClickHandler}>취소</button>
        <button className="post-view-go-list-btn" onClick={handleSubmit}>등록</button>
      </div>
    </>
  )
}

export default QNAInsert;