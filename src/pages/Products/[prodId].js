import ProductView from "../../../Components/ProductView/ProductView";
import {useRouter} from 'next/router'
import { Fragment, useEffect, useState } from "react";
const Product=()=>{
    const router = useRouter();
    const prodId = router.query.prodId;
    const [data,setData] = useState(null);
    //fetch the data for the product by id
    //example data (also how the data should look like)
    useEffect(()=>{
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({id:prodId})
        }
    
        fetch('http://localhost:3000/api/Products/getProductById',options) .then((response) => response.json())
        .then((data) => {console.log(data.product);setData(data.product)})
    },[]);
    

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
            {data ?  <ProductView data={data} cards={cards}></ProductView> : <h1>none</h1>}
        </Fragment>
    );
};
export default Product;