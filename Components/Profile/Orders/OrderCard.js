import Card from "../../UI/Card";
import styles from './OrderCard.module.css';
const OrderCard=(props)=>{
    const tick = <img src='/static/images/icons/tick.png'></img>
    const untick = <img src='/static/images/icons/untick.png'></img>
    return (<Card classes={`${styles.DetailCard} ${props.margin}`}>
                    <div className={styles.NamePrice}>
                        <span className={styles.ProdTitle}>{props.data.name}</span>
                        <span className={styles.ProdTitle}>Rs. {props.data.price}</span>
                    </div>
                    <div className={styles.ProdDetail}>
                        <span>Qty: {props.data.QTY}</span>    
                        <span>Color : {props.data.Color}</span> 
                    </div>
                    
                    <div className={styles.CustomizeWrap}>
                        <div className={styles.CheckBoxWrap}>
                            {props.data.wrap ? tick:untick}
                            <span>Custom Wrapping</span>
                        </div>
                        <div className={styles.CheckBoxWrap}>
                            {props.data.card ? tick:untick}
                            <span>Greeting Card</span>
                        </div>
                    </div>
                </Card>);
}
export default OrderCard;