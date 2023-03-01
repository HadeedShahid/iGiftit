import styles from './BtnChooseColor.module.css';
const BtnChooseColor=(props)=>{
    const itemColor = props.data.map((color)=>{
        return <button key={Math.random()} className={styles.btn}>{color}</button>
    })
    return(
        <div className={styles.cont}>
            {itemColor}
        </div>
    );
};
export default BtnChooseColor;