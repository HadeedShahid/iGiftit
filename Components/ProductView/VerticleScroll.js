import styles from './VerticleScroll.module.css';

const VerticleScroll=()=>{
    return(
        <div className={styles.scrollable}>
            <img src='/static/images/scroll/scroll1.png' alt='watch1 re '></img>
            <img src='/static/images/scroll/scroll2.png' alt='watch2 qrfe '></img>
            <img src='/static/images/scroll/scroll3.png' alt='watch3 q '></img>
            <img src='/static/images/scroll/scroll4.png' alt='watch4  qr '></img>
        </div>
    );
};
export default VerticleScroll;