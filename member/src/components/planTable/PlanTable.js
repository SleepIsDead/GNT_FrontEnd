import React from 'react';
import './PlanTable.css';

const PlanTable = props => {
  const { headersName, children } = props;

  return (
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
  )
}

export default PlanTable;