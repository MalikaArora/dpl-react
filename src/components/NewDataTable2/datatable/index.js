import React, { useEffect, useState, useMemo } from "react";

import TableHeader from "./TableHeader";
import Search from "./Search";
import Pagination from "./Pagination"; 
import './datatable.css';


const DataTable = (props) => {
    const { columns } = props;
    const { rows } = props;
    const { isSortable } = props;
    const { showCheckbox } = props;
    const [comments, setComments] = useState([]);
    const [searchInput, setSearchInput] = useState([]);
    
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [detect, setDetect] = useState("");
    
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const [itemsPerPage, setItemsPerPage] = useState(10); 
    //const ITEMS_PER_PAGE = 10;

    const handleChange = event => {
        setItemsPerPage(event.target.value);
        //itemsPerPage = event.target.value;
        setDetect(Math.random());
    };

    const changerows = (props1, props2, props3) => {
        let rowsvar = comments;
        rowsvar.map((rows, rowsidx) => (
            columns.map((cols, colsidx) => (
                (((rowsidx == props1)&&(colsidx == props2)) ? (rows[cols.field]=props3) : "")
            ))
        ))
        setComments(rowsvar);
        setDetect(Math.random());

    };

    const handleAllClick = (props) => {
        let checkAll = 1;
        let rowsvar = comments;
        columns.map(column => (
            ((column.field == props) 
                ? 
                (comments.map(comment => (
                    ((comment[props] == "false") ? (checkAll = 0) : "")
                 ))
                )    
                : 
                ""
            )
        ))
        return(
            ((checkAll == 1) 
                ? 
                (rowsvar.map((rows, rowsidx) => (
                    columns.map((cols, colsidx) => (
                        ((cols.field == props) ? (rows[cols.field]="false") : "")
                    ))
                )),
                setComments(rowsvar), setDetect(Math.random())
                )
                :
                (rowsvar.map((rows, rowsidx) => (
                    columns.map((cols, colsidx) => (
                        ((cols.field == props) ? (rows[cols.field]="true") : "")
                    ))
                )),
                setComments(rowsvar), setDetect(Math.random())
                )
                
            )        
                        
        )
    };

    useEffect(() => {
        setComments(rows);
        var searchs = [];
        columns.map((item, itemindex) => (
            searchs.push("")        
        ))
        setSearchInput((searchInput.length == 0) ? searchs : searchInput)
    }, []);
    

    const commentsData = useMemo(() => {
        let computedComments = comments;
        searchInput.map((searchitem, index) => (
            columns.map((item, idx) => (
                ((index == idx) ? 
                    (computedComments = computedComments.filter(
                        comment =>
                            comment[item.field].toLowerCase().includes(searchitem.toLowerCase())
                    ))
                : 
                "")
            ))         
        ))
        setTotalItems(computedComments.length);

        //Sorting comments
        if ((sorting.field)&&(isSortable == "true")) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }
        return computedComments.slice(
            (currentPage - 1) * itemsPerPage,
            (currentPage - 1) * itemsPerPage + itemsPerPage
            // (currentPage - 1) * ITEMS_PER_PAGE,
            // (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );        
    }, [comments, currentPage, detect, searchInput, sorting]);

    return (
        <>
            <div className=" row w-100">
                {/* {alert(JSON.stringify(searchInput))} */}
                <div className="dt col mb-3 col-12 text-center">
                    
                    <table className="table table-striped">
                        <TableHeader
                            headers={ columns }
                            isSortable = { isSortable }
                            onSorting={(field, order) => setSorting({ field, order })}                        
                        />
                        <tbody>
                            <tr>
                                {columns.map((item, itemindex) => (
                                  (item.bools ? 
                                    <td>
                                        <label>
                                          <input type="radio" 
                                            name={item.field}
                                            onClick={() => {
                                                setDetect(Math.random());
                                                var srh = searchInput;
                                                searchInput.map((itm, idx) => (
                                                    (itemindex == idx ? ((srh[idx] == "true") ? srh[idx]="" : srh[idx]="true") : "")    
                                                ))
                                                setSearchInput(srh);                                        
                                                setCurrentPage(1);
                                            }}
                                            checked={(searchInput[itemindex] == "true") ? true : false}
                                          ></input>
                                          true
                                        </label>
                                        <label>
                                          <input type="radio" 
                                            name={item.field}
                                            onClick={() => {
                                                setDetect(Math.random());
                                                var srh = searchInput;
                                                searchInput.map((itm, idx) => (
                                                    (itemindex == idx ? ((srh[idx] == "false") ? srh[idx]="" : srh[idx]="false") : "")    
                                                ))
                                                setSearchInput(srh);
                                                //alert(JSON.stringify(searchInput));
                                                //setSearch("false");
                                                //setSearchField(item.field);
                                                setCurrentPage(1);
                                            }}
                                            checked={(searchInput[itemindex] == "false") ? true : false}
                                          ></input>
                                          false
                                        </label>
                                    </td>
                                    : 
                                    <td>
                                        <Search
                                            onSearch={value => {
                                                // var srh = [];
                                                // columns.map(i => (
                                                //     srh.push("")
                                                // ))
                                                setDetect(Math.random());
                                                var srh = searchInput;
                                                //setSearch(value);
                                                //setSearchField(item.field);
                                                searchInput.map((itm, idx) => (
                                                    (itemindex == idx ? srh[idx]=value : "")    
                                                ))
                                                setSearchInput(srh);
                                                //alert(JSON.stringify(searchInput));
                                                setCurrentPage(1);
                                            }}
                                        />
                                        {/* <button>FIL</button> */}
                                    </td>
                                  )               
                                ))}
                            </tr>
                            {((showCheckbox == "true") ? 
                                    <tr>
                                        {commentsData.map((comment, index) => (
                                            ((index == 0) 
                                                ? 
                                                columns.map(column => (
                                                    (((comment[column.field] == "true")||(commentsData[0][column.field] == "false")) 
                                                    ? 
                                                    <td><button 
                                                            onClick={() => {handleAllClick(column.field)}}                                        
                                                        >ALL</button></td>
                                                    :
                                                    <td>
                                                        {/* <button></button> */}
                                                    </td>
                                                    )
                                                    ))
                                                : 
                                                ""
                                            )
                                         ))
                                        }
                                    </tr>      
                                : ""
                             )

                            }
                            {commentsData.map((comment, indx) => (
                                <tr>
                                    {columns.map((column, colidx) => (
                                        ((showCheckbox == "true" && ((comment[column.field] == "true")||(comment[column.field] == "false"))) 
                                            ? <td><input type="checkbox" checked={(comment[column.field] == "true")} 
                                                onClick={() => {((comment[column.field] == "true") ? (changerows(indx, colidx, "false")) : (changerows(indx, colidx, "true")))}}    
                                                ></input></td>
                                            : <td>{comment[column.field]}</td>
                                        )                             
                                     ))
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                    <div className="row">
                    
                            <div className='pag-container'>
                                <label for="perpage">Rows per page:  </label>
                                    <select name="perpage" id="perpage" value={itemsPerPage} onChange={handleChange} >
                                        <option value="5">5</option>
                                        <option value="10">10</option>                            
                                        <option value="25">25</option>
                                    </select>
                                <Pagination
                                    total={totalItems}
                                    itemsPerPage={itemsPerPage}
                                    currentPage={currentPage}
                                    onPageChange={page => setCurrentPage(page)}
                                />
                            </div>
                        
                    </div>
                </div>
            {/* </div>             */}
        </>
    );
};

export default DataTable;