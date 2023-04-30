import styles from './Footer.module.css'
const Footer=()=>{
    return(
        <div className={styles.footer}>
            <div className={styles.Logo}>iGift it<span className={styles.dot}>.</span></div>
            <div className={styles.footer_desc}>Copyright. All rights reserved</div>
        </div>
    );
}
export default Footer