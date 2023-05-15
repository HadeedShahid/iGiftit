import { Fragment, useState, useEffect } from "react";
import SignupForm from "./SignupForm";
import Button from "../UI/Button";
import styles from './SignupModal.module.css';
import Card from "../UI/Card";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react"
import LoadingSpinner from "Components/Spinner/Spinner";
const SignupModal=(props)=>{
    const [loading,setIsLoading] = useState(false);
    const router = useRouter();
    const formSubmitHandler = async (data)=>{
        setIsLoading(true);
        console.log(data)
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }
        // console.log("public vercel",process.env.VERCEL_URL)


        // console.log("normal vercel",props.url)
        await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/auth/signup`,options)
        .then(res => res.json())
        .then(data => {
            console.log("***data", data);
            if (data) {
                setIsLoading(false)
                console.log("in")
                router.push(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}`);
                props.onClose()

            }
        }).catch(error=>setIsLoading(false));


        
    }
    const signupWithGoogleHandler=async()=>{
        setIsLoading(true)
        try {
            signIn('google',{callbackUrl:`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/`});
        } catch (error) {
            setIsLoading(false)
        }
        
    }
    return(
        <Fragment>
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <Card classes={styles.card}>
                <div className={styles.title}>Welcome to iGiftit<span>.</span></div>
                <div className={styles.LabelCreds}>Please Enter the required information to create your account</div>
                <SignupForm onSubmitForm={formSubmitHandler}></SignupForm>
                <Button onClick={props.onSwitch} class={styles.btnNoAccount}>Already have an account ? Login Instead</Button>
                <div className={styles.or}>Or</div>
                <Button class={styles.LoginGoogle} onClick={signupWithGoogleHandler}><img src="/static/images/icons/googleIcon.svg"></img> Continue with Google</Button>
            </Card> 
            {loading ? <LoadingSpinner></LoadingSpinner>:undefined}
        </Fragment>
    );
};

export default SignupModal;