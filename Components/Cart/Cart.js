import styles from './Cart.module.css';
import CartItem from './CartItem';
import Card from 'Components/UI/Card';
import { Fragment, useContext, useEffect, useState } from 'react';
import userCartContext from 'Contexts/CartContext';
import LoadingSpinner from 'Components/Spinner/Spinner';
import { useRouter } from 'next/router';
const Cart=(props)=>{

    const router = useRouter();
    //const ctx = useContext(userCartContext)
    //fetch data
    const ctx = useContext(userCartContext);
    const [productData,setProductData] = useState();
    const [total,setTotal] = useState(0);
    const [loading,setIsLoading] = useState(true)

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

            await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Cart/getCartItemsDetail`,options)
            .then((response) => response.json())
            .then((data) => {setProductData(
                ()=>{
                    // data.cartItems
                    let final = []
                    cost=0;
                    // console.log(ctx.cartItems)
                    data.cartItems.forEach(function (value, i) {
                        const it = (ctx.cartItems[i])
                        // console.log("it",it)
                        const alias = Object.values(it)[0]
                        // console.log("alias",value.id) 
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
                    console.log("cost",final)
                    setTotal(cost);
                    return final
                    // console.log("final",final)
                }
            );setIsLoading(false)}).catch(error => {
                console.log(error);
                setIsLoading(false);
            });
        }
        fetchData();  
        // console.log(productData)          
    },[ctx.cartItems])

    
    return (
        <Fragment>
            {loading ? <LoadingSpinner></LoadingSpinner> : undefined}
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <div className={styles.cont}>
                <div className={styles.yourCart}>Your Cart</div>
                <Card classes={styles.card}>
                    {productData ? productData.map((item,idx)=>{
                        console.log("doning",item);
                        // console.log("idx",idx);
                        return <CartItem cart={1} onCross={()=>{
                            ctx.decrementQuantity(idx)
                        }}  key={Math.random()} data={item}></CartItem>
                    })  : undefined}
                </Card>
                <div className={styles.total}>Cart Total: Rs. {total}<span>Excluding Delivery Charges</span></div>
                <button className={styles.checkout} onClick={()=>{router.push('/Checkout')}}>Proceed to Checkout</button>
            </div>
            
        </Fragment>
    );
}
export default Cart;