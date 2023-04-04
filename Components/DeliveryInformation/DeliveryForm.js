import styles from './DeliveryForm.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
const DeliveryForm=(props)=>{
    const [address1,setAddress1] = useState("")
    const [address2,setAddress2] = useState("")
    const [city,setCity] = useState("")
    const [zip,setZip] = useState("")
    const [phone,setPhone] = useState("")

    const SubmitHandler=(e)=>{
            e.preventDefault();
            props.onProceedHandler({
                address1,
                address2,
                city,
                zip,
                phone
            })
    }
    return(
        <div className={styles.FormCont}>
            <div className={styles.title}>Please Enter The Delivery Address</div>
            <form onSubmit={SubmitHandler}>
                <div className={styles.InpWrap}>
                    <label>Address Line 1</label>
                    <input onChange={(e)=>{setAddress1(e.target.value)}} type='text'></input>
                </div>
                <div className={styles.InpWrap}>
                    <label>Address Line 2 (optional)</label>
                    <input onChange={(e)=>{setAddress2(e.target.value)}} type='text'></input>
                </div>
                <div className={styles.InnerWrap}>
                    <div className={styles.left}>
                        <div className={styles.InpWrap}>
                            <label>City</label>
                            <input onChange={(e)=>{setCity(e.target.value)}} type='text'></input>
                        </div>
                        <div className={styles.InpWrap}>
                            <label>Contact (Phone)</label>
                            <input onChange={(e)=>{setPhone(e.target.value)}} type='text'></input>
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
                            <input onChange={(e)=>{setZip(e.target.value)}} type='text'></input>
                        </div>
                    </div>
                    
                </div>
                
               
            </form>
        </div>
    );
};
export default DeliveryForm;