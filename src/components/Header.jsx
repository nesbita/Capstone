import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/Home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Products'>Products</Link>
                    </li>
                    
                    <li>
                        <Link to='/Checkout'>Cart</Link>
                    </li>
                </ul>    
            </nav>
        </div>
    )
}

export default Header;