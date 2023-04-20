import styles from './YourInfo.module.css';
import Button from '../UI/Button';
import InfoInput from './InfoInput';
import SavedAddresses from './SavedAddresses';
import SavedPayment from './SavedPayment';
import { Fragment, useContext, useEffect, useState } from 'react';
import AddAddress from './AddAddress';
import { useSession, signIn, signOut } from "next-auth/react"

const YourInfo=(props)=>{
    const [addAddress,setAddAddress] = useState(false);
    const { data: session } = useSession()
    const AddAddressHandler=async (data)=>{
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:session.user.email,addressToAdd:data})
        }
    
        await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Addresses/setAddresses`,options).then((response) => response.json())
        .then((data) => {console.log(data)})
    }
    return(
        <Fragment>
        {addAddress && <AddAddress submitHandler={AddAddressHandler} onClose={()=>{setAddAddress(false)}}></AddAddress>}
        <div className={styles.container}>
            <div className={styles.InfoWrap}>
                <div>
                    <h1 className={styles.title}>Account Information</h1>
                    <div className={styles.btnCont}>
                        <Button class={`${styles.GreetingCard} ${styles.long}`}>
                            <div className={styles.selectGreet}>Change Password</div>
                        </Button>
                        
                        <Button onClick={props.logoutBtn} class={`${styles.GreetingCard} ${styles.short}`}>
                            <div className={styles.selectGreet}>
                                Logout
                                <img src='/static/images/icons/logoutIcon.png' alt='logout Icon'></img>
                                <span></span>
                            </div>
                        </Button>
                    </div>
                </div>
                
                <div className={styles.infocont}>
                    <InfoInput></InfoInput>
                </div>
            </div>
            <div className={styles.savedWrap}>
                <div className={styles.addrCardWrap}>
                    <div className={styles.addressWrap}>
                        <h1 className={styles.title}>Saved Addresses</h1>
                        <Button class={`${styles.btnadd}`} onClick={()=>{setAddAddress(true)}}>
                            <span className={styles.add}>Add</span><span className={styles.plus}>+</span>
                        </Button>
                    </div>
                    <SavedAddresses Addresses={props.Addresses}></SavedAddresses>
                </div>
                <div className={styles.addrCardWrap}>
                    <div className={styles.addressWrap}>
                        <h1 className={styles.title}>Payment Methods</h1>
                        <Button class={`${styles.btnadd}`}>
                            <span className={styles.add}>Add</span><span className={styles.plus}>+</span>
                        </Button>
                    </div>
                    <SavedPayment></SavedPayment>
                </div>


            </div>            
        </div>
        </Fragment>
    );
};
export default YourInfo;