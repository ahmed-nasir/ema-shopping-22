import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log('Product load first befor fetch')
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log('Products loaded')
            })
    }, [])

    useEffect(() => {
        console.log('Local Storage first line', products)
        const storedCart = getStoredCart()
        const savedCart =[];
        // console.log(storedCart)
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
        // console.log(' local Storage finished')
    }, [products])

    const handelAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;