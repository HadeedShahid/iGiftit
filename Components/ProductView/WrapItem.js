import styles from './WrapItem.module.css';
import Button from '../UI/Button';
const WrapItem=()=>{
    const wraps=[
        {key:1 , wrap:'wrap1.png'},
        {key:2 ,wrap:'wrap2.png'},
        {key:3 ,wrap:'wrap3.png'},
    ]
    let c = 0;
    const wrap_btns=wraps.map((item)=>{
        c+=1;
        return <button key={c} className={styles.btn}>
            <img src={'/static/images/wraps/'+item.wrap} alt='first wrap'></img>
        </button>
    });
    return(
        <div className={styles.cont}>
            <div className={styles.heading}>Wrap Item <span>(optional)</span></div>
            <div className={styles.wrap}>
                <div className={styles.selectTitle}>Select Wrapping Paper</div>
                <div className={styles.buttonWidth}>
                    <div className={styles.buttonwrap}>{wrap_btns}</div>
                    <Button class={styles.GreetingCard}>
                        <div className={styles.selectGreet}>Select Greeting Card <span>(optional)</span></div>
                    </Button>
                </div>
                
            </div>
            
        </div>
    );
};
export default WrapItem;