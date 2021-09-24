import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
                // console.log('Products received');
            });
    }, []);

    useEffect(() => {
        // console.log('local storage called ');
        const savedCart = getStoredCart();
        const storedCart = [];
        //if products. length is positive > 0 then it will call the for loop
        if (products.length) {
            for (const key in savedCart) {
                // console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                // console.log(key, addedProduct);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct);
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

        //local storage will be called again here
    }, [products]);

    //handling cart
    const handleAddToCart = (product) => {
        //taking value of cart array using spread operator
        const newCart = [...cart, product];
        setCart(newCart);
        // save the key to product storage
        addToDb(product.key)
    }

    const handleInputChange = event => {
        const searchText = (event.target.value);
        const matchedProducts = products.filter(product => product.name.includes(searchText));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }

    return (
        // <>fragment o use kora jay  </>   \\  [div , div  ,div] 
        <div>
            <div className='search-container'>
                <input
                    onChange={handleInputChange}
                    className='search-input'
                    type='text'
                    placeholder='search your products'
                ></input>
            </div>
            <div className='shop-container'>
                <div className='product-container'>
                    <h3>Products: {displayProducts.length}</h3>
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >

                        </Product>)
                    }
                </div>
                <div className='cart-contaioner'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;