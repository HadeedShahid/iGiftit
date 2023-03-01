import { createContext, useContext, Context } from 'react'

const userCartContext = createContext({
  cartItems:[],
  totalAmount:0,
  addCartItem: async (item)=>{},
  removeCartItem: async (id)=>{},
});

export const cartContextProvider=(props)=>{

    const addItemHandler=(item)=>{
        (item)=>{ setCartItems(...cartItems,item)
        }
    }
    const removeItemHandler=(id)=>{
        (el)=>{ setCartItems(
            cartItems.filter(function(el) { return el.Name != "Kristian"; })
        )}
    }
    const [cartItems,setCartItems] = useState([]);
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