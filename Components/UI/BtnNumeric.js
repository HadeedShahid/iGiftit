import React from 'react';
import styles from './BtnNumeric.module.css';
const BtnNumeric=(props)=>{
    return(
        <React.Fragment>
            {props.type==='up' && <button onClick={props.onClick} className={`${styles.button} ${styles.prop}`}><img src='/static/images/icons/upArrow.png' alt='up arrow icon'></img></button>}
            {props.type==='dn' &&<button onClick={props.onClick} className={`${styles.button} ${styles.prop}`}><img src='/static/images/icons/downArrow.png' alt='down arrow icon'></img></button>}
            {props.type==='plus' &&<button onClick={props.onClick} className={`${styles.incdec} ${styles.prop}`}>+</button>}
            {props.type==='min' &&<button onClick={props.onClick} className={`${styles.incdec} ${styles.prop}`}>-</button>}
        </React.Fragment>
        
    );
};
export default BtnNumeric;