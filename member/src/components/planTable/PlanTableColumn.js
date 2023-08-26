import React from 'react';

const PlanTableColumn = ({ children }) => {
  return (
    <td className="plan-table-column">
      {
        children
      }
    </td>
  )
}

export default PlanTableColumn;