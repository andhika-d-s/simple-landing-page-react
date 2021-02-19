import React from 'react'
import ListProduct from './ListProduct'
import './product.css'

function Product() {
    return (
        <div className="product" id="product">
            <div className="title-product">
                <h4>See Our</h4>
                <h1>Menu</h1>
            </div>
            <ListProduct />
            <br/>
        </div>
    )
}

export default Product
