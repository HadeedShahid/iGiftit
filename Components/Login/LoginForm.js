import Button from '../UI/Button';
import styles from './LoginForm.module.css';
import { useState } from 'react';
const LoginForm=(props)=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const emailChangedHandler=(event)=>{
        setEmail(event.target.value);
    }
    const passwordChangedHandler=(event)=>{
        setPassword(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        props.onSubmitForm(
            { email:email,
            password:password,
            }
        )
    }
    return(
        <form className={styles.LoginForm} onSubmit={submitHandler}>
            <label>User name or Email</label>
            <input type='text' onChange={emailChangedHandler}></input>
            <label>Password</label>
            <input type='text' onChange={passwordChangedHandler}></input>
            <a className={styles.ForgotPass}>Forgot Password</a>
            <Button class={styles.btn}>Login</Button>
        </form>
    );
};
export default LoginForm;