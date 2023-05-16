import styles from './SearchBar.module.css'
import { Fragment, useEffect } from 'react';
import ToggleSwitch from './ToggleSwitch';
import { useState, useContext } from 'react';
import ToggleContext from 'Contexts/ToggleContext';
import { useRouter } from 'next/router';

// import Router from 'next/router';
const SearchBar=(props)=>{
    const ctx = useContext(ToggleContext);
    // useEffect(()=>{
    //     ctx.manualTrigger(props.type)
    // },[])
    const [toggle,setToggle] = useState();
    const router = useRouter();
    const ToggleChangeHandler=()=>{
        toggle ? router.push('/ViewAll'):router.push('/Homepage')
    }
    useEffect(()=>{
        console.log("***bahcao")
        setToggle(props.type)
    },[])
    return(
        <div className={`${styles.layout} ${toggle && styles.right}`}>
            {!toggle && <div className={styles.cont}>
                        <img className={styles.search} src='/static/images/icons/search.svg' alt='search icon'></img>
                        <input value={props.value} onChange={(e)=>{props.onChange(prev=>e.target.value.trim())}} className={styles.inp} type='text' placeholder='Search a product'></input>
            </div>}
            <div onClick={ToggleChangeHandler} className={styles.toogleBtn}>
                <div className={styles.text}>Recommend</div>
                <ToggleSwitch toggle={toggle} handleToggleChange={ToggleChangeHandler}></ToggleSwitch>
            </div>
        </div>
        
    );
}
export default SearchBar;