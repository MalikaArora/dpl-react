import React, { useEffect, useState, useMemo } from "react";
import Checkbox from './Checkbox';
import TableHeader from "./TableHeader";
import Search from "./Search";
import Pagination from "./Pagination";
import './datatable.css';


const DataTable = (props) => {
    var count=0;
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

    /* checkbox */
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(comments);
    }, [list]);

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    console.log(isCheck);
    const catalog = list.map(({ id, name }) => {
        return (
            <>
                <Checkbox
                    key={id}
                    type="checkbox"
                    name={name}
                    id={id}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(id)}
                />
                {name}
            </>
        );
    });

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
                            headers={columns}
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
                                        : (item.check ? (

                                            <td>
                                                <div>
                                                    {/* <Checkbox
                                                        type="checkbox"
                                                        name="selectAll"
                                                        id="selectAll"
                                                        handleClick={handleSelectAll}
                                                        isChecked={isCheckAll}
                                                    /> */}

                                                    <input
                                                        type="checkbox"
                                                        name="selectAll"
                                                        id="selectAll"
                                                        onChange={handleSelectAll}
                                                        checked={isCheckAll}
                                                    />
                                                    Select All                                                </div>
                                            </td>
                                        )

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
                                        ))
                                ))}
                            </tr>
                            {commentsData.map(comment => (
                                <tr>
                                    {columns.map(column => (
                                        column.check ?
                                        <td>
                                                <>
                                                
                                                    {/* <Checkbox
                                                        key={comment.id}
                                                        type="checkbox"
                                                        name={comment.name}
                                                        id={comment.id}
                                                        handleClick={handleClick}
                                                        isChecked={isCheck.includes(comment.id)}
                                                        // isChecked={true}
                                                        // isChecked={comment.choices || isCheck.includes(comment.id)}
                                                    /> */}

                                                    <input
                                                        key={comment.id}
                                                        type="checkbox"
                                                        name={comment.name}
                                                        // id={comment.id}
                                                        onChange={handleClick}
                                                        checked={isCheck.includes(comment.id)}
                                                        // isChecked={true}
                                                        // isChecked={comment.choices || isCheck.includes(comment.id)}
                                                    />
                                                    {comment.name}
                                                    </>
                                                </td> :
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