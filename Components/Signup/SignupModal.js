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
        // console.log("public vercel",process.env.VERCEL_URL)


        // console.log("normal vercel",props.url)
        await fetch(`${process.env.PROTOCOL}://${props.url}/api/auth/signup`,options)
        .then(res => res.json())
        .then(data => {
            console.log("***data", data);
            if (data) {
                router.push(`${process.env.PROTOCOL}://${props.url}/LandingPage`);
            }
        });


        
    }
    const signupWithGoogleHandler=async()=>{
        signIn('google',{callbackUrl:`${process.env.PROTOCOL}://${props.url}/LandingPage`});
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