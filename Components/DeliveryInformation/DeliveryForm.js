import styles from './DeliveryForm.module.css';
import Button from '../UI/Button';
const DeliveryForm=()=>{
    return(
        <div className={styles.FormCont}>
            <div className={styles.title}>Please Enter The Delivery Address</div>
            <form>
                <div className={styles.InpWrap}>
                    <label>Address Line 1</label>
                    <input type='text'></input>
                </div>
                <div className={styles.InpWrap}>
                    <label>Address Line 2 (optional)</label>
                    <input type='text'></input>
                </div>
                <div className={styles.InnerWrap}>
                    <div className={styles.left}>
                        <div className={styles.InpWrap}>
                            <label>City</label>
                            <input type='text'></input>
                        </div>
                        <div className={styles.InpWrap}>
                            <label>Contact (Phone)</label>
                            <input type='text'></input>
                        </div>
                        <div className={styles.CheckWrap}>
                            <input type='checkbox'></input>
                            <span className={styles.checkbox}>Save this info for future use</span>
                        </div>
                        <Button class={styles.btn}>Proceed</Button>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.InpWrap}>
                            <label>Zip Code</label>
                            <input type='text'></input>
                        </div>
                    </div>
                    
                </div>
                
               
            </form>
        </div>
    );
};
export default DeliveryForm;