import { Fragment, useState } from 'react';
import BtnChooseColor from '../UI/BtnChooseColor';
import BtnNumeric from '../UI/BtnNumeric';
import Button from '../UI/Button';
import styles from './ProductInfo.module.css';
import WrapItem from './WrapItem';
const ProductInfo=(props)=>{
    //do for wrapping and greeting cards
    const[quantity,setQuantity] = useState(1)
    const[wrap,setWrap] = useState();
    const[card,setCard] = useState();
    const addCartHandler=()=>{
       const  dataToSend={
            quantity:quantity,
            wrap:wrap,
            card:card,

        }
        props.onAddCart(dataToSend);
    }
    const quantityHandler=(event)=>{
        setQuantity(event.target.value);
    }
    return(
        <div className={styles.cont}>
            <div className={styles.NamePrice}>
                <h1>{props.data.name}</h1>
                <p>{props.data.price}</p>
            </div>
                <div className={styles.ByColor}>
                    <p>{props.data.seller}</p>
                    {props.data.colors && 
                        <Fragment>
                            <p>Item Color</p>
                            <BtnChooseColor data={props.data.colors}></BtnChooseColor>
                        </Fragment>
                    }
                    {props.data.sizes && 
                        <Fragment>
                            <p>Item Size</p>
                            <BtnChooseColor data={props.data.sizes}></BtnChooseColor>
                        </Fragment>
                    }
                </div>
                <WrapItem onSelectWrap={(e)=>{setWrap(e)}} onSelectCard={(e)=>{setCard(e)}} wrap={wrap} card={card} cards={props.cards}></WrapItem>
                <div className={styles.BottomWrapper}>
                    <div className={styles.inputwrap}>
                        <BtnNumeric type={'min'}></BtnNumeric>
                            <input onChange={quantityHandler} type='number' placeholder={quantity}></input>
                        <BtnNumeric type={'plus'}></BtnNumeric>
                    </div>  
                    <Button onClick={addCartHandler} class={styles.AddCartBtn}>
                        <div className={styles.Addtocart}>Add to Cart</div>
                        <img src='/static/images/icons/cartIconWhite.png' alt='Cart Icon'></img>
                    </Button>
                </div>
        </div>
    );
};
export default ProductInfo;