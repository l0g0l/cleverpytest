import React, { useState } from 'react';
import Items from './Items';


const Pagination = ({posts}) => {
const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage] = useState(10)

  console.log(posts);

  // get current postsd
  const indexOfLastPost = currentPage * postsPerPage; // 1* 10  Para marcar el final de los cuadraditos 
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // el final de los cuadraditos - 10
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // a todos los products le indico (del primero al ultimo)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber); 
    return (
         <div className='container mt-5'>
      <Items
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage} />
      
    </div>
    )
}

export default Pagination
