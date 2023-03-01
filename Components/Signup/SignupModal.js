import { Fragment, useState, useEffect } from "react";
import SignupForm from "./SignupForm";
import Button from "../UI/Button";
import styles from './SignupModal.module.css';
import Card from "../UI/Card";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react"
const SignupModal=(props)=>{

    const router = useRouter();
    const formSubmitHandler = async (data)=>{
        console.log(data)
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }

        await fetch('http://localhost:3000/api/auth/signup',options).then(res=>{res.json()}).then(data=>{
            if (data){router.push('http://localhost:3000/LandingPage')}
        })
    }
    const signupWithGoogleHandler=async()=>{
        signIn('google',{callbackUrl:"http://localhost:3000/LandingPage"});
    }
    return(
        <Fragment>
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <Card classes={styles.card}>
                <div className={styles.title}>Welcome to iGiftit<span>.</span></div>
                <div className={styles.LabelCreds}>Please Enter the required information to create your account</div>
                <SignupForm onSubmitForm={formSubmitHandler}></SignupForm>
                <Button class={styles.btnNoAccount}>Already have an account ? Login Instead</Button>
                <div className={styles.or}>Or</div>
                <Button class={styles.LoginGoogle} onClick={signupWithGoogleHandler}><img src="/static/images/icons/googleIcon.svg"></img> Continue with Google</Button>
            </Card> 
        </Fragment>
    );
};
export default SignupModal;