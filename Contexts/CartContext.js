import { createContext, useContext, Context,useState } from 'react'
import { useSession } from 'next-auth/react';
const userCartContext = createContext({
  cartItems:[],
  totalAmount:0,
  addCartItem: async (item)=>{},
  removeCartItem: async (id)=>{},
});

export const CartContextProvider=(props)=>{
    
    const [cartItems,setCartItems] = useState([]);
    const { data: session } = useSession()
    const addItemHandler=async(item)=>{
        console.log("setting item", item);
        const newArray = [...cartItems,item]
        console.log(newArray)
        setCartItems(newArray)

        const email = session.user.email;
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:email,cartitem:newArray})
        }
        console.log("the bozyyy",options.body)
        await fetch('http://localhost:3000/api/Cart/setCartItem',options).then(res=>{res.json()}).then(data=>{
            if (data){console.log("success")}
        })
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