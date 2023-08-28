import React from 'react';
import './PlanTable.css';
import Header from '../Header'
import Footer from '../Footer';

const PlanTable = props => {
  const { headersName, children } = props;

  return (
    <>
      <Header/>
      <div className="plan-table-container">
        <div className="plan-table-header">나의 여행</div>
        <table className="plan-table">
          <thead>
            <tr>
              {
                headersName.map((item, index) => {
                  return (
                    <td className="plan-table-header-column" key={index}>{ item }</td>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              children
            }
          </tbody>
        </table>
      </div>
      <Footer/>
    </>    
  )
}

export default PlanTable;