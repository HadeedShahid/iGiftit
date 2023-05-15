import { Fragment, useContext, useState } from "react";
import LoginForm from "./LoginForm";
import Button from "../UI/Button";
import styles from './LoginModal.module.css';
import Card from "../UI/Card";
import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import LoadingSpinner from "Components/Spinner/Spinner";
const LoginModal=(props)=>{
    const [loading,setIsLoading] = useState(false);
    const router = useRouter();
    const formSubmitHandler= async (data)=>{
        setIsLoading(true);
        try {
            const status =  await signIn('credentials',{
                redirect:false,
                email:data.email,
                password:data.password,
                callbackUrl:`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/`
            })
            console.log(status);
            if (status.ok){
                router.push(status.url);
            }
            else{
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
        }
       
        
    }
    const signinWithGoogleHandler = async ()=>{
        try {
            setIsLoading(true)
            signIn('google',{callbackUrl:`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/`});
        } catch (error) {
            setIsLoading(false)
        }


        // signInWithPopup(auth,googleProvider).then((res)=>{
        //     const tempUserData={
        //         uid: res.user.uid,
        //         Name : res.user.displayName,
        //         email : res.user.email,
        //         number : res.user.phoneNumber,
        //         photo : res.user.photoURL
        //     }
        //     console.log(res);
        //     // sessionStorage.setItem('Token',res.user.accessToken);
        //     ctx.onLogIn();
        //     ctx.onUserData(tempUserData);
        //     ctx.saveSession(res.user.accessToken,tempUserData);
        //     router.push('/Profile');
        // });
    };
    return(
        <Fragment>
        <div className={styles.backdrop} onClick={props.onClose}></div>
        <Card classes={styles.card}>
                <div className={styles.title}>Welcome to iGiftit<span>.</span></div>
                <div className={styles.LabelCreds}>Please Enter your credentials to Login</div>
                <LoginForm onSubmitForm={formSubmitHandler}></LoginForm>
                <Button onClick={props.onSwitch} class={styles.btnNoAccount}>I don't have an account</Button>
                <div className={styles.or}>Or</div>
                <Button class={styles.LoginGoogle} onClick={signinWithGoogleHandler}><img src="/static/images/icons/googleIcon.svg"></img> Continue with Google</Button>
        </Card>
        {loading ? <LoadingSpinner></LoadingSpinner>:undefined}
        </Fragment>
        
    );
};
export default LoginModal;