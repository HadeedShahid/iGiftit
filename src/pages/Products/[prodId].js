import ProductView from "../../../Components/ProductView/ProductView";
import {useRouter} from 'next/router'
const Product=()=>{
    const router = useRouter();
    const prodId = router.query.prodId;
    //fetch the data for the product
    return(
        <ProductView></ProductView>
    );
};
export default Product;