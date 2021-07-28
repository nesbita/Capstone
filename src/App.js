import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Products from './components/Products'
import Home from './components/Home'
import './App.css'
import axios from 'axios'

const App = () => {
    return (
      <div>
       
        <Router> 
           <Header />
              
            <Route exact path='/' component={Home} />
  
            <Route path='/Products' component={Products} />

            <Route path='/Cart' component={Cart} />
  
  
        </Router>
      </div>
    );
  }
  
  export default App;