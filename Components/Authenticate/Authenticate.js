import LoginModal from "../../Components/Login/LoginModal";
import SignupModal from "../../Components/Signup/SignupModal";
import { Fragment, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react"
const Authenticate=(props)=>{
    const [LoginPressed,setLoginPressed] = useState(false);
    const [signUpPressed,setSignUpPressed] = useState(false);

    const { data: session } = useSession();

    const ModalHandler=()=>{
        setLoginPressed(false);
        setSignUpPressed(false);
    }

    useEffect(()=>{
        console.log("in header",props.pressLogin)
        if (props.pressLogin){
            setLoginPressed(true);
            props.onLogin(false)
        }
    },[props.pressLogin])
    return(
        <Fragment>
            <div>{console.log(session)}</div>
            {/* <div>{session ? <h1>{session.user.email}</h1> : <h1>Not logged in</h1>}</div> */}
            <button className={props.loginStyle} onClick={()=>{setLoginPressed(true)}}>Login</button>
            <button className={props.signupStyle} onClick={()=>{setSignUpPressed(true)}}>Signup</button>
            {signUpPressed && <SignupModal onSwitch={()=>{setLoginPressed(true);setSignUpPressed(false)}} onClose={ModalHandler} > </SignupModal>}
            {LoginPressed && <LoginModal onSwitch={()=>{setLoginPressed(false);setSignUpPressed(true)}} onClose={ModalHandler} > </LoginModal>}
        </Fragment>
    );
};
export default Authenticate;