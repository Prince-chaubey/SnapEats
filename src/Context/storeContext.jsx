import { createContext } from "react";
import { food_list } from "../assets/assets";

export const contextStore = createContext();

export const ContextProvider = (props) => {
   
   
    return (
        <contextStore.Provider value={{food_list}}>
            {props.children}
        </contextStore.Provider>
    );
};
