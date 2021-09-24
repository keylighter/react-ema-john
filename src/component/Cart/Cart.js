import React from 'react';
import './Cart.css'
const Cart = (props) => {

    //attention here cart is an array!!!!
    // console.log(props.cart);
    const { cart } = props;
    // console.log(cart);

    // total qunatity 

    let totalQuantity = 0;


    //use of reducer !!! 
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    // const newTotal = (total);

    let total = 0;
    let newTotal;
    for (const product of cart) {
        // product. quantity na thakle 1 hobe nahole ulta 
        product.quantity = product.quantity ? product.quantity : 1;
        total = total + product.price * product.quantity;
        newTotal = (total);
        totalQuantity = totalQuantity + product.quantity;

    }
    //shipping cost if total is greater tham 0 
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = (newTotal + shipping + tax);



    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Order : {totalQuantity} </h5>
            <p>Total : {newTotal}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal}</p>

        </div>
    );
};

export default Cart;