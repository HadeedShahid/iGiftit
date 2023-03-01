import { Fragment } from "react";
import styles from './DeliveryPath.module.css';
const DeliveryPath=(props)=>{
    return(
        <div className={styles.PathCont}>
                <span>Select Gift</span>
                <img src='/static/images/icons/greatthan.svg'></img>
                <span className={props.ChooseWrapping===true && styles.Selected}>Choose Wrapping</span>
                <img src='/static/images/icons/greatthan.svg'></img>
                <span className={props.DeliveryInfo===true && styles.Selected}>Delivery Info</span>
                <img src='/static/images/icons/greatthan.svg'></img>
                <span className={props.PaymentInfo===true && styles.Selected}>Payment Info</span>
        </div>
    );
};
export default DeliveryPath