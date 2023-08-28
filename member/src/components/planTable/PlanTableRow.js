import React from 'react';

const PlanTableColumn = ({ children }) => {
  return (
    <tr className="plan-table-column">
      {
        children
      }
    </tr>
  )
}

export default PlanTableColumn;