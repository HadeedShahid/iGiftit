import DeliveryForm from './DeliveryForm';
import styles from './DeliveryInformation.module.css';
import OrderDetails from './OrderDetails';
import SavedAddresses from './SavedAddresses';

const DeliveryInformation=(props)=>{
    return(
        <div className={styles.PageWrap}>
            <DeliveryForm></DeliveryForm>
            <SavedAddresses></SavedAddresses>
            <OrderDetails></OrderDetails>
        </div>
    );
};
export default DeliveryInformation;