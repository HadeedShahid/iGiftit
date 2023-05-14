import { Fragment, useContext, useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header'
import HomeGrid from '../../../Components/Products/HomeGrid';
import Recommendation from '../../../Components/Products/Recommendation';
import SearchBar from 'Components/UI/SearchBar';
import Footer from 'Components/Footer/Footer';
import Spinner from '../../../Components/Spinner/Spinner'
// import { useRouter } from 'next/router'
// import prisma from 'lib/prisma';
import recContext from 'Contexts/RecContext';
const Homepage=(props)=>{

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [uids,setUids] = useState()
    // const data = props.products
    const ctx = useContext(recContext);
    useEffect(()=>{
        console.log("rec data has changed!!!!",JSON.stringify(ctx.recItems))
        // ctx.changed()
        // setData()
        // setIsLoading(true)
    },[ctx.recItems])
    useEffect(()=>{
        setIsLoading(true)
        console.log("retrieving new productswfiuleber;kjl")
        console.log("from homepage",ctx.recItems)
        // if (!data){
            const vercelUrl = process.env.NEXT_PUBLIC_CUSTOM_URL;
            // const bdy = `{"price": ${JSON.stringify(ctx.recItems.price)}, "category": ${JSON.stringify(ctx.recItems.category)}, "tag": ${JSON.stringify(ctx.recItems.tags)}}`;
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
            // console.log("bdy/////",bdy)
            // const obj = {
            //         "category": "For Them",
            //         "tags": [
            //             "Technology",
            //             "Accessories",
            //             "Decoration Pieces"
            //         ],
            //         "price": [
            //             0,
            //             1000
            //         ]
            //     }
            // const bdy = `{"price": ${JSON.stringify(obj.price)}, "category": ${JSON.stringify(obj.category)}, "tag": ${JSON.stringify(obj.tags)}}`;
            // Fetch data using environment variables
            
            // console.log("url",process.env.NEXT_PUBLIC_CUSTOM_URL)
            // fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Products/getProducts`, options)
            // .then(response => response.json())
            // .then(jsonData => {
            //     console.log("*********************puoerfhq************",jsonData.products)
            //     setData(jsonData.products);
            //     setIsLoading(false);
            // })
            // .catch(error => {
            //     console.log(error);
            //     setIsLoading(false);
            // });

            
        // }
        // let fetchedData = {}
        // try {
        //     const response = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Products/getProducts`,options);
        //     const jsonData = await response.json();
        //     fetchedData = jsonData.products;
        // } catch (error) {
        //     console.log("***error",error)
        // }
    },[ctx.recItems])

    useEffect(()=>{
        if (!uids){return}
        console.log("uid change")
        // const promises = uids.map(async (uid) => {
        //     const options={
        //         method:"POST",
        //         headers:{'Content-Type':'application/json'},
        //         body: JSON.stringify({id:uid})
        //     }
        //     const response = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Products/getProductsByUid`);
        //     const data = await response.json();
        //     return data;
        // });
          
        // const productData = await Promise.all(promises);
        // setProductData(productData);

        Promise.all(uids.map(uid =>
            fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Products/getProductsByUid`, {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: uid })
            })
              .then(response => response.json())
          ))
            .then(productData => {
            //   console.log("products fetched: ", productData);
            //   console.log("products fetched: ", productData);
              const products = productData.map((prod)=>{
                const obj = prod.product
                obj.price *= 100;
                return obj
            })
            console.log(products)
            let temp = products
            // if (ctx.recItems.price.length !== 0){
            //     console.log("filtered",ctx.recItems.price[0])
            //     console.log("filtered",ctx.recItems.price[1])
            //     temp = products.filter(product => product.price > (ctx.recItems.price[0]-200) 
            //                             && product.price <= (ctx.recItems.price[0]+200));
            //     console.log("temp",temp)
            // }
            // else{
            //     temp = products
            // }
            
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
    
    
    // const temp = Array(50).fill(data.slice(2)).reduce((acc, val) => acc.concat(val), []) 
    // const tempdata = temp.map((t, i) => ({...t, name: String(i + 1)}));
    // console.log("tempdata",tempdata)
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