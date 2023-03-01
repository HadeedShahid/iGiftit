import styles from './BtnChooseColor.module.css';
const BtnChooseColor=()=>{
    const obj=[
        {col:'Black'},
        {col:'Brown'},
        {col:'Grey'},
        {col:'Navy'},
    ]
    let c = 0; 
    const options = obj.map((item)=>{
        c+=1;
        return <button key={c} className={styles.btn}>{item.col}</button>
    });
    return(
        <div className={styles.cont}>
            {options}
        </div>
    );
};
export default BtnChooseColor;