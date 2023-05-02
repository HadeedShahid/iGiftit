import { Fragment, useState } from 'react';
import styles from './Q3.module.css';

const Q3=(props)=>{
    const [leftDone,setLeftDone] = useState(false)
    const [objLeft,setObjLeft]=useState();
    const style = ['Classic','Casual','Sporty']
    const tech = ['Yes','No',"I'm not sure"]
    const left = 
        <div className={`${styles.wrap} ${styles.margBot}`}>
            <div className={styles.question}>What is his style like ?</div>
            {style.map((item)=>{
                return <button key={Math.random()} onClick={()=>{setObjLeft({'style like':item});setLeftDone(true)}} className={styles.opt}>{item}</button>
            })}
            {/* <button className={styles.opt}>Casual</button> */}
            {/* <button className={styles.opt}>Sporty</button> */}
        </div>
        const right = 
        <div className={styles.wrap}>
            <div className={styles.question}>Is he into technology or gadgets ?</div>
            {tech.map((item)=>{
                return <button key={Math.random()} onClick={()=>{
                    props.addAnswer([objLeft,{'tech':item}])
                }} className={styles.opt}>{item}</button>
            })}
            {/* <button className={styles.opt}>Classic</button> */}
            {/* <button className={styles.opt}>Casual</button> */}
            {/* <button className={styles.opt}>Sporty</button> */}
        </div>
    return(
        <div className={styles.cont}>
            {left}
            {leftDone ? right:undefined}
        </div>
    );
}

export default Q3;