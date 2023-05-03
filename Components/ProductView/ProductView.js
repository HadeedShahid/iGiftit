import styles from './ProductView.module.css'
import Header from '../Header/Header';
import VerticleScroll from './VerticleScroll';
import ProductInfo from './ProductInfo';
import { Fragment,useContext,useEffect, useState } from 'react';
import userCartContext from 'Contexts/CartContext';
import { useRouter } from 'next/router';
import Spinner from '../Spinner/Spinner'
//helper compoenent ( recieves data from parent component after all the fetching and send to chidlren)
//all the other data processing done here
const ProductView=(props)=>{
    const ctx = useContext(userCartContext);
    const [loading,setIsLoading] = useState(false);
    const { id,longDesc,images, ...remain } = props.data;
    const prodInfo = remain;
    console.log("info",prodInfo)
    const router = useRouter()

    // const addWrapHandler=()=>{}
    // const addCardMessageHandler=()=>{}
    const addToCartHandler =async(e)=>{
        setIsLoading(true);
        console.log("in hadnelr")
        const prodId = props.data.id;
        await ctx.addCartItem({ [prodId]:e});
        setIsLoading(false);
        router.push(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/Homepage`)
    }

    useEffect(() => {
        //Runs only on the first render
        console.log(ctx.cartItems)
    }, [ctx.cartItems]);


    
    return(
        <Fragment>
            {loading ? <Spinner></Spinner>:undefined}
            <Header></Header>
            <div className={styles.wrapper}>
                <div className={styles.TextWrap}>
                    <div className={styles.heading}>Product Description</div>
                    {/* <div className={styles.desc}>{props.data.long_description}</div> */}
                    <div className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae. Nisi vitae suscipit tellus mauris a. Elit ut aliquam purus sit amet luctus venenatis lectus. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Sed velit dignissim sodales ut eu. Lectus sit amet est placerat in. Et tortor consequat id porta nibh venenatis cras sed felis. Neque aliquam vestibulum morbi blandit cursus. Interdum consectetur libero id faucibus nisl tincidunt eget. Amet luctus venenatis lectus magna. Dictum sit amet justo donec enim.</div>

                </div>
                <VerticleScroll data = {props.data.images}></VerticleScroll>
                <div className={styles.prodInfo}>
                    <ProductInfo 
                        onAddCart={addToCartHandler} data={prodInfo} cards={props.cards}>    
                    </ProductInfo>
                </div>
            </div>
           
            
        </Fragment>
    );
};

export default ProductView;
