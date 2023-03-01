import React from "react";
import Item from "../Products/Item";
import Questions from "../Questions/Questions";
import styles from './Recommendation.module.css';
import Input from '../UI/Input';
// import Input from "../UI/Input";
// import Questions from "../UI/Questions";
const Recommendation=(props)=>{
    const data = props.data
    const questions= props.questions
    console.log(questions)
    return (
        <div className={styles.hi}>
            <div className={styles.heading}>Recommendations</div>
            <div className={styles.grid}>
                <Item  data={data} classes={`${styles.firstRecommend} ${styles.itemCard}`}></Item>
                <Item data={data} classes={`${styles.secondRecommend} ${styles.itemCard}`}></Item>
                <div className={styles.question}>
                    <Questions data={questions} classes={`${styles.colorCard} ${styles.largeCard} ${styles.propClass} ${styles.height}`}></Questions>
                    <Input  classes={`${styles.colorCard} ${styles.smallCard}`}></Input>
                </div>
                {/* <Card><Item size={'large'} height={styles.equal} rec={true} name={'temp/Teddy.png'}></Item></Card>
                <Card><Item size={'medium'} height={styles.equal} rec={true} name={'temp/cake.png'}></Item></Card>
                <div>
                    <Questions></Questions>
                    <Input></Input>
                </div> */}
            </div>
            
            
        </div>
    );
};
export default Recommendation