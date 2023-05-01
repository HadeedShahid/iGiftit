// import Salutation from "Components/StartQuestions/Salutation";
import QButton from "Components/StartQuestions/QButton";
import Salutation from "Components/StartQuestions/Salutation";
import styles from './GetStarted.module.css'
import Q1 from "Components/StartQuestions/Q1";
import Q2 from "Components/StartQuestions/Q2";
import Q3 from "Components/StartQuestions/Q3";
import Q4 from "Components/StartQuestions/Q4";
import recContext from "Contexts/RecContext";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
const GetStarted=()=>{
    const ctx = useContext(recContext);
    const [index,setIndex]=useState(0)
    const router = useRouter()
    const addAnswerHandler=(obj)=>{
        ctx.addRecItem(obj);
        setIndex(()=>{return index+1})
    }
    const questions=[<Q1 key={Math.random()} addAnswer={addAnswerHandler}></Q1>,
                     <Q2 key={Math.random()} addAnswer={addAnswerHandler}></Q2>,
                     <Q3 key={Math.random()} addAnswer={addAnswerHandler}></Q3>,
                     <Q4 key={Math.random()} addAnswer={addAnswerHandler}></Q4>]
    
    useEffect(()=>{
        if (index>3){
            router.push('/Homepage')
        }
    },[index])
    return(
        <div className={styles.cont}>
            <div className={styles.inner}>
                <div className={styles.salBuff}>
                    <Salutation></Salutation>
                </div>
                <div className={styles.queBuff}>
                    {questions[index]}
                </div>
               
                <div className={styles.btnWrap}>
                    <QButton see={true}></QButton>
                    <QButton skipIndex={()=>{setIndex(()=>{return index+1})}}></QButton>
                </div>
            </div>
        </div>
        
    );
}
export default GetStarted;