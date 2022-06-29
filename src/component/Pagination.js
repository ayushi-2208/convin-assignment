import React from 'react'

const Pagination = ({ totalUsers, onClickAction }) => {

  const pageNumbers = [];
  for (let index = 1; index <= totalUsers; index++) {
    pageNumbers.push(index);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => onClickAction(number)} href="!#" className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Pagination