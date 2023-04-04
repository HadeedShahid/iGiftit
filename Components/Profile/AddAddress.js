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
                <input onChange={(e)=>{setAddress(e.target.value)}} type='text' placeholder="Address" id="add"></input>
                <input onChange={(e)=>{setCity(e.target.value)}} type='text' placeholder="City" id="city"></input>
                <input onChange={(e)=>{setCountry(e.target.value)}} type='text' placeholder="Country" id="country"></input>
                <input onChange={(e)=>{setNumber(e.target.value)}} type='text' placeholder="Phone Number" id="Number"></input>
                <input onChange={(e)=>{setZip(e.target.value)}} type='text' placeholder="Zip code" id="zip"></input>
                <button type="submit"></button>
            </form>
        </Fragment>
    );
}
export default AddAddress;