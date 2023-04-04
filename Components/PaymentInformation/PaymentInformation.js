import PaymentForm from './PaymentForm';
import styles from './PaymentInformation.module.css';
import OrderDetails from '../DeliveryInformation/OrderDetails';
import PaymentWrap from './PaymentWrap';
const PaymentInformation=(props)=>{
    return(
        <div className={styles.PageWrap}>
            <PaymentForm proceedHandler={()=>{
                props.onConfirmPayment()
            }}></PaymentForm>
            <PaymentWrap></PaymentWrap>
            <OrderDetails type='payment' prodData={props.prodData} prodCost={props.prodCost}></OrderDetails>
        </div>
    );
};

export default PaymentInformation;