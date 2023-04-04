// import CheckoutCard from '../UI/checkoutCard';
import styles from './OrderDetails.module.css';
import Card from '../UI/Card';
import CartItem from 'Components/Cart/CartItem';
import { useContext,useState} from 'react';
import userCartContext from 'Contexts/CartContext';
const OrderDetails=(props)=>{
    const ctx = useContext(userCartContext);

    // useEffect(()=>{
    //     console.log("in use effect",ctx.cartItems)
    //     const fetchData = async () => {
    //         let cost = 0
    //         const options={
    //             method:"POST",
    //             headers:{'Content-Type':'application/json'},
    //             body:JSON.stringify({items:ctx.cartItems})
    //         }

    //         await fetch("http://localhost:3000/api/Cart/getCartItemsDetail",options)
    //         .then((response) => response.json())
    //         .then((data) => setProductData(
    //             ()=>{
    //                 // data.cartItems
    //                 let final = []
    //                 cost=0;
    //                 // console.log(ctx.cartItems)
    //                 data.cartItems.forEach(function (value, i) {
    //                     const it = (ctx.cartItems[i])
    //                     // console.log("it",it)
    //                     const alias = Object.values(it)[0]
    //                     cost += Number(value.price*alias.quantity)
    //                     // console.log("alias",alias) 
    //                     final.push({
    //                         image:(value.images)[0],
    //                         name:value.name,
    //                         price : value.price,
    //                         color : alias.color ? alias.color : undefined,
    //                         quantity : alias.quantity,
    //                         sizes : alias.sizes ? alias.sizes:undefined,
    //                         wrap : alias.wrap ? alias.wrap:undefined,
    //                         card : alias.card ? alias.card:undefined,
    //                     })
    //                 });
    //                 setTotal(cost);
    //                 return final
    //                 // console.log("final",final)
    //             }
    //         ));
    //     }

    //     ctx.cartItems ? fetchData():undefined;  
    //     // console.log(productData)          
    // },[ctx.cartItems])
    
    const deliveryTotal = <div className={styles.total}>Order Total: Rs. {props.prodCost}</div>
    const paymentTotal = 
    <Card classes={styles.Card}>
                <div className={styles.PaymentTotalOrder}>Order Total : Rs. {props.prodCost}</div> 
                <div className={styles.PaymentTotalOrder}>Total Charges : Rs. {props.prodCost} + 200 <span className={styles.Charges}>( Delivery Charges )</span></div>
                <div className={styles.Total}>Total : Rs. {props.prodCost+200}</div> 
    </Card>
    return(
        <div className={styles.OuterCard}>
            {props.orderConfirm ? undefined : <div className={styles.title}>Order Details</div>}
            <div className={styles.CardWrap}>
                    <Card classes={styles.Cartcard}>
                        {props.prodData ? props.prodData.map((item)=>{
                            // console.log("doning",item);
                            return <CartItem key={Math.random()} data={item}></CartItem>
                        })  : undefined}
                    </Card>
                    {/* <div className={styles.total}>Order Total: Rs. {total}</div> */}
            </div>
            {props.type==='payment' ? paymentTotal : deliveryTotal}
            
        </div>
    );
};
export default OrderDetails;