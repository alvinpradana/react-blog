import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <div key={number}>
                        <li className="page-item">
                            <a
                                onClick={() => paginate(number)}
                                className="page-link"
                                href="#!"
                            >
                                {number}
                            </a>
                        </li>
                    </div>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
