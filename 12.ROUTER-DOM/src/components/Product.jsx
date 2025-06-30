import React from 'react'

function Product({product}) {
    const {id,name,price} = product;
  return (
    <div style={{marginBottom:"40px" , backgroundColor: 'lightgray'}}>
    <div>Ürün Detayı</div>
    <h3>İsim : {name}</h3>
    <h3>Fiyatı : {price}</h3>
    </div>
  )
}

export default Product