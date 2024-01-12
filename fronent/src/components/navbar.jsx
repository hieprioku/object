import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import {ShopContext} from "../context/shop-context";

const Navbar = () => {
    const context = useContext(ShopContext);

    return (
        <div className='navbar'>
            {!context.admin ?
                !context.logged?
                <div className='links'>
                    <Link to="/">Shop</Link>
                    <Link to="/login">
                        <ShoppingCart size={32}/>
                    </Link>
                </div>
                :
                <div className='links'>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">
                        <ShoppingCart size={32}/>
                    </Link>
                </div>
                :
                <div className='links'>
                    <Link to="/editInventory">Product</Link>
                    <Link to="/editAdmin">Admin Profile</Link>
                </div>
            }
        </div>
    )
};
 export default Navbar;