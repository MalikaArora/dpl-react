import TableCell from './TableCell';
import React from 'react';
function TableData({ data, meta }) {
    const headerOrder = meta.map(m => m.key);
    return (
      <tbody>
        {
          data.map((row) => (
            <tr className="table-row">
              {
                row.map((_, i) => <TableCell data={row.find(r => r.key === headerOrder[i])} />)
              }
            </tr>
          ))
        }
      </tbody>
    )
  }

  export default TableData;