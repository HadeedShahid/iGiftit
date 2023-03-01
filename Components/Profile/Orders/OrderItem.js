import Card from '../../UI/Card';
import Button from '../../UI/Button';
import styles from './OrderItem.module.css';
import OrderCard from './OrderCard';
const OrderItem=(props)=>{
    // console.log(props.data)
    const orderItems = props.data.items.map((item)=>{
        return (
            <OrderCard margin={styles.margin} key={Math.random()} data={item}></OrderCard>
        );
    });
    return(
        <Card classes={styles.OuterCard}>
            <div className={styles.OrderInfoWrap}>
                <div className={styles.OrderInfo}>
                    <span>Order Number : {props.data.id.substr(props.data.id.length - 6)}</span>
                    <span>Ordered on : {props.data.date}</span>
                    <span>Order Total  : Rs. {props.data.amount}</span>
                </div>
                
                <Button class={styles.Button}>
                    <span>Track Order</span>
                    <img src="/static/images/icons/truckIcon.png"></img>
                </Button>
            </div>
            <div className={styles.OrderDetailWrap}>
                <span className={styles.Detail}>Order Details</span>
                <div className={styles.OrderCardWrap}>
                    {/* <OrderCard margin={styles.margin}></OrderCard>
                    <OrderCard></OrderCard> */}
                    {orderItems}
                </div>
                
                
            </div>
        </Card>
    );
}
export default OrderItem;