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
import Question from "Components/StartQuestions/Question";
const GetStarted=()=>{

    const router = useRouter()
    const ctx = useContext(recContext);
    const [index,setIndex]=useState(0)
    const [cat,setCat] = useState();
    const [ques,setQues] = useState();
    const [tags,setTags] = useState([]);
    const [limIndex,setLimIndex]=useState();
    const [skiptrig,setSkiptrig]=useState(false)
    const [price,setPrice] = useState(0);
    const [push,setPush] = useState(false);
    const [originialCat,setOriginalCat] = useState(0);
    // const addAnswerHandler=(obj)=>{
    //     ctx.addRecItem(obj);
    //     setIndex(()=>{return index+1})
    // }
    // const questions=[<Q1 key={Math.random()} addAnswer={addAnswerHandler}></Q1>,
    //                  <Q2 key={Math.random()} addAnswer={addAnswerHandler}></Q2>,
    //                  <Q3 key={Math.random()} addAnswer={addAnswerHandler}></Q3>,
    //                  <Q4 key={Math.random()} addAnswer={addAnswerHandler}></Q4>]
    const Category_Selected=(par)=>{
        setCat(par)
        setOriginalCat(par[0])
    }

    //1 -> for him / for her / for them
    //2 -> for kids / babies
    //3 -> Others
    const questions = {
        1:[
            {'question':'What are they into?','tags':['technology','sports','clothing']},
            {'question':'Do they like wearing watches/rings or other accessories','options':['Yes','No'],'tags':['accessories']},
            {'question':'What about some of theme','tags':['decoration','bouqets','flowers','gift / flower basket']},
        ],
        2:[
            {'question':'What about some of these?','tags':['toys','clothing','gift / flower basket']},
            {'question':'Would you like considering these also?','tags':['decoration','gift / flower basket']},
        ],
        3:[
            {'question':'Choose your price range','tags':['<1000','1000-2500','2500-5000','>5000'],'price':true},
        ]
    }


    const category= 
    <div className={styles.inner}>
    <div className={styles.salBuff}>
        <Salutation></Salutation>
    </div>
    <div className={styles.queBuff}>
        <Q1 addAnswer={Category_Selected}></Q1>
    </div>
   
    <div className={styles.btnWrap}>
        {/* <QButton see={true}></QButton> */}
        {/* <QButton></QButton> */}
    </div>
    </div>
    useEffect(()=>{
        if (!price){return}
        console.log("price",price)
        setPush(true);
    },[price])  
    useEffect(()=>{
        if (!push && !cat){return}
        console.log("pushing",cat)
        console.log(tags)
        const objToSend={
            category:originialCat,
            tags:tags,
            price:price===0 ? [0,100000]:price
        }
        console.log(objToSend)
        // const temp = questions
        // delete temp[3]
        // const { 3, ...newObj } = objToSend;
        // console.log(questions)
        const { "3": _, ...updatedObject } = questions;
        console.log("updated",updatedObject);
        ctx.init(objToSend,questions)
        // console.log(objToSend)
        router.push('/Homepage')
    },[push])
    useEffect(()=>{
        if(!cat){return;}
        // if (!questions){return;}
        console.log("hi",questions)
        setLimIndex(questions[cat[0]].length)
        const questionFlow = questions[cat[0]].map((question)=>{
            return (<Question 
                skipIndex={()=>{
                    setSkiptrig(true);  
                    console.log("skipping")
                    // setIndex(prev=>prev+1)
                }}
                seeGifts={()=>{
                    console.log("see")
                    setPush(true);
                }}
                onSelectOption={(tag)=>{
                tag[1] ? setPrice(()=>{
                    // console.log("tag1",typeof tag[0])
                    // console.log("tag1",typeof '<1000')
                    // console.log(tag[0]==='<1000')
                    if (tag[0]==='<1000'){ return [0,1000]}
                    else if (tag[0]==='1000-2500'){ return [1000,2000]}
                    else if (tag[0]==='2500-5000'){ return [2500,5000]}
                    else if (tag[0]==='>5000'){ return [5000,100000]}
                    else{
                        return [0,100000]
                    }
                }) : (console.log("seeting tag"),setTags(prev=>[...prev,tag[0]]));
                }}    
            key={Math.random()} isPrice={question.price ? true:false} question={question.question} options={!question.options ? question.tags : question.options} yesno={question.options ? question.tags[0]:false}></Question>);
        })

        setQues(questionFlow);

    },[cat])

    useEffect(()=>{ 
        console.log("in skip trig",index)
        if (!cat || !skiptrig){return}
        if (index+1>=questions[cat[0]].length){
            if (cat[0]===3){
                
                setPush(true);
                // let objToSend={};
                // if (tags.length>0){
                //     objToSend={
                //         category:cat[1],
                //         tags:tags,
                //         price:price
                //     }
                // }
                // else{
                //     objToSend={
                //         category:cat[1],
                //         tags:[],
                //         price:price
                //     }
                // }
                
                // console.log("*******pushing******")
                // console.log(objToSend)
                    // router.push('/Homepage')
            }
            setCat(prev=>[3,prev[1]])
            setIndex(0);
        }
        else{
            setIndex(prev=>prev+1)
        }
    },[skiptrig])
    // useEffect(()=>{
    //     if (!cat){return}
    //     console.log("*******pushing******")
    //     const objToSend={
    //             category:cat[1],
    //             tags:!tags.length===0 ? tags.slice(0, tags.length - 1):[],
    //             price:price
    //         }
    // },[price])
    useEffect(()=>{
        console.log("uswe effetc",index)
        
        setSkiptrig(false)
    },[index])
    // useEffect(()=>{
    //     if (!skiptrig){}
    //     console.log("in skip",index)
    //     console.log("in skip",questions[cat[0]].length)
    //     if(index+1>=questions[cat[0]].length){
    //         console.log("cat changes")
    //         if (cat[0]===3){
    
    //             const objToSend={
    //                 category:cat[1],
    //                 tags:tags.slice(0, tags.length - 1),
    //                 price:tags[tags.length - 1]
    //             }
    
    //             console.log("*******pushing******")
    //             console.log(objToSend)
    //             // router.push('/Homepage')
    //         }
    //         setCat(prev=>[3,prev[1]])
    //         setIndex(0);
    //     }
    //     else{
    //         console.log("updating index")
    //         setIndex(prev=>prev+1);
    //     }
    // },[skiptrig])
    useEffect(()=>{
        console.log("tags",tags)
        if (tags.length===0){return;}

        if(index+1>=questions[cat[0]].length){
            console.log("cat changes")
            if (cat[0]===3){

                setPush(true);
                // const objToSend={
                //     category:cat[1],
                //     tags:!tags.length===0 ? tags:[],
                //     price:price
                // }

                // console.log("*******pushing******")
                // console.log(objToSend)
                // router.push('/Homepage')
            }
            setCat(prev=>[3,prev[1]])
            setIndex(0);
        }
        else{
            setIndex(prev=>prev+1);
        }
        // console.log("ni set index")
        // setIndex(prev=>prev+1)
    },[tags])
    return(
        <div className={styles.cont}>
           {!cat ? category : undefined}
           {cat && ques ? ques[index]:undefined}
            {/* <Question></Question> */}
        </div>
        
    );
}
export default GetStarted;