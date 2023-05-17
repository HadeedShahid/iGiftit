import ProductView from "../../../Components/ProductView/ProductView";
import {useRouter} from 'next/router'
import { Fragment, useEffect, useState } from "react";
import Spinner from '../../../Components/Spinner/Spinner'
const Product=()=>{
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true)
    const [data,setData] = useState(null);
    // const sourceP = router.query.source;
    //fetch the data for the product by id
    //example data (also how the data should look like)
    useEffect(()=>{
        const prodId = router.query.prodId;
        // const sourceP = query.source;
        if (prodId){
            console.log("id",prodId)

            const options={
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({id:prodId})
            }
        
            fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Products/getProductById`,options) .then((response) => response.json())
            .then((data) => {setIsLoading(false);setData(data.product)}).catch(error => {
                console.log(error);
                setIsLoading(false);
            });
        }
    },[router.query.prodId]);
    

    const cards = [
        {id:'Card1',image:'/static/GreetingCards/Card1.png'},
        {id:'Card2',image:'/static/GreetingCards/Card2.png'},
        {id:'Card3',image:'/static/GreetingCards/Card3.png'},
        {id:'Card4',image:'/static/GreetingCards/Card4.png'},
        {id:'Card5',image:'/static/GreetingCards/Card5.png'},
        {id:'Card6',image:'/static/GreetingCards/Card6.png'},
    ]
    return(
        <Fragment>
            {isLoading ? <Spinner></Spinner>:undefined}
            {data ?  <ProductView data={data} cards={cards}></ProductView> : undefined}
        </Fragment>
    );
};
export default Product;