import styles from './Orders.module.css';

import OrderItem from './OrderItem';
const Orders=(props)=>{
    // useEffect(()=>{console.log("in use effect");console.log("props use effect order",props.orders)},[props.orders])
    const orderItems = props.orders.map((order)=>{
        // const id = order.id
        // console.log("id",id)
        // const options={
        //     method:"POST",
        //     headers:{'Content-Type':'application/json'},
        //     body:JSON.stringify({id})
        // }
        // fetch('http://localhost:3000/api/Products/getProductById',options).then(async res=>{
        //     console.log(res)
        // });
        console.log("ordr in map",order)
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