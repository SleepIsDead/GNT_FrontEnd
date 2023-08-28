import React, { useEffect, useState } from 'react';

import {Link} from'react-router-dom';
import PlanTable from '../components/planTable/PlanTable';
import PlanTableColumn from '../components/planTable/PlanTableColumn';
import PlanTableRow from '../components/planTable/PlanTableRow';
import { postList } from '../Data';

// function GetData() {
//   const [data, setData] = useState({});
//   // useEffect(() => {
//   //   axios.get('http://127.0.0.1:8080/').then((response)=> {
//   //     setData(response.data);
//   //   })
//   // }, []);

//   const item = (Object.values(data)).map((item) => (
//     <PlanTableRow key={item.id}>
//       <PlanTableColumn>{item.id}</PlanTableColumn>
//       <PlanTableColumn>{item.title}</PlanTableColumn>
//       <PlanTableColumn>{item.createAt}</PlanTableColumn>
//       <PlanTableColumn>{item.username}</PlanTableColumn>
//     </PlanTableRow>
//   ));
//   return item;
// }

const MyPlanList = props => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(postList);
  },
  []);

  return (
    <>
      <PlanTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <PlanTableRow key={index}>
                <PlanTableColumn>{item.no}</PlanTableColumn>
                <PlanTableColumn>
                  <Link to={`/postView/${item.no}`}>{item.title}</Link>
                </PlanTableColumn>
                <PlanTableColumn>{item.createDate}</PlanTableColumn>
                <PlanTableColumn>{item.readCount}</PlanTableColumn>
              </PlanTableRow>
            )
          }) : ''
        } 
      </PlanTable>
  </>
  );
}
  
export default MyPlanList;