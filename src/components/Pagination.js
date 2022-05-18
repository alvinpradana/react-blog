import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a  className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pageNumbers.map((number) => (
                    <div key={number}>
                        <li className="page-item">
                            <NavLink
                                onClick={() => {
                                    paginate(number);
                                    localStorage.setItem("currentPage", number);
                                }}
                                className="page-link"
                                to={`#!`}
                            >
                                {number}
                            </NavLink>
                        </li>
                    </div>
                ))}
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
