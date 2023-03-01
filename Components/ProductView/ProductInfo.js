import BtnChooseColor from '../UI/BtnChooseColor';
import BtnNumeric from '../UI/BtnNumeric';
import Button from '../UI/Button';
import styles from './ProductInfo.module.css';
import WrapItem from './WrapItem';
const ProductInfo=(props)=>{
    return(
        <div className={styles.cont}>
            <div className={styles.NamePrice}>
                <h1>Air King</h1>
                <p>Rs. 20,000</p>
            </div>
            <div className={styles.ByColor}>
                <p>By: Rolex</p>
                <p>Item Color</p>
                <BtnChooseColor></BtnChooseColor>
            </div>
            <WrapItem></WrapItem>
            <div className={styles.BottomWrapper}>
                <div className={styles.inputwrap}>
                    <BtnNumeric type={'min'}></BtnNumeric>
                    <input type='number' placeholder='1'></input>
                    <BtnNumeric type={'plus'}></BtnNumeric>
                </div>
                
                <Button class={styles.AddCartBtn}>
                    <div className={styles.Addtocart}>Add to Cart</div>
                    <img src='/static/images/icons/cartIconWhite.png' alt='Cart Icon'></img>
                </Button>
            </div>
        </div>
    );
};
export default ProductInfo;