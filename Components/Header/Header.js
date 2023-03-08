import Cart from "Components/Cart/Cart";
import React, { Fragment, useState } from "react";
import styles from './Header.module.css';
const Header=()=>{
    const [cartClick,setCartClick] = useState();
    const profileClick = () => {
        console.log("in route")
    }
    const cartClickHandler = () => {
        setCartClick(true);

    }
    const calenderClick = () => {
        console.log("in route")

    }
    const HomeClick = () => {
        console.log("in route")

    }
    return(
        <Fragment>
            {cartClick && <Cart onClose={()=>{setCartClick(false)}}></Cart>}
            <div className={styles['Header-Wrapper']}>
                <div onClick={HomeClick} className={styles.logo}>iGift it<span>.</span></div>
                <div className={styles['Icon-Wrapper']}>
                        <button type='button' onClick={cartClickHandler}>
                            <img src='/static/images/icons/ShoppingCartIcon.svg' alt='cart icon'></img>
                        </button>
                        <button>
                            <img src='/static/images/icons/CalenderIcon.svg' alt='calender icon'></img>
                        </button>
                        <button onClick={profileClick} >
                            <img src='/static/images/icons/UserIcon.svg' alt='user icon'></img>
                        </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Header