import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'

import Products from './Products'
import '../App.css'


const Home = () => {
  return (
    <div>
            <h1>Welcome to the Farm!</h1>
    <div className='homeContainer'>
    </div>
    </div>
  );
}

export default Home;
