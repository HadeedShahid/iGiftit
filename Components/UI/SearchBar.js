import styles from './SearchBar.module.css'
import { Fragment, useEffect } from 'react';
import ToggleSwitch from './ToggleSwitch';
import { useState } from 'react';
// import Router from 'next/router';
const SearchBar=(props)=>{
    const [toggle, setToggle] = useState(false);
    const handleToggleChange = () => {
      setToggle(!toggle);
    };
    return(
        <div className={styles.layout}>
            <div className={styles.cont}>
                        <img className={styles.search} src='/static/images/icons/search.svg' alt='search icon'></img>
                        <input value={props.value} onChange={(e)=>{props.onChange(prev=>e.target.value.trim())}} className={styles.inp} type='text' placeholder='Search a product'></input>
            </div>
            <div onClick={handleToggleChange} className={styles.toogleBtn}>
                <div className={styles.text}>Recommend</div>
                <ToggleSwitch toggle={toggle} handleToggleChange={handleToggleChange}></ToggleSwitch>
            </div>
        </div>
        
    );
}
export default SearchBar;