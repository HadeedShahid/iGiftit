import { Fragment, useContext, useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header'
import HomeGrid from '../../../Components/Products/HomeGrid';
import Recommendation from '../../../Components/Products/Recommendation';
import SearchBar from 'Components/UI/SearchBar';
import Footer from 'Components/Footer/Footer';
import Spinner from '../../../Components/Spinner/Spinner'
import recContext from 'Contexts/RecContext';
const Homepage=(props)=>{

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [uids,setUids] = useState()
    const ctx = useContext(recContext);
    useEffect(()=>{
        console.log("rec data has changed!!!!",JSON.stringify(ctx.recItems))
    },[ctx.recItems])
    useEffect(()=>{
        setIsLoading(true)
        console.log("retrieving new productswfiuleber;kjl")
        console.log("from homepage",ctx.recItems)
        const vercelUrl = process.env.NEXT_PUBLIC_CUSTOM_URL;
        try {
            const obj = {items:ctx.recItems}
            console.log("*****obj",obj)
            const options={
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(obj)
            }

            fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Products/getProductsFromApi`, options)
            .then(async response => await response.json())
            .then(jsonData => {
                // console.log("direct",jsonData)
                console.log("*********************puoerfhq************",jsonData.products)
                setUids(jsonData.products);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
        } catch (error) {
            console.log("***********error*************",error)
        }
    },[ctx.recItems])

    useEffect(()=>{
        if (!uids){return}
        console.log("uid change")
        Promise.all(uids.map(uid =>
            fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Products/getProductsByUid`, {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: uid })
            })
              .then(response => response.json())
          ))
            .then(productData => {
              const products = productData.map((prod)=>{
                const obj = prod.product
                obj.price *= 100;
                return obj
            })
            console.log(products)
            let temp = products
              console.log("products",temp)
              setData(temp);
              setIsLoading(false);
            })
            .catch(error => {
              console.error(error);
              setIsLoading(false);
            });
        
    },[uids])
    console.log("rendered")
    
    const questions={
        question:'Would you like to Checkout our Gift Baskets',
        options:['Yes','No']
    };
    
    return(
        <Fragment>
            <Header></Header>
            <SearchBar></SearchBar>
            {data ? <Recommendation data={data?[data[0],data[1]]:{}} questions={questions}></Recommendation>:undefined}
            {data ? <HomeGrid questions={questions} data={data?data.slice(2):{}}></HomeGrid>:undefined}
            <Footer></Footer>
            {isLoading ? <Spinner></Spinner>:undefined}

        </Fragment>
    );
};


// export async function getServerSideProps() {
//     return {
//       props: {
//         products: fetchedData,
//       },
//     };
//   }
  
export default Homepage;