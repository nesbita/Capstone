import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Header = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Products'>Products</Link>
                    </li>
                    
                    <li>
                        <Link to='/Cart'>Cart</Link>
                    </li>
                </ul>    
            </nav>
        </div>
    )
}

export default Header;