import styles from './Orders.module.css';

import OrderItem from './OrderItem';
const Orders=(props)=>{
    const orderItems = props.orders.map((order)=>{
        return (
            <OrderItem key={Math.random()} data={order}>

            </OrderItem>
        );
    });
    return(
        <div className={styles.OrderItemWrap}>
            {/* <OrderItem></OrderItem>
            <OrderItem></OrderItem> */}
            {orderItems}
        </div>
        
    );
};

export default Orders;