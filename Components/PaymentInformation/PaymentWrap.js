import styles from './PaymentWrap.module.css';
import CardItem from '../Profile/CardItem';
import SavedPayment from '../Profile/SavedPayment';
const PaymentWrap=()=>{
    return(
        <div className={styles.wrap}>
            <div className={styles.title}>Saved Addresses</div>
            <SavedPayment></SavedPayment>
        </div>
        
    );
};
export default PaymentWrap