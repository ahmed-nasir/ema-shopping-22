import React from 'react';

const Cart = ({cart}) => {
    // const cart = props.cart;
    return (
        <div>
            <h1>
                Order summery
            </h1>
            <p>Selected items: {cart.length}</p>
        </div>
    );
};

export default Cart;