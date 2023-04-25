import Card from "Components/UI/Card";
import styles from './AddEvent.module.css'
import { Fragment, useState } from "react";
const AddEvent=(props)=>{
    const[mess,setMess] = useState('')
    const formSubmitHandler=(e)=>{
        e.preventDefault()
        props.onEventAdd(mess);
    }
    return(
        <Fragment>
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <Card classes={styles.card}>
                <form className={styles.form} onSubmit={formSubmitHandler}>
                    <div className={styles.title}>Add Reminder</div>
                    <input onChange={(e)=>{setMess(e.target.value.trim())}} className={styles.inp} type="text" placeholder="Write Name / Details"></input>
                    <div className={styles.btnCont}>
                        <button className={styles.cancelBtn} type="button" onClick={props.onClose}>Cancel</button>
                        <button className={styles.submitBtn} type="submit">Add Reminder</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
}
export default AddEvent;