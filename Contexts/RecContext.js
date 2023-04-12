const { createContext } = require("react");
import { useEffect, useState } from "react";
const recContext = createContext({
    recItems:[],
    addRecItem: async (item)=>{},
    removeRecItem: async (id)=>{},
});

export const RecContextProvider=(props)=>{
    
    const [recItems,setRecItems] = useState([]);

    const addItemHandler=async(item)=>{
        Array.isArray(item) ? setRecItems([...recItems, ...item]): setRecItems([...recItems, item])
    }
    const removeItemHandler=(id)=>{
       
    }

    useEffect(()=>{
        console.log("rect items", recItems)
    },[recItems])

    return (
        <recContext.Provider value={
            {
                recItems:recItems,
                addRecItem: addItemHandler,
                removeRecItem: removeItemHandler,
            }
         }>
            {props.children}
        </recContext.Provider>
    );
};
export default recContext;