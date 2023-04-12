import styles from './Q4.module.css'
import { useState } from 'react'
const Q4=(props)=>{
    const [val,setVal] = useState()
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          props.addAnswer({"passionate about":val})
        }
      }
    return(
        <div className={styles.cont}>
            <div className={styles.question}>Does he have any specific needs or preferences when it comes to the product you’re considering ?</div>
            <input onKeyDown={handleKeyDown} onChange={(e)=>{setVal((e.target.value).trim())}} className={styles.inp} placeholder='Start typing' type='text'></input>
        </div>
    );
}

export default Q4;