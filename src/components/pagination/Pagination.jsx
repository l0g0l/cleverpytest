import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Items from '../../Pagination/products/items';


const Pagination = () => {
const [posts, setPosts] = useState([])
const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/products')
      setPosts(res.data);
      console.log(res.data);
     
    }

    fetchPosts()
  }, []);
  console.log(posts);

  // get current postsd
  const indexOfLastPost = currentPage * postsPerPage; // 1* 10  Para marcar el final de los cuadraditos 
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // el final de los cuadraditos - 10
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // a todos los products le indico (del primero al ultimo)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber); 
    return (
         <div className='container mt-5'>
      {/* <ProductTable products={currentPosts} /> */}
      <Items
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage} />
      
    </div>
    )
}

export default Pagination
