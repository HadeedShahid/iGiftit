import styles from './Q4.module.css'

const Q4=()=>{
    return(
        <div className={styles.cont}>
            <div className={styles.question}>Does he have any specific needs or preferences when it comes to the product you’re considering ?</div>
            <input className={styles.inp} placeholder='Start typing' type='text'></input>
        </div>
    );
}

export default Q4;