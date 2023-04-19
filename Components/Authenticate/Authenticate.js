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

    return(
        <Fragment>
            <div>{console.log(session)}</div>
            <div>{session ? <h1>{session.user.email}</h1> : <h1>Not logged in</h1>}</div>
            <button onClick={()=>{setLoginPressed(true)}}>Login</button>
            <button onClick={()=>{setSignUpPressed(true)}}>Signup</button>
            {signUpPressed && <SignupModal url = {props.url} onClose={ModalHandler} > </SignupModal>}
            {LoginPressed && <LoginModal onClose={ModalHandler} > </LoginModal>}
        </Fragment>
    );
};
export default Authenticate;