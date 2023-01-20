import React from 'react'
import {Link} from 'react-router-dom'

const AllProducts = (props) => {
  return(
    <>
      <h2>All Products:</h2>
      {
        props.allProducts.map((product, i) => 
          <p key={i}><Link to={`/product/${product._id}`}>{product.title}</Link></p>)
      }
    </>
  )
}

export default AllProducts