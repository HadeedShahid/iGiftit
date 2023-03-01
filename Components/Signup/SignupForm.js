import Button from '../UI/Button';
import styles from './SignupForm.module.css';
import { useState } from 'react';
const SignupForm=(props)=>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

    const emailChangedHandler=(event)=>{
        setEmail(event.target.value);
    }
    const passwordChangedHandler=(event)=>{
        if (checkPassword(event.target.value.trim())){
            setPassword(event.target.value);
        }
        else{
            console.log("Invalid input");
        }
    }
    const nameChangedHandler=(event)=>{
        setName(event.target.value);
    }

    const checkPassword=(event)=>{
        const pass = document.getElementById('pass').value.trim();
        const confirmpass = document.getElementById('confirmpass').value.trim();

        if (pass===confirmpass){
            return true;
        }
        else{
            return false;
        }
    }
    const disableSpace=(e)=>{
        console.log(e)
        if (e.keyCode===32){
            console.log("in")
            e.preventDefault();
            return false
        }
        return true;
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        props.onSubmitForm(
            { email:email,
            password:password,
            name:name}
        )
    }
    return(
        <form className={styles.LoginForm} onSubmit={submitHandler}>
            <label>Full Name</label>
            <input type='text' onChange={nameChangedHandler}></input>
            <label>Email Address</label>
            <input type='text' onChange={emailChangedHandler}></input>
            <label>Create Password</label>
            <input type='password' onChange={passwordChangedHandler} id='pass' onKeyDown={disableSpace}></input>
            <label>Confirm Password</label>
            <input type='password' onChange={passwordChangedHandler} id='confirmpass' onKeyDown={disableSpace}></input>
            <Button class={styles.btn}>Signup</Button>
        </form>
    );
};
export default SignupForm;