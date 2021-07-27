import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'

import Products from './Products'
import '../App.css'


const Home = () => {
  return (
    <div>
     
      <Router> 
         <Header />
            <h1>Welcome to the Farm!</h1>
          <Route exact path='/' component={Home} />

          <Route path='/Products' component={Products} />


      </Router>
    </div>
  );
}

export default Home;
