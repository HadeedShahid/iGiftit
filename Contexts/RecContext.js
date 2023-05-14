const { createContext } = require("react");
import { useEffect, useState } from "react";
const recContext = createContext({
    recItems:{},
    ques:{},
    change:false,
    addRecItem: async (item)=>{},
    init: async (data,ques)=>{},
    removeRecItem: async (id)=>{},
    questions: async (data)=>{},
    addTag: async(item)=>{},
    changed:async()=>{},
    changePrice:async(type)=>{}
});

export const RecContextProvider=(props)=>{
    
    const [recItems,setRecItems] = useState({});
    const [ques,setQues] = useState();
    const [change,setChange] = useState(false);

    const changePriceHandler=(type)=>{
                // console.log("updating price",JSON.stringify({...recItems, price:[recItems.price[0],recItems.price[1]+500]}))
                if (type==="incless"){
                    setRecItems(prev=>{return {...prev, price:[prev.price[0]+500,prev.price[1]]}});
                }
                else if (type==="incmore"){
                    // if (recItems.price[0]===0){
                    //     return
                    // }
                    setRecItems(prev=>{return {...prev, price:[prev.price[0],prev.price[1]+500]}});
                }
                else if(type==='decless'){
                    if (recItems.price[0]===0){
                            return
                    }
                    setRecItems(prev=>{return {...prev, price:[prev.price[0]-500,prev.price[1]]}});
                }
                else if(type==='decmore'){
                    setRecItems(prev=>{return {...prev, price:[prev.price[0],prev.price[1]-500]}});
                }

    }
    const initHandler=(data,ques)=>{
        setRecItems(data);
        setQues(Object.values(ques).flatMap((arr) => arr))
        
        // console.log("ques",)
    }
    const changedHandler=()=>{
        change ? setChange(false):setChange(true)
    }
    const addTagHandler=async(item)=>{
        console.log("adding")
        // const newItem = recItems;
        // newItem.tags.push(item)
        // console.log("added",newItem)
        setRecItems(prev=>{return {...prev, tags:[...prev.tags,item]}});
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
                ques:ques,
                change:change,
                init:initHandler,
                addRecItem: addItemHandler,
                removeRecItem: removeItemHandler,
                addTag: addTagHandler,
                changed:changedHandler,
                changePrice:changePriceHandler
            }
         }>
            {props.children}
        </recContext.Provider>
    );
};
export default recContext;