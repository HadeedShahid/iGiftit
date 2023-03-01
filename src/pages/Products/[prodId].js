import ProductView from "../../../Components/ProductView/ProductView";
import {useRouter} from 'next/router'
const Product=()=>{
    const router = useRouter();
    const prodId = router.query.prodId;
    //fetch the data for the product by id
    //example data (also how the data should look like)
    const data = {
        id: '6430yuio34b13078h31',
        name:'Teddy Bear',
        desc:'A home to aviation',
        longDesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.',
        seller:'Al-Fatah',
        price:'Rs. 2000',
        colors:['Black','Brown',"Navy","Red"],
        images:['/static/images/icons/Teddy.png','/static/images/scroll/scroll2.png','/static/images/icons/Teddy.png']
    }
    return(
        <ProductView data={data}></ProductView>
    );
};
export default Product;