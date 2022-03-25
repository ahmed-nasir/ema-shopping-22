import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({ handelAddToCart, product }) => {
    // const { handelAddToCart, product } = props
    const { name, img, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p>Pirce: ${price}</p>
                <p><samll>Seller</samll>: {seller}</p>
                <p><small>Ratings:</small> {ratings}</p>
            </div>
            <button onClick={() => handelAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;