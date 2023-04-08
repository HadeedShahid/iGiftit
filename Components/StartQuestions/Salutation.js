import styles from './Salutation.module.css';

const Salutation=()=>{
    return (
        <div className={styles.cont}>
            <div className={styles.logo}>iGift it<span className={styles.dot}>.</span></div>
            <div className={styles.desc}>Let’s start finding the perfect gift for your loved one</div>
        </div>
    );
};

export default Salutation;