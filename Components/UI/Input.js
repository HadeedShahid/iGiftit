import styles from './Input.module.css'
import Card from './Card'
import BtnNumeric from './BtnNumeric';
import recContext from 'Contexts/RecContext';
import { useContext,useEffect,useState } from 'react';
const Input=(props)=>{
    const ctx = useContext(recContext);
    const[quantity,setQuantity] = useState(ctx.recItems.price)
    const quantityHandler=(event)=>{
        console.log("setting quant", event.target.value)
        setQuantity(event.target.value);
    }
    useEffect(()=>{setQuantity(ctx.recItems.price)},[ctx.recItems])
    return (
        <Card classes={`${styles.width} ${props.classes}`}>
            <form onSubmit={(e)=>{e.preventDefault()}} className={styles.FormWrap}>
                <h1 className={styles.title}>Price Range</h1>
                <div className={styles.Wrap}>
                    <div className={styles.InpWrap}>
                        <label>From</label>
                        <div className={styles.container}>
                            <input onChange={quantityHandler} value={quantity[0]} type="number" ></input>
                            <div className={styles.btnContainer}>
                                <BtnNumeric onClick={()=>{ctx.changePrice("incless")}} type={'up'}></BtnNumeric>
                                <BtnNumeric  onClick={()=>{ctx.changePrice("decless")}} type={'dn'}></BtnNumeric>
                            </div>
                        </div>
                    </div>
                    <div className={styles.InpWrap}>
                        <label>To</label>
                        <div className={styles.container}>
                            <input onChange={quantityHandler}  value={quantity[1]} type="number"></input>
                            <div className={styles.btnContainer}>
                                <BtnNumeric  onClick={()=>{ctx.changePrice("incmore")}} type={'up'}></BtnNumeric>
                                <BtnNumeric  onClick={()=>{ctx.changePrice("decmoree")}} type={'dn'}></BtnNumeric>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </form>
            
        </Card>
    );
};
export default Input;