const { createContext } = require("react");
import { useEffect, useState } from "react";
const recContext = createContext({
    recItems:{},
    addRecItem: async (item)=>{},
    init: async (data)=>{},
    removeRecItem: async (id)=>{},
});

export const RecContextProvider=(props)=>{
    
    const [recItems,setRecItems] = useState({});

    const initHandler=(data)=>{
        setRecItems(data);
    }
    const addItemHandler=async(item)=>{
        // const data = item.data
        if (item.type==="tag"){
            // recItems(prev=>[...prev,item.data])
            const newItem = recItems;
            newItem.tags.append(item.data)
            // setRecItems(prev=>{[...prev],item})
            setRecItems(newItem);
        }
        else if (item.type===price){
            const newItem = recItems;
            newItem.price = item.price;
            setRecItems(newItem);
        }
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
                init:initHandler,
                addRecItem: addItemHandler,
                removeRecItem: removeItemHandler,
            }
         }>
            {props.children}
        </recContext.Provider>
    );
};
export default recContext;