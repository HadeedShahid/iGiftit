import styles from './PaymentForm.module.css';
import Button from '../UI/Button';
const PaymentForm=(props)=>{
    return(
        <div className={styles.FormCont}>
            <div className={styles.title}>Please Enter Payment Info</div>
            <form onSubmit={(e)=>{e.preventDefault();props.proceedHandler()}}>
                <div className={styles.InpWrap}>
                    <label>Full Name</label>
                    <input type='text'></input>
                </div>
                <div className={styles.InpWrap}>
                    <label>Card Number</label>
                    <input type='text' placeholder='XXXX - XXXX - XXXX - XXXX'></input>
                </div>
                <div className={styles.InnerWrap}>
                    <div className={styles.InpWrap}>
                        <label>Expiration Date</label>
                        <input type='text'></input>
                    </div>
                    <div className={styles.InpWrap}>
                        <label>CVV Number</label>
                        <input type='text'></input>
                    </div>
                </div>
                <div className={styles.CheckWrap}>
                            <input type='checkbox'></input>
                            <span className={styles.checkbox}>Save this info for future use</span>
                </div>
                <Button class={styles.btn}>Proceed</Button>
            </form>
        </div>
    );
};
export default PaymentForm;