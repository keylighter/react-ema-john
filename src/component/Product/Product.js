import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props)
    const { name, img, price, stock, seller, star } = props.product;
    // console.log(props.product)
    // font awsome cartIcon 
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    //// adding rating icons inside return
    //<Rating />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>Product : {name} </h4>
                <p><small>by: {seller}</small></p>
                <p>Price : {price}</p>
                <p><small>only {stock} left in stock - order soon </small></p>
                <Rating
                    initialRating={star}
                    className='icon-color'
                    emptySymbol="far fa-star "
                    fullSymbol="fas fa-star "
                    readonly />
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className="purchase-button">{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;