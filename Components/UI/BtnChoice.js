import styles from './BtnChoice.module.css'
const BtnChoice=(props)=>{
    return (
        <button onClick={props.onClick} className={styles.btn}>
            {props.children}
        </button>
    );
};
export default BtnChoice;