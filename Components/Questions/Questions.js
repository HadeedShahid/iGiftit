import BtnChoice from "../UI/BtnChoice";
import styles from './Questions.module.css';
import Card from "../UI/Card";
import recContext from "Contexts/RecContext";
import { useContext,useEffect,useState } from "react";
const Questions=(props)=>{
    const ctx = useContext(recContext);
    const [index,setIndex]=useState(Math.floor(Math.random() * ctx.ques.length))
    const [options,setOptions] = useState();
    const data = ctx.ques[index];


    const generateIndex=()=>{
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * ctx.ques.length);
        } while (newIndex === index);
        return newIndex
    };

    useEffect(()=>{
        if (data['options']){
            setOptions(data['options'].map(option=>{
                return (<BtnChoice onClick={()=>
                    {console.log(ctx.ques)
                        ctx.recItems['tags'].includes(ctx.ques[index]['tags'][0]) ? setIndex(generateIndex()):(ctx.addTag(ctx.ques[index]['tags'][0]),setIndex(generateIndex()))
                    }} key={Math.random()}>
                    {option}
                </BtnChoice>);
            }))
        }
        else{
            setOptions(data['tags'].map(option=>{
                return (<BtnChoice onClick={()=>
                    {console.log("in else",ctx.recItems['tags'].includes(option))
                    ctx.recItems['tags'].includes(option) ? setIndex(generateIndex()):(ctx.addTag(option),setIndex(generateIndex()))
                    }} key={Math.random()}>
                    {option}
                </BtnChoice>);
            }))
        }
        // console.log("ipdated",  ctx.recItems)
    },[index])
    // console.log(typeof question)
    
 
    return (
        <Card classes={`${props.classes}`}>
            <div className={styles.wrap}>
                <div className={styles.heading}>{data['question']}</div>
                <div className={styles.options}>
                    {options}
                </div>
            </div>
            
            <button className={styles.skip} onClick={()=>{setIndex(generateIndex())}}>
                Skip this Question
                <img className={styles.arrow} src='/static/images/icons/Arrow.png' alt='Arrow pitcture'></img>
            </button>
        </Card>
        
    );
};
export default Questions;