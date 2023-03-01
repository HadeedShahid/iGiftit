import { Fragment } from "react";
import styles from './AddAddress.module.css';
const AddAddress=(props)=>{
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        props.submitHandler({
            address:'100 R3 Johar Town',
            city:'Lahore',
            zip:'54000',
            country:'Pakistan',
            number:'+92 123 4567893'
        });
    }
    return(
        <Fragment>
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <form className={styles.addinput} onSubmit={props.formSubmitHandler}>
                <input type='text' placeholder="Address" id="add"></input>
                <input type='text' placeholder="City" id="city"></input>
                <input type='text' placeholder="Country" id="country"></input>
                <input type='text' placeholder="Zip" id="zip"></input>
                <button type="submit"></button>
            </form>
        </Fragment>
    );
}
export default AddAddress;