import { useState } from 'react';
import styles from './BtnChooseColor.module.css';
const BtnChooseColor=(props)=>{
    const [pressed, setPressed] = useState("");
    const btnClickHandler=(event)=>{
        setPressed(event.target.id)
    }
    const itemColor = props.data.map((color)=>{
        return <button onClick={btnClickHandler} key={Math.random()} id={color} className={`${styles.btn} ${pressed === color ? styles.highlight:undefined}`}>{color}</button>
    })
    return(
        <div className={styles.cont}>
            {itemColor}
        </div>
    );
};
export default BtnChooseColor;