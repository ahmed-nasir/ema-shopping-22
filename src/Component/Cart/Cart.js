import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let shipping=0;
    let tax=0;
    let grandTotal=0;
    for (const product of cart) {
        console.log(product.price)
        total = total+product.price;
        shipping =shipping+product.shipping;
        tax=total*0.1;
        grandTotal=total+shipping+tax;
    }
    return (
        <div className='cart'>
            <h1>
                Order summery
            </h1>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p><strong>Grand Total:${grandTotal}</strong></p>
        </div>
    );
};

export default Cart;