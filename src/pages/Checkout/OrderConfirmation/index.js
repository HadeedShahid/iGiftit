import Card from "Components/UI/Card";
import { Fragment } from "react";
import styles from './OrderConfirmation.module.css'
// import CartItem from "Components/Cart/CartItem";
import OrderDetails from "Components/DeliveryInformation/OrderDetails";
import { useRouter } from 'next/router'

const OrderConfirmation=(props)=>{
    const router = useRouter()
    return(
        <Fragment>
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <Card classes={styles.Cartcard}>
                <div className={styles.greet}>Thankyou for shopping with us !</div>
                <div className={styles.placedsucc}>Your order has been placed successfully</div>
                <div className={styles.status}>You can check the status of your order in Profile &gt; My Orders</div>
                <OrderDetails orderConfirm={true} type='payment' prodData={props.productData} prodCost={props.cost}></OrderDetails>
                <button className={styles.backbtn} onClick={()=>{router.push('/Homepage')}}>Back to Shopping</button>
            </Card>
        </Fragment>
    );
}

export default OrderConfirmation;

export async function getServerSideProps(context) {
    const data = await JSON.parse(context.query.data);
    console.log('********',data)

    return {
        props: {
            productData:data,
            cost:Number(context.query.cost)
        }, // will be passed to the page component as props
      }
}