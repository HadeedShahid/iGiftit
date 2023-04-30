import { Fragment, useState } from 'react';
import BtnChooseColor from '../UI/BtnChooseColor';
import BtnNumeric from '../UI/BtnNumeric';
import Button from '../UI/Button';
import styles from './ProductInfo.module.css';
import WrapItem from './WrapItem';
const ProductInfo=(props)=>{
    //do for wrapping and greeting cards
    const[quantity,setQuantity] = useState("1")
    const[wrap,setWrap] = useState();
    const[card,setCard] = useState();
    const[color,setColor] = useState();
    const[size,setSize] = useState();
    const addCartHandler=()=>{
       const  dataToSend={
            quantity:quantity,
            wrap:wrap,
            card:card,
            color:color,
            size:size
        }
        props.onAddCart(dataToSend);
    }
    const quantityHandler=(event)=>{
        console.log("setting quant", event.target.value)
        setQuantity(event.target.value);
    }
    return(
        <div className={styles.cont}>
            <div className={styles.lowerDiv}>
                <div className={styles.NamePrice}>
                    <h1>{props.data.name}</h1>
                    <p>Rs. {props.data.price}</p>
                </div>
                <div className={styles.ByColor}>
                    <p className={styles.By}>By: {props.data.seller}</p>
                    {props.data.colors && 
                        <Fragment>
                            <p className={styles.colors}>Item Color</p>
                            <BtnChooseColor data={props.data.colors} onClick = {(e)=>{setColor(e)}}></BtnChooseColor>
                        </Fragment>
                    }
                    {props.data.size && 
                        <Fragment>
                            <p className={styles.sizes}>Item Size</p>
                            <BtnChooseColor data={props.data.size} onClick = {(e)=>{setSize(e)}}></BtnChooseColor>
                        </Fragment>
                    }
                </div>
                <WrapItem onSelectWrap={(e)=>{setWrap(e)}} onSelectCard={(e)=>{setCard(e)}} wrap={wrap} card={card} cards={props.cards}></WrapItem>
                <div className={styles.BottomWrapper}>
                    <div className={styles.inputwrap}>
                        <BtnNumeric onClick={()=>{Number(quantity)==1 ? undefined : setQuantity(Number(quantity)-1)}} type={'min'}></BtnNumeric>
                            <input onChange={quantityHandler} type='text' value={quantity}></input>
                        <BtnNumeric onClick={()=>{setQuantity(Number(quantity)+1)}} type={'plus'}></BtnNumeric>
                    </div>  
                    <Button onClick={addCartHandler} class={styles.AddCartBtn}>
                        <div className={styles.Addtocart}>Add to Cart</div>
                        <img src='/static/images/icons/cartIconWhite.png' alt='Cart Icon'></img>
                    </Button>
                </div>
        </div>
           
        </div>
    );
};
export default ProductInfo;