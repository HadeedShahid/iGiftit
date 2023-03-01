import styles from './InfoInput.module.css';
const InfoInput=()=>{
    return(
        <form className={styles.frm}>
            <div>
                <label className={styles.label}>Full Name</label>
                <input className={styles.inp} type='text'></input>
            </div>
            
            <div>
                <label className={styles.label}>Email Address</label>
                <input className={styles.inp} type='text'></input>
            </div>
            
            <div>
                <label className={styles.label}>Phone Number</label>
                <input className={styles.inp} type='text'></input>
            </div>
            
        </form>
    );
};
export default InfoInput