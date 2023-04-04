import DeliveryForm from './DeliveryForm';
import styles from './DeliveryInformation.module.css';
import OrderDetails from './OrderDetails';
import SavedAddresses from './SavedAddresses';

const DeliveryInformation=(props)=>{

    const ProceedHandler=(data)=>{
            props.setDeliveryInfoHandler(data)
    }

    return(
        <div className={styles.PageWrap}>
            <DeliveryForm onProceedHandler={ProceedHandler}></DeliveryForm>
            <SavedAddresses></SavedAddresses>
            <OrderDetails prodData={props.prodData} prodCost={props.prodCost}></OrderDetails>
        </div>
    );
};
export default DeliveryInformation;