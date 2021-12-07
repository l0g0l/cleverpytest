import React from 'react';


const Items = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = totalPosts / postsPerPage // numero de productos por página

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) { // Math.ceil devuelve el entero mayor o igual más próximo a un número dado.
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(number => ( // iteramos para que cuando pinche en el num de página, te lleve
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='javascript:void(0);' className='page-link'>
              {number}
            </a>
          </li>
        ))}
     
      </ul>
        <p className='text-muted credit'>Page {currentPage} of {totalPages}</p> 
       
    </div>
  );
};

export default Items;