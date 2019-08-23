import React from 'react'
import './ProductCard.css'

const ProductCard = props => {
    const { name, price, id } = props
    return (
        <div className='product-card container'>
            <div>
                <p className='product-card label' key={id}>{name}</p>
                <p className='product-card label' key={id}>${price}</p>
            </div>
        </div>
    )
}

export default ProductCard
