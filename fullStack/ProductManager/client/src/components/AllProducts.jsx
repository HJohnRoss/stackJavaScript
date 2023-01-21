import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllProducts = (props) => {
  const { removeFromDom } = props

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/product/delete/${id}`)
    .then(res => {
      removeFromDom(id)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <h2>All Products:</h2>
      {
        props.allProducts.map((product, i) =>
          <div key={i}>
            <p><Link to={`/product/${product._id}`}>{product.title}</Link></p>
            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
          </div>)
      }
    </>
  )
}

export default AllProducts