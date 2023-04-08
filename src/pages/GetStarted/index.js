// import Salutation from "Components/StartQuestions/Salutation";
import QButton from "Components/StartQuestions/QButton";
import Salutation from "Components/StartQuestions/Salutation";
import styles from './GetStarted.module.css'
import Q1 from "Components/StartQuestions/Q1";
import Q2 from "Components/StartQuestions/Q2";
import Q3 from "Components/StartQuestions/Q3";
import Q4 from "Components/StartQuestions/Q4";
const GetStarted=()=>{
    return(
        <div className={styles.cont}>
            <Salutation></Salutation>
            {/* <Q1></Q1> */}
            {/* <Q2></Q2> */}
            {/* <Q3></Q3> */}
            <Q4></Q4>
            <div className={styles.btnWrap}>
                <QButton see={true}></QButton>
                <QButton></QButton>
            </div>
            
        </div>
        
    );
}
export default GetStarted;