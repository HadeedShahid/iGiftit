import React from "react";
import styles from './Header.module.css';
const Header=()=>{
    const profileClick = () => {
        console.log("in route")
    }
    const cartClick = () => {
        console.log("in route")

    }
    const calenderClick = () => {
        console.log("in route")

    }
    const HomeClick = () => {
        console.log("in route")

    }
    return(
        <div className={styles['Header-Wrapper']}>
            <div onClick={HomeClick} className={styles.logo}>iGift it<span>.</span></div>
            <div className={styles['Icon-Wrapper']}>
                    <button type='button'>
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
    );
};

export default Header