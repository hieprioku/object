import React, {useContext} from 'react';
import { ShopContext } from "../../context/shop-context";
import { CartItem } from './cart-item'; 
import "./cart.css"; 
import { useNavigate } from 'react-router-dom' 
import axios from 'axios';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const URI = 'http://localhost:8080/api/users/cart';

export const Cart = () => {
    const context = useContext(ShopContext);
    const { cartItems, getTotalCartAmount } = useContext(ShopContext); 
    const totalAmount = getTotalCartAmount(); 
    const navigate = useNavigate();

    const[products, setProducts] = useState([])
    const userCookie = Cookies.get('user');
    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        const res = await axios.get(URI)
        setProducts(res.data)
    }

    const buy = async (e) => {
        e.preventDefault();
        console.log(cartItems);
        await axios.put(URI + 'buy', {
            "1": cartItems[1],
            "2": cartItems[2],
            "3": cartItems[3],
            "4": cartItems[4],
            "5": cartItems[5],
            "6": cartItems[6],
            "7": cartItems[7],
            "8": cartItems[8],
            "9": cartItems[9],
            "10": cartItems[10],
        })
        .then((res) => {
            alert(res);
        }).catch((err) => {
            alert(err.message)
        });
        context.setPayAumount(totalAmount); 
        navigate('/stripe');
    }

    return (
        <div className="cart">
            <div> 
                <h1> Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>
            {totalAmount > 0 ? 
            <div className="checkout">
                <p> Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate ("/shop")}> Continue Shopping</button>
                <button onClick={buy}> Checkout </button>
            </div>
            : <h1> Your Cart is Empty </h1>}
        </div>
    )
};