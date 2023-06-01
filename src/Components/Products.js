import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/products'

const Products = () => {
  const products = useSelector(getProducts)
  console.log(products)
  const dispatch = useDispatch()


  const handleFetchUsers = () => {
    dispatch({type: "FETCH_PRODUCTS"})
    }


  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <button onClick={handleFetchUsers}>Fetch Products</button>
        {products.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
    </div>
  )
}

export default Products