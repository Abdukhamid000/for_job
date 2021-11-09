import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination flex flex-items-center flex-wrap justify-center'>
                {pageNumbers.map(number => (
                    <li key={number} className='border-2 bg-blue-500'>
                        <a onClick={() => paginate(number)} href='!#' className='p-5'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;