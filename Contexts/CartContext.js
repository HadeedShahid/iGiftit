import { createContext, useContext,useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
const userCartContext = createContext({
  cartItems:[],
  totalAmount: ()=>{},
  addCartItem: async (item)=>{},
  removeCartItem: async (id)=>{},
  clearCart: async()=>{},
  decrementQuantity:async (idx)=>{},
  updateCart:async(items)=>{},
});

export const CartContextProvider=(props)=>{
    
    const [cartItems,setCartItems] = useState();
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
        await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Cart/setCartItem`,options).then(res=>{res.json()}).then(data=>{
            if (data){console.log("success")}
        })
    }

    const decrementQuantityHandler=async(idx)=>{
        const updatedItems = [...cartItems];
        const key = Object.keys(updatedItems[idx])[0]
        // console.log("key",key)
        // console.log("items", updatedItems[idx][key].quantity)
        
        if (updatedItems[idx][key].quantity-1==0){
            updatedItems.splice(idx, 1);
        }
        else{updatedItems[idx][key].quantity = updatedItems[idx][key].quantity-1;}
        setCartItems(updatedItems);
        console.log("updated items",updatedItems)
        updateCartHandler(updatedItems)

    }
    const updateCartHandler=async(items)=>{
        const email = session.user.email;
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:email,cartitem:items})
        }
        console.log("the bozyyy",options.body)
        await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Cart/setCartItem`,options).then(res=>{res.json()}).then(data=>{
            if (data){console.log("success")}
        })
    }

    const clearCartHandler=async()=>{
        const email = session.user.email;
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:email})
        }
        fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Cart/emptyCart`,options)
        .then((response) => response.json())
        .then((data) => { setCartItems(data.cartItems);console.log("empty cart",data.cartItems)});

    }

    const loadCartHandler=async ()=>{
        const email = session.user.email;
        console.log(email);
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:email})
        }
        fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Cart/getCartItems`,options)
        .then((response) => response.json())
        .then((data) => { setCartItems(data.cartItems);console.log("fetched data",data.cartItems)});
    }
    const removeItemHandler=(id)=>{
        (el)=>{ setCartItems(
            cartItems.filter(function(el) { return el.Name != "Kristian"; })
        )}
    }

    const totalAmountHandler=async()=>{

        if (cartItems){
            let cost = 0
            const options={
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({items:cartItems})
            }
            const productNames =  await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Cart/getCartItemsDetail`,options)
            .then((response) => response.json())
            .then((data) =>
                {
                    // data.cartItems
                    // console.log(ctx.cartItems)
                    data.cartItems.forEach(function (value, i) {
                        const it = (cartItems[i])
                        // console.log("it",it)
                        const alias = Object.values(it)[0]
                        cost+=value.price*Object.values(cartItems[i])[0].quantity
                    });
                    // console.log("final",final)
                }
            );
            // console.log(cost)
            return cost
        }
        return 0;





        // if (cartItems){
        //     cartItems.forEach(function (arrayItem) {
        //         cost+=arrayItem.price
        //         console.log(arrayItem)
        //     });
        //     console.log(cost)
        // }
        // return cost
       
          
    }
    useEffect(()=>{
        session ? loadCartHandler() : undefined
    },[session])

    return (
        <userCartContext.Provider value={
            {cartItems:cartItems,
            addCartItem: addItemHandler,
            removeCartItem: removeItemHandler,
            totalAmount:totalAmountHandler,
            clearCart:clearCartHandler,
            decrementQuantity:decrementQuantityHandler,
            updateCart:updateCartHandler}
         }>
            {props.children}
        </userCartContext.Provider>
    );
};
export default userCartContext;