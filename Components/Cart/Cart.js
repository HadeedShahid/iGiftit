import styles from './Cart.module.css';
// import Card from "../../../UI/Card";
import OrderCard from 'Components/Profile/Orders/OrderCard';
import { Fragment } from 'react';
const Cart=(props)=>{
    return (
        <Fragment>
            <div className={styles.backdrop} onClick={props.onClose}></div>
            {/* <Card classes={styles.card}> */}
                    
            {/* </Card> */}
        </Fragment>
    );
}
export default Cart;