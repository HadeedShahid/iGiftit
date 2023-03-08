import styles from './WrapItem.module.css';
import Button from '../UI/Button';
import { Fragment, useState } from 'react';
import GreetingCardModal from '../GreetingCard/GreetingCardModal';
const WrapItem=(props)=>{
    // const [pressed,setPressed] = useState("");
    const [selectCard,setSelectCard] = useState(false);
    const wrapBtnHandler=(event)=>{
        // setPressed( Number(event.target.id));
        // console.log (typeof event.target.id);
        props.onSelectWrap(Number(event.target.id))
        
    }
    const cardSelectHandler=()=>{
        setSelectCard(true);
        // props.onSelectCard(e)
    }
    const ModalHandler=()=>{
        setSelectCard(false);
    }
    const wraps=[
        {key:1 , wrap:'wrap1.png'},
        {key:2 ,wrap:'wrap2.png'},
        {key:3 ,wrap:'wrap3.png'},
    ]
    let c = 0;
    const wrap_btns=wraps.map((item)=>{
        c+=1;
        return <button onClick={wrapBtnHandler}  key={c} className={`${styles.btn} ${props.wrap === c ? styles.border:undefined}`}>
            <img id={c} src={'/static/images/wraps/'+item.wrap} alt='first wrap'></img>
        </button>
    });
    
    return(
        <Fragment>
            {selectCard && <GreetingCardModal onSelectCard={(e)=>{props.onSelectCard(e)}} card={props.card} cards={props.cards} onClose={ModalHandler}></GreetingCardModal>}
            <div className={styles.cont}>
                <div className={styles.heading}>Wrap Item <span>(optional)</span></div>
                <div className={styles.wrap}>
                    <div className={styles.selectTitle}>Select Wrapping Paper</div>
                    <div className={styles.buttonWidth}>
                        <div className={styles.buttonwrap}>{wrap_btns}</div>
                        <Button onClick={cardSelectHandler} class={styles.GreetingCard}>
                            <div className={styles.selectGreet}>Select Greeting Card <span>(optional)</span></div>
                        </Button>
                    </div>
                    
                </div>
                
            </div>
        </Fragment>
    );
};
export default WrapItem;