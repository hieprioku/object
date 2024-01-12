import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, nombre, precio, descripcion, img1, img2, img3 } = props.data;
    const { addToCart, cartItems} = useContext(ShopContext); 

    const cartItemAmount = cartItems[id];
    return (
        <div className="product">
            <div className="slide-var"> 
                <ul>
                    <li><img src={img1} alt={nombre}/></li>
                    <li><img src={img2} alt={nombre}/></li>
                    <li><img src={img3} alt={nombre}/></li>
                </ul>
            </div>
            <div className="descripcion">
                <p>{descripcion}</p>
            </div>
            <div className="description"> 
                <p> 
                    <b>{nombre}</b> 
                </p>
                <p> ${precio}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}> 
                Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>} 
            </button>
        </div> 
    );
};