function TableCell ({ data }) {
    return (
      <td className="table-cell" onClick={data.sortFunc}>
        {data.text}
      </td>
    )
  }

export default TableCell;