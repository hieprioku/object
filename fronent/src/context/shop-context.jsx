import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const ShopContext = createContext(null);
const URI = 'http://localhost:8080/api/products';

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < 12; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, []);

    const [logged, setLogged] = useState(0);
    const loggedChanger = (value) => setLogged(value);

    const[admin, setAdmin] = useState(false);
    const adminChanger = (value) => setAdmin(value);

    const getProducts = async () => {
        const response = await axios.get(URI);
        setProducts(response.data);
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.precio;
            }
        }
        return totalAmount;
    };
    const addtocart = async (itemId) => {
        await axios.get('http://localhost:3000/api/products/' + itemId +'?f=book')
        .then(({ data }) => {
           data==='Booked'? detCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1})) : void (0);
            data==='Stockout'? alert("product") : void (0);
        })
        .catch(err => {
            console.log(err.message);
        })
    };

const removeFromCart = async (itemId) => {
    await axios.get('http://localhost:3000/api/products/' + itemId +'?f=book')
    .then(({ data }) => {
        data==='Unbooked'? detCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1})) : void (0);
    })
    .catch(err => {
        console.log(err.message);
    })
};
 const contextValue = {
     cartItems,
     products,
     logged,
     admin,
     addtocart,
     removeFromCart,
     getTotalCartAmount,
     loggedChanger,
     adminChanger
 };
 return(
    <ShopContext.Provider value={contextValue}>
         {props.children}
    </ShopContext.Provider>
 );
 };

 export default ShopContextProvider;