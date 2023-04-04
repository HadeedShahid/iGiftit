import styles from './Cart.module.css';
import CartItem from './CartItem';
import Card from 'Components/UI/Card';
import { Fragment, useContext, useEffect, useState } from 'react';
import userCartContext from 'Contexts/CartContext';
const Cart=(props)=>{


    //const ctx = useContext(userCartContext)
    //fetch data
    const ctx = useContext(userCartContext);
    const [productData,setProductData] = useState();
    const [total,setTotal] = useState(0);


    useEffect(()=>{
        console.log("in use effect")
        const fetchData = async () => {
            let cost = 0
            console.log("In console",cost)
            const options={
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({items:ctx.cartItems})
            }

            await fetch("http://localhost:3000/api/Cart/getCartItemsDetail",options)
            .then((response) => response.json())
            .then((data) => setProductData(
                ()=>{
                    // data.cartItems
                    let final = []
                    cost=0;
                    // console.log(ctx.cartItems)
                    data.cartItems.forEach(function (value, i) {
                        const it = (ctx.cartItems[i])
                        // console.log("it",it)
                        const alias = Object.values(it)[0]
                        // console.log("alias",alias) 
                        cost += Number(value.price*alias.quantity)
                        final.push({
                            image:(value.images)[0],
                            name:value.name,
                            price : value.price,
                            color : alias.color ? alias.color : undefined,
                            quantity : alias.quantity,
                            sizes : alias.sizes ? alias.sizes:undefined,
                            wrap : alias.wrap ? alias.wrap:undefined,
                            card : alias.card ? alias.card:undefined,
                        })
                    });
                    console.log("cost",cost)
                    setTotal(cost);
                    return final
                    // console.log("final",final)
                }
            ));
        }
        fetchData();  
        // console.log(productData)          
    },[])

    return (
        <Fragment>
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <div className={styles.cont}>
                <div className={styles.yourCart}>Your Cart</div>
                <Card classes={styles.card}>
                    {productData ? productData.map((item)=>{
                        // console.log("doning",item);
                        return <CartItem key={Math.random()} data={item}></CartItem>
                    })  : undefined}
                </Card>
                <div className={styles.total}>Cart Total: Rs. {total}<span>Excluding Delivery Charges</span></div>
                <button className={styles.checkout}>Proceed to Checkout</button>
            </div>
            
        </Fragment>
    );
}
export default Cart;