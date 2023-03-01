import Card from './Card';
import styles from './CheckoutCard.module.css';

const CheckoutCard=(props)=>{
    const imgTick= <img src='/static/images/icons/tick.png'></img>;
    const imgUnTick= <img src='/static/images/icons/untick.png'></img>;
    return(
        <Card classes={styles.CardClass}>
            <div className={styles.imgContainer}>
                <img src={props.data.Image}></img>
            </div>
            <div className={styles.DetailWrap}>
                <div className={styles.NamePrice}>
                    <span>{props.data.Name}</span>
                    <span>{props.data.Price}</span>
                </div>
                <div className={styles.Color}>Color : {props.data.Color}</div>
                <div className={styles.Checkboxes}>
                    <div className={styles.CheckAlign}>{props.data.Wrap===true ? imgTick:imgUnTick} Custom Wrapping</div>
                    <div className={styles.CheckAlign}>{props.data.Card===true ? imgTick:imgUnTick} Greeting Card</div>
                </div>
            </div>
        </Card>
    );
};
export default CheckoutCard;