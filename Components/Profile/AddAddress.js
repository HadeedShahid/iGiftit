import { Fragment, useState } from "react";
import styles from './AddAddress.module.css';
const AddAddress=(props)=>{
    const[address,setAddress] = useState();
    const[city,setCity] = useState();
    const[country,setCountry] = useState();
    const[zip,setZip] = useState();
    const[number,setNumber] = useState();
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        props.submitHandler({
            address:address,
            city:city,
            zip:zip,
            country:country,
            number:number
        });

    }
    return(
        <Fragment>
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <form className={styles.addinput} onSubmit={formSubmitHandler}>
                <label>Address</label>
                <input onChange={(e)=>{setAddress(e.target.value)}} type='text'  id="add"></input>
                <label>City</label>
                <input onChange={(e)=>{setCity(e.target.value)}} type='text'  id="city"></input>
                <label>Country</label>
                <input onChange={(e)=>{setCountry(e.target.value)}} type='text'  id="country"></input>
                <label>Phone</label>
                <input onChange={(e)=>{setNumber(e.target.value)}} type='text' id="Number"></input>
                <label>Zip code</label>
                <input onChange={(e)=>{setZip(e.target.value)}} type='text' id="zip"></input>
                <button className={styles.btn} type="submit">Add Address</button>
            </form>
        </Fragment>
    );
}
export default AddAddress;