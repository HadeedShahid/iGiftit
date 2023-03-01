import styles from './ProductView.module.css'
import Header from '../Header/Header';
import VerticleScroll from './VerticleScroll';
import ProductInfo from './ProductInfo';
import { Fragment,useContext,useEffect } from 'react';
import userCartContext from 'Contexts/CartContext';
const ProductView=(props)=>{

   
      
    const ctx = useContext(userCartContext);

    const { id,longDesc,images, ...remain } = props.data;
    const prodInfo = remain;

    useEffect(() => {
        //Runs only on the first render
        console.log(ctx.cartItems)
    }, [ctx.cartItems]);

    const addToCartHandler=(quantity)=>{
        console.log("in hadnelr")
        const prodId = props.data.id;
        ctx.addCartItem({ [prodId]:quantity});
    }
    return(
        <Fragment>
            <Header></Header>
            <div>hi</div>
            <div className={styles.wrapper}>
                <div className={styles.TextWrap}>
                    <div className={styles.heading}>Product Description</div>
                    <div className={styles.desc}>{props.data.longDesc}</div>
                </div>
                <VerticleScroll data = {props.data.images}></VerticleScroll>
                <div className={styles.prodInfo}>
                    <ProductInfo onAddCart={addToCartHandler} data={prodInfo}></ProductInfo>
                </div>
            </div>
           
            
        </Fragment>
    );
};

export default ProductView;
