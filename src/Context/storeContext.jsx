import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const contextStore = createContext();

export const ContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addCart = (id) => {
    setCartItem((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  const removeCart = (id) => {
    setCartItem((prev) => {
      if (!prev[id]) return prev; 
      const updated = { ...prev, [id]: prev[id] - 1 };
      if (updated[id] === 0) {
        delete updated[id]; 
      }
      return updated;
    });
  };

  return (
    <contextStore.Provider value={{ food_list, cartItem, addCart, removeCart }}>
      {props.children}
    </contextStore.Provider>
  );
};
