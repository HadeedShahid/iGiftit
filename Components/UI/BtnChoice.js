import styles from './BtnChoice.module.css'
const BtnChoice=(props)=>{
    return (
        <button className={styles.btn}>
            {props.children}
        </button>
    );
};
export default BtnChoice;