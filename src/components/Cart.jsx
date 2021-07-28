import React from 'react'
import Axios from 'axios'

// import { setState } from 'react';

// const apiURL = 'http://localhost:5000'
// const { useState, useEffect } = React;

const Cart = () => {
    // const [products, setProducts] = useState([]);
    // axios
    //     .get(apiURL)
    //         .then((response) => {
    //             setState(response.message);
    //         })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // useEffect(() => {
    //     setTimeout(() => {
    //         setProducts([{ id: 0, name: '', description: ''}, { id: 1, content: '', name: '', description: ''}]);
    //         console.log(products);
    //     }, 4);
    // }, []);
    return (
        <div class = 'cartContainer'>
            <h1>
                Items in Cart
            </h1>
            <ul>
                <li>Sunflower Varieties  $25</li>
            </ul>
           {/* <div>{products.map(products => <div key={products.id}>{products.content}</div>)}</div> */}
        </div>
    )
}

export default Cart;