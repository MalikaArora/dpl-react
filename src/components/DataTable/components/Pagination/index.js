import React, { useEffect, useState, useMemo } from "react";
// import Pagination from "react-bootstrap/Pagination";
// import { DivOverlay } from "react-leaflet";
import './Pagination.css';

const PaginationComponent = ({
    total = 0,
    itemsPerPage = 10,
    currentPage = 1,
    onPageChange
}) => {
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (total > 0 && itemsPerPage > 0)
            setTotalPages(Math.ceil(total / itemsPerPage));
    }, [total, itemsPerPage]);

    const paginationItems = useMemo(() => {
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <div className={`pag-item  ${currentPage===i ? 'pag-active' : ''}`}
                    key={i}
                    active={i === currentPage}
                    onClick={() => onPageChange(i)}
                >
                    <div>{i}</div>
                </div>
            );
        }

        return pages;
    }, [totalPages, currentPage]);

    if (totalPages === 0) return null;

    return (
        <div className='pag-container'>
            <button className='pag-prev'
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                prev
            </button>
            {paginationItems}
            <button className='pag-next'
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >next</button>
        </div>
    );
};

export default PaginationComponent;
