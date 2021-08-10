import React, { useEffect, useState, useMemo } from "react";

import TableHeader from "./TableHeader";
import Search from "./Search";
import Pagination from "./Pagination"; 
import './datatable.css';


const DataTable = (props) => {
    const { columns } = props;
    const { rows } = props;
    const [comments, setComments] = useState([]);
    
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [searchField, setSearchField] = useState("");
    
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 50;

    useEffect(() => {
        setComments(rows);
    }, []);
    

    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            
            computedComments = computedComments.filter(
                comment =>
                    comment[searchField].toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(computedComments.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );        
    }, [comments, currentPage, search, sorting]);

    return (
        <>
            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        
                    </div>

                    <table className="table table-striped">
                        <TableHeader
                            headers={ columns }
                            onSorting={(field, order) =>
                                setSorting({ field, order })
                            }
                        />
                        <tbody>
                            {/* <tr>
                                {columns.map((item, itemindex) => (
                                    <td>
                                        <Search
                                            onSearch={value => {
                                                setSearch(value);
                                                setSearchField(item.field);
                                                setCurrentPage(1);
                                            }}
                                        />
                                    </td>            
                                ))}
                            </tr> */}
                            <tr>
                                {columns.map((item, itemindex) => (
                                  (item.bools ? 
                                    <td>
                                        <label>
                                          <input type="radio" 
                                            name="tue"
                                            onClick={() => {
                                            
                                                setSearch("true");
                                                setSearchField(item.field);
                                                setCurrentPage(1);
                                            }}
                                            //checked={}
                                          ></input>
                                          true
                                        </label>
                                        <label>
                                          <input type="radio" 
                                            name="tue"
                                            onClick={() => {
                                                
                                                setSearch("false");
                                                setSearchField(item.field);
                                                setCurrentPage(1);
                                            }}

                                          ></input>
                                          false
                                        </label>
                                    </td>
                                    : 
                                    <td>
                                        <Search
                                            onSearch={value => {
                                                setSearch(value);
                                                setSearchField(item.field);
                                                setCurrentPage(1);
                                            }}
                                        />
                                    </td>
                                  )               
                                ))}
                            </tr>
                            {commentsData.map(comment => (
                                <tr>
                                    {columns.map(column => (
                                        <td>{comment[column.field]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    );
};

export default DataTable;