import TableCell from './TableCell';

function TableHeader({ headers }) {

    return (
      <thead className="table-row">
        {
          headers.map((d) => <TableCell data={d} />)
        }
      </thead>
    )
  }

  export default TableHeader;