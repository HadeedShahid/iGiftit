import Card from '../../UI/Card';
import Button from '../../UI/Button';
import styles from './OrderItem.module.css';
import OrderCard from './OrderCard';
import { useEffect, useState } from 'react';
const OrderItem=(props)=>{
    // const[product,ProductDetail] = useState();
    const [orderItems,setOrderItems] = useState()
    // console.log(props.data)
    useEffect(()=>{

        if (props.data) {
            const getOrderItems = async () => {
              const orderItems = await Promise.all(
                props.data.items.map(async (item, idx) => {
                  const prodId = item.prodId;
                  const options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: prodId }),
                  };
                  const res = await fetch(
                    `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Products/getProductPriceById`,
                    options
                  );
                  const data = await res.json();
                  const price = data.price;
                  return (
                    <OrderCard
                      margin={styles.margin}
                      key={Math.random()}
                      data={item}
                      price={price*item.quantity}
                    ></OrderCard>
                  );
                })
              );
              setOrderItems(orderItems);
            };
            getOrderItems();
          }
        }, [props.data]);
    
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