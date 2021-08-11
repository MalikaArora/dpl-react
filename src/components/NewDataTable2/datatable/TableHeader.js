import React, { useState } from "react";
import './TableHeader.css';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const TableHeader = ({ headers, isSortable, onSorting  }) => {
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

    if ( isSortable == "true")
    {return (
        <thead>
            <tr>
                {headers.map(({ name, field, sortable }) => (
                    <th
                        key={name}
                        onClick={() =>
                            sortable ? onSortingChange(field) : null
                        }
                        className = "tableheader"
                    >
                        {name}
                        
                        {sortingField && sortingField === field && (
                            (sortingOrder === "asc") ? <AiOutlineArrowUp></AiOutlineArrowUp> : <AiOutlineArrowDown></AiOutlineArrowDown>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
     );
    }
    else
    {return (
        <thead>
            <tr>
                {headers.map(({ name, field, sortable }) => (
                    <th key={name} >
                        {name}                        
                    </th>
                ))}
            </tr>
        </thead>
     );

    }
};

export default TableHeader;