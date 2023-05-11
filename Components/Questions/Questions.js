import BtnChoice from "../UI/BtnChoice";
import styles from './Questions.module.css';
import Card from "../UI/Card";
import recContext from "Contexts/RecContext";
import { useContext,useState } from "react";
const Questions=(props)=>{
    const ctx = useContext(recContext);
    
    const question = props.data.question
    // console.log(typeof question)
    const options = props.data.options.map(option=>{
        return (<BtnChoice onClick={()=>{
            ctx.addRecItem({[question]:option});
        }} key={Math.random()}>{option}</BtnChoice>);
    });
 
    return (
        <Card classes={`${props.classes}`}>
            <div className={styles.wrap}>
                <div className={styles.heading}>{question}</div>
                <div className={styles.options}>
                    {options}
                </div>
            </div>
            
            <a className={styles.skip} href="/">
                Skip this Question
                <img className={styles.arrow} src='/static/images/icons/Arrow.png' alt='Arrow pitcture'></img>
            </a>
        </Card>
        
    );
};
export default Questions;