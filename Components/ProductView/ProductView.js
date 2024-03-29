import styles from './ProductView.module.css'
import Header from '../Header/Header';
import VerticleScroll from './VerticleScroll';
import ProductInfo from './ProductInfo';
import { Fragment,useContext,useEffect, useState } from 'react';
import userCartContext from 'Contexts/CartContext';
import { useRouter } from 'next/router';
import Spinner from '../Spinner/Spinner'
import { useSession} from "next-auth/react"
//helper compoenent ( recieves data from parent component after all the fetching and send to chidlren)
//all the other data processing done here
const ProductView=(props)=>{
    const ctx = useContext(userCartContext);
    const [loading,setIsLoading] = useState(false);
    const { id,longDesc,images, ...remain } = props.data;
    const prodInfo = remain;
    console.log("info",prodInfo)
    const router = useRouter()
    const { data: session } = useSession()
    // const addWrapHandler=()=>{}
    // const addCardMessageHandler=()=>{}
    const addToCartHandler =async(e)=>{
        if (!session){router.push('/');return}
        setIsLoading(true);
        console.log("in hadnelr")
        const prodId = props.data.id;
        await ctx.addCartItem({ [prodId]:e});
        setIsLoading(false);
        router.back()
        // (props.source ? router.push(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/ViewAll`):router.push(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/Homepage`))
        
    }

    useEffect(() => {
        //Runs only on the first render
        console.log(ctx.cartItems)
    }, [ctx.cartItems]);


    
    return(
        <Fragment>
            <Header></Header>
            <div className={styles.wrapper}>
                <div className={styles.TextWrap}>
                    <div className={styles.heading}>Product Description</div>
                    {/* <div className={styles.desc}>{props.data.long_description}</div> */}
                    <div className={styles.desc}>{prodInfo.long_description}</div>

                </div>
                <VerticleScroll data = {props.data.images}></VerticleScroll>
                <div className={styles.prodInfo}>
                    <ProductInfo 
                        onAddCart={addToCartHandler} data={prodInfo} cards={props.cards}>    
                    </ProductInfo>
                </div>
            </div>
            {loading ? <Spinner></Spinner>:undefined}

           
            
        </Fragment>
    );
};

export default ProductView;
