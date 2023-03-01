import { createContext, useContext, Context,useState } from 'react'

const userCartContext = createContext({
  cartItems:[],
  totalAmount:0,
  addCartItem: async (item)=>{},
  removeCartItem: async (id)=>{},
});

export const CartContextProvider=(props)=>{
    
    const [cartItems,setCartItems] = useState([]);

    const addItemHandler=(item)=>{
        console.log("setting item", item);
        const newArray = [...cartItems,item]
        console.log(newArray)
        setCartItems(newArray)
    }
    const removeItemHandler=(id)=>{
        (el)=>{ setCartItems(
            cartItems.filter(function(el) { return el.Name != "Kristian"; })
        )}
    }
    return (
        <userCartContext.Provider value={
            {cartItems:cartItems,
            addCartItem: addItemHandler,
            removeCartItem: removeItemHandler}
         }>
            {props.children}
        </userCartContext.Provider>
    );
};
export default userCartContext;