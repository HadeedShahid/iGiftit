import { Fragment, useState } from "react";
import Profile from "../../../Components/Profile/Profile";
import Orders from "../../../Components/Profile/Orders/Orders";
import Header from "../../../Components/Header/Header";
import styles from './ViewProfile.module.css'
import { getSession, useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
const ViewProfile=()=>{
    const [InfoPressed,setInfoPressed] = useState(true);
    const [addresses,setAddresses]=useState({});
    const [orders,setOrders] = useState([]);
    const { data: session } = useSession();
    const InfoHandler=()=>{
        setInfoPressed(true);
    }
    const OrderHandler=()=>{
        setInfoPressed(false);
    }
    const logoutClickedHandler=()=>{
        signOut();
    };
    

    const addrs = useEffect(() => {
        // console.log("in use effect")
        const email = session.user.email
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email})
        }
        fetch(`${process.env.PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Addresses/getAddresses`,options).then(async res=>{
            setAddresses((await res.json()).message);
        });
        fetch(`${process.env.PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Orders/getOrders`,options).then(async res=>{
            const retOrders = (await res.json()).orders
            setOrders(retOrders)
            console.log("ret products",retOrders)
        });
        // console.log("in ude effect")
        // console.log("addresses",addresses)
      },[]);
    return(
        <Fragment>
            <Header></Header>
            <div className={styles.linkBox}>
                {/* <a href="" onClick={InfoHandler} className={`${InfoPressed ? styles.Focused : styles.NotFocused}`}>Your Information</a> */}
                {/* <a href="" onClick={OrderHandler} className={`${!InfoPressed ? styles.Focused : styles.NotFocused}`}>Your Orders</a> */}
                <button onClick={InfoHandler} className={`${InfoPressed ? styles.Focused : styles.NotFocused}`}>Your Information</button>
                <button onClick={OrderHandler} className={`${!InfoPressed ? styles.Focused : styles.NotFocused}`}>Your Orders</button>
            </div>
            {InfoPressed ? <Profile logoutBtn={logoutClickedHandler} Addresses={addresses}></Profile>:<Orders orders={orders}></Orders>}

        </Fragment>
    );
};
export async function getServerSideProps({req}){
    const session = await getSession({req})
    if (!session){
        return{redirect:{
            destination:'/LandingPage',
            permanent: false
        }
        }
    }
    else{
        return {
            props:{session}
        }
    }

  
}
export default ViewProfile;