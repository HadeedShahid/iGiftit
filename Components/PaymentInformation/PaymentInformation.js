import PaymentForm from './PaymentForm';
import styles from './PaymentInformation.module.css';
import OrderDetails from '../DeliveryInformation/OrderDetails';
import PaymentWrap from './PaymentWrap';
const PaymentInformation=()=>{
    return(
        <div className={styles.PageWrap}>
            <PaymentForm></PaymentForm>
            <PaymentWrap></PaymentWrap>
            <OrderDetails type='payment'></OrderDetails>
        </div>
    );
};

export default PaymentInformation;