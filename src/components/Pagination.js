import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const getLocalPageNumber = localStorage.getItem("currentPage");
    const gotoPrevPage = () => {
        if (getLocalPageNumber > 1) {
            const prevPage = parseInt(getLocalPageNumber) - 1;
            localStorage.setItem("currentPage", prevPage);
            paginate(prevPage);
        }
    };
    const gotoNextPage = () => {
        if (getLocalPageNumber < totalPosts / postsPerPage) {
            const nextPage = parseInt(getLocalPageNumber) + 1;
            localStorage.setItem("currentPage", nextPage);
            paginate(nextPage);
        }
    };

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <NavLink
                        onClick={() => gotoPrevPage()}
                        className="page-link"
                        to={`#!`}
                        aria-label="Previous"
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </NavLink>
                </li>
                {pageNumbers.map((number) => (
                    <div key={number}>
                        <li
                            className="page-item"
                        >
                            <NavLink
                                onClick={() => {
                                    paginate(number);
                                    localStorage.setItem("currentPage", number);
                                }}
                                className={`page-link ${
                                    parseInt(getLocalPageNumber) === number
                                        ? "bg-primary"
                                        : ""
                                }`}
                                to={`#!`}
                            >
                                {number}
                            </NavLink>
                        </li>
                    </div>
                ))}
                <li className="page-item">
                    <NavLink
                        onClick={() => gotoNextPage()}
                        className="page-link"
                        to={`#!`}
                        aria-label="Previous"
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
