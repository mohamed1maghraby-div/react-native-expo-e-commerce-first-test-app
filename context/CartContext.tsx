import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, ReactNode, useCallback, useEffect } from "react";

export const CartContext = createContext<any>(null);

interface CartProviderProps {
    children: ReactNode;  // The component(s) that will consume the context value
}

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
  
    useEffect(() => {
        loadCartItems();
    }, []);

    const loadCartItems = async () => {
        let carts = await AsyncStorage.getItem("carts");
        carts = carts ? JSON.parse(carts) : [];
        setCarts(carts);
        totalSum(carts);
    }
    const addToCart = async (item) => {
        let isExist = carts.findIndex((cart) => cart.id === item.id);

        if (isExist === -1) {
            const newCartItems = [...carts, item];
            await AsyncStorage.setItem("carts", JSON.stringify(newCartItems));
            setCarts(newCartItems);
            totalSum(newCartItems);

        }
    }

    const deleteItemFromCart = async (item)=>{
        const newCartItems = carts.filter((cart) => cart.id!== item.id);
        await AsyncStorage.setItem("carts", JSON.stringify(newCartItems));
        setCarts(newCartItems);
        totalSum(newCartItems);
    }

    const totalSum = (carts) => {
        const totalSum = carts.reduce((amount, item)=> amount + item.price, 0);
        setTotalPrice(totalSum);
    }
    const value = {
        carts,
        addToCart,
        totalPrice,
        deleteItemFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}