import { Fragment, useState, useEffect } from "react";
import styles from './GreetingCardModal.module.css'
import Card from "Components/UI/Card";



// '/static/GreetingCards/Card1.png'
const GreetingCardModal=(props)=>{
    const [pressed,setPressed] = useState("");
    const [card,setCard] = useState();
    const [name,setName] = useState();
    const [wish,setWish] = useState();
    const selectCardBtns = props.cards.map((card)=>{
        return <button key={Math.random()} onClick={()=>{setPressed(card.id)}} id={card.id} className={pressed === card.id ? styles.border:undefined}><img src={card.image}></img></button>    
    })
    const selectCard = <Fragment><div className={styles.title}>Please Select any of the Following Greeting Cards</div><div className={styles.cardBtn}>{selectCardBtns}</div></Fragment>
    const NameHandler=(e)=>{
        setName(e.target.value)
    }
    const WishHandler=(e)=>{
        setWish(e.target.value)
    }
    useEffect(() => {
        const obj = props.cards.find(o => o.id === pressed)
        if (obj){
            // console.log("In IF",obj.image)
            setCard(
                <Fragment>
                    <div className={styles.title}>What do you want to write on the Greeting Card</div>
                    <img src={obj.image}></img>
                    <form className={styles.cardInput} onSubmit={(e)=>{
                        e.preventDefault();
                        console.log("wish",wish)
                        console.log("name",name)

                        console.log({name,wish})
                        // props.onAddGreetCard({name,wish})
                    }}>
                        <label>Full Name</label>
                        <input type='text' onChange={NameHandler}></input>
                        <label>Greeting Wish (optional)</label>
                        <input type='text'  onChange={WishHandler}></input>
                        <button>Add Greeting Card</button>
                    </form>
                </Fragment>
            )
        }
      },[pressed,wish,name])
    return(
        <Fragment>
            <Card classes={styles.card}>
            {pressed == "" ? selectCard : card}
            {/* {console.log("pressed",pressed)} */}
            {/* {console.log("loging in ",)} */}
            </Card> 
            <div className={styles.backdrop} onClick={props.onClose}></div>

        </Fragment>
    );
};
export default GreetingCardModal;