import Cart from "Components/Cart/Cart";
import Calender from '../Calender/Calender'
import React, { Fragment, useState } from "react";
import styles from './Header.module.css';
import { useRouter } from "next/router";
// import AddEvent from "Components/Calender/AddEvent";
const Header=()=>{
    const router = useRouter()
    const [cartClick,setCartClick] = useState();
    const [calenderClick,setCalenderClick] = useState();
    const profileClick = () => {
        router.push('/Profile');
    }
    const cartClickHandler = () => {
        setCartClick(true);

    }
    const calenderClickHandler = () => {
        setCalenderClick(true)

    }
    const HomeClick = () => {
        console.log("in route")

    }
    return(
        <Fragment>
            {cartClick && <Cart onClose={()=>{setCartClick(false)}}></Cart>}
            {calenderClick && <Calender onClose={()=>{setCalenderClick(false)}}></Calender>}
            <div className={styles['Header-Wrapper']}>
                <div onClick={HomeClick} className={styles.logo}>iGift it<span>.</span></div>
                <div className={styles['Icon-Wrapper']}>
                        <button type='button' onClick={cartClickHandler}>
                            <img src='/static/images/icons/ShoppingCartIcon.svg' alt='cart icon'></img>
                        </button>
                        <button onClick={calenderClickHandler}>
                            <img src='/static/images/icons/CalenderIcon.svg' alt='calender icon'></img>
                        </button>
                        <button type='button' onClick={profileClick} >
                            <img src='/static/images/icons/UserIcon.svg' alt='user icon'></img>
                        </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Header