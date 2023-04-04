import styles from './Orders.module.css';

import OrderItem from './OrderItem';
const Orders=(props)=>{
    const orderItems = props.orders.map((order)=>{
        const id = order.id
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({id})
        }
        fetch('http://localhost:3000/api/Products/getProductById',options).then(async res=>{
            console.log(res)
        });
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