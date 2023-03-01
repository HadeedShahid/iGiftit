import CheckoutCard from '../UI/checkoutCard';
import styles from './OrderDetails.module.css';
import Card from '../UI/Card';
const OrderDetails=(props)=>{
    const data={
        Image:'static/images/icons/Teddy.png',
        Name:'Teddy Bear',
        Price:'Rs. 20,000',
        Color:'Grey',
        Wrap: true,
        Card: false,
    }
    const deliveryTotal = 
        <Card classes={styles.Card}>
            Order Total : Rs 22,000
        </Card>
    const paymentTotal = 
    <Card classes={styles.Card}>
                <div className={styles.PaymentTotalOrder}>Order Total : Rs 22,000</div> 
                <div className={styles.PaymentTotalOrder}>Total Charges : Rs. 22,000 + 200 <span className={styles.Charges}>( Delivery Charges )</span></div>
                <div className={styles.Total}>Total : Rs. 22,200</div> 
    </Card>
    return(
        <div className={styles.OuterCard}>
            <div className={styles.title}>Order Details</div>
            <div className={styles.CardWrap}>
                <CheckoutCard data={data}></CheckoutCard>
                <CheckoutCard data={data}></CheckoutCard>
            </div>
            {props.type==='payment' ? paymentTotal : deliveryTotal}
            
        </div>
    );
};
export default OrderDetails;