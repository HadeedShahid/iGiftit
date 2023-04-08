import { Fragment } from 'react';
import styles from './Q3.module.css';

const Q3=()=>{
    const left = 
        <div className={styles.wrap}>
            <div className={styles.question}>What is his style like ?</div>
            <button className={styles.opt}>Classic</button>
            <button className={styles.opt}>Casual</button>
            <button className={styles.opt}>Sporty</button>
        </div>
        const right = 
        <div className={styles.wrap}>
            <div className={styles.question}>Is he into technology or gadgets ?</div>
            <button className={styles.opt}>Classic</button>
            <button className={styles.opt}>Casual</button>
            <button className={styles.opt}>Sporty</button>
        </div>
    return(
        <div className={styles.cont}>
            {left}
            {right}
        </div>
    );
}

export default Q3;