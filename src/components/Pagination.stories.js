import Pagination from "@avrc/pagination";
import "@avrc/pagination/styles.css";

import React from 'react';
export default {
    title: 'Pagination',
}

export const ShowPagination = () => {
    const itemsPerPageOptions = [10, 25, 50, 100]; // default = [10, 25, 50]
  const [itemsPerPage, setItemsPerPage] = React.useState(10); // default = 10

  const [currentPage, setCurrentPage] = React.useState(1);

  const tableData = { columns: [], rows: [] };

    return <Pagination
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      itemsPerPageOptions={itemsPerPageOptions}
      onCurrentPageChange={setCurrentPage}
      onItemsPerPageChange={setItemsPerPage}
      totalItems={tableData.rows.length}
    />
}