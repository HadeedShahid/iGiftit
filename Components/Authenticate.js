import LoginModal from "../../Components/Login/LoginModal";
import SignupModal from "../../Components/Signup/SignupModal";
import AuthContext from "../../Contexts/AuthContext";
import { Fragment, useContext, useEffect, useState } from "react";
const Authenticate=()=>{
    const ctx = useContext(AuthContext);
    const [LoginPressed,setLoginPressed] = useState(false);
    const [signUpPressed,setSignUpPressed] = useState(false);
    
    const ModalHandler=()=>{
        setLoginPressed(false);
        setSignUpPressed(false);
    }

    

    useEffect(()=>{
        const token = sessionStorage.getItem('token')
        
        if (token){
            const userData = JSON.parse(sessionStorage.getItem('userData'));
            ctx.onLogIn();
            ctx.onUserData(userData);
        }
    },[]);

    
   

    return(
        <Fragment>
            <button onClick={()=>{setLoginPressed(true)}}>Login</button>
            <button onClick={()=>{setSignUpPressed(true)}}>Signup</button>
            <h1>{ctx.isLoggedIn ? 'True':"False"}</h1>
            <h1>{ctx.userData.Name}</h1>
            <h1>{ctx.userData.email}</h1>
            <h1>{ctx.userData.number}</h1>
            <h1>{ctx.sessionKey}</h1>
            <h1>hi</h1>
            {signUpPressed && <SignupModal onClose={ModalHandler} onLogin = {ctx.onLogIn}> </SignupModal>}
            {LoginPressed && <LoginModal onClose={ModalHandler} onLogin = {ctx.onLogIn}> </LoginModal>}
        </Fragment>
    );
};
export default Authenticate;