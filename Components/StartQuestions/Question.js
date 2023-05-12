import styles from './Question.module.css'
import QButton from './QButton';
const Question=(props)=>{
    return(
        <div className={styles.cont}>
            <div className={styles.left}>
                <div className={styles.innerLeft}>
                    <div className={styles.logo}>iGift it<span>.</span></div>
                    <div className={styles.text}>
                        <div className={styles.que}>
                            {/* Who are you looking to buy a gift for ? */}
                            {props.question}
                        </div>
                        <div className={styles.ans}>
                            {props.options.map((option)=>{return(
                                <div key={Math.random()} onClick={()=>{props.onSelectOption([props.yesno ? props.yesno : option,props.isPrice])}} className={styles.options}>{option}</div>
                            );})}
                            {/* <div className={styles.options}>For him</div>
                            <div className={styles.options}>For him</div>
                            <div className={styles.options}>For him</div> */}
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <QButton seeGifts={props.seeGifts} see={true}></QButton>
                        <QButton skipIndex={props.skipIndex}></QButton>
                    </div>
                </div>
                
            </div>
            <div className={styles.right}>
                <img src='/static/images/questions/q.jpg'></img>
            </div>
           
        </div>
    );
}
export default Question;