import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';
import { List } from './Data.js';

const QNAList = props => {
  const [ dataList, setDataList ] = useState([]);

  useEffect(() => {
    setDataList(List);
  }, [ ])

  return (
    <>
      <CommonTable headersName={['문의 번호', '문의 제목', '등록일']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.no }</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/QNAView/${item.no}`}>{ item.title }</Link>
                </CommonTableColumn>
                <CommonTableColumn>{ item.createDate }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
    </>
  )
}

export default QNAList;