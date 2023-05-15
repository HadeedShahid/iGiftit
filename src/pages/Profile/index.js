import { Fragment, useState } from "react";
import Profile from "../../../Components/Profile/Profile";
import Orders from "../../../Components/Profile/Orders/Orders";
import Header from "../../../Components/Header/Header";
import styles from './ViewProfile.module.css'
import { getSession, useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import Spinner from '../../../Components/Spinner/Spinner'

const ViewProfile=()=>{
    const [InfoPressed,setInfoPressed] = useState(true);
    const [addresses,setAddresses]=useState([]);
    const [orders,setOrders] = useState([]);
    const [IsAddUpdated,setIsAddUpdated] = useState(false);
    const [loading,setIsLoading] = useState(true);
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
    
    const onAddAddress=(data)=>{
        // console.log("updated add",data)
        const len = addresses.length+1
        const tempAdd = {...addresses,[len]:data}
        console.log("updating adrresses array",tempAdd)
        setAddresses(tempAdd)
    }
    const fetchAddresses = async (email) => {
        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        };
        fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Addresses/getAddresses`, options)
            .then(async res => {
                setAddresses((await res.json()).message);
            });
    };
    const fetchOrders = async (email) => {
        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        };
        fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Orders/getOrders`, options)
            .then(async res => {
                const retOrders = (await res.json()).orders;
                setOrders(retOrders);
                console.log("ret products", retOrders);
            });
    };
    const onRemoveHandler=(idx)=>{
        setIsLoading(true);
        const email = session.user.email
        const newAddresses = [...addresses]; // Make a copy of the addresses array
        newAddresses.splice(idx, 1); // Remove the nth element from the copy
        // setAddresses(newAddresses); 
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:session.user.email,addressToAdd:newAddresses})
        }
        fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Addresses/setWholeAddress`,options).then((response) => response.json())
        .then((data) => {setIsLoading(false);console.log(data);setAddresses(newAddresses);}).catch(e=>{setIsLoading(false);})
        
    }
    useEffect(() => {
        // console.log("in use effect")
        const email = session.user.email
    
        fetchAddresses(email);
        fetchOrders(email);

      },[]);
    useEffect(() => {
        const email = session.user.email
        IsAddUpdated ? (fetchAddresses(email),setIsAddUpdated(false)):undefined
    },[IsAddUpdated]);

    useEffect(()=>{
        console.log("In loading")
        // if (addresses.length!==0 && orders.length!==0){
        //     setIsLoading(false);
        // }
        // if (addresses===0 && orders.length===0){
        //     setIsLoading(false)
        // }
        setIsLoading(false)
    },[addresses,orders])
    return(
        <Fragment>
            <Header></Header>
            <div className={styles.linkBox}>
                {/* <a href="" onClick={InfoHandler} className={`${InfoPressed ? styles.Focused : styles.NotFocused}`}>Your Information</a> */}
                {/* <a href="" onClick={OrderHandler} className={`${!InfoPressed ? styles.Focused : styles.NotFocused}`}>Your Orders</a> */}
                <button onClick={InfoHandler} className={`${InfoPressed ? styles.Focused : styles.NotFocused}`}>Your Information</button>
                <button onClick={OrderHandler} className={`${!InfoPressed ? styles.Focused : styles.NotFocused}`}>Your Orders</button>
            </div>
            {InfoPressed ? <Profile onRemove={onRemoveHandler} onAddAddress={()=>{setIsAddUpdated(true);}} logoutBtn={logoutClickedHandler} Addresses={addresses}></Profile>:<Orders orders={orders}></Orders>}
            {loading ? <Spinner></Spinner>:undefined}

        </Fragment>
    );
};
export async function getServerSideProps({req}){
    const session = await getSession({req})
    // console.log("Session",req)
    if (!session){
        return{redirect:{
            destination:'/',
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