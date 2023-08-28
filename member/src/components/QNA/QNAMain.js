import React from 'react';
import QNAList from './QNAList';
import { withRouter } from 'react-router-dom';

const PostMain = props => {
  return (
    <>
      <h2 align="center">게시판</h2>
      <QNAList />
    </>
  )
}

export default PostMain;