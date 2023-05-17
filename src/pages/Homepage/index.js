import { Fragment, useContext, useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header'
import HomeGrid from '../../../Components/Products/HomeGrid';
import Recommendation from '../../../Components/Products/Recommendation';
import SearchBar from 'Components/UI/SearchBar';
import Footer from 'Components/Footer/Footer';
import Spinner from '../../../Components/Spinner/Spinner'
import recContext from 'Contexts/RecContext';
import { useRouter } from 'next/router';
import ToggleContext from 'Contexts/ToggleContext';
import styles from './index.module.css'
const Homepage=(props)=>{

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [uids,setUids] = useState()
    const [shouldRender,setShouldRender] = useState(false);
    const [trigger,setTrigger] = useState(false)
    const ctx = useContext(recContext);
    // const trigCtx = useContext(ToggleContext)
    const router=useRouter();
   
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('data'));
        const question = JSON.parse(localStorage.getItem('ques'))
        console.log("stored",data)
        if (data){
            ctx.init(data,question);
        }
        // const recc = ctx.recItems.length===0 ? ctx.recItems : undefined
        // console.log("rec",recc)
        !data ? router.replace('/GetStarted'):setShouldRender(true);
    },[trigger])
    useEffect(()=>{
        console.log("rec data has changed!!!!",JSON.stringify(ctx.recItems))
    },[ctx.recItems])
    useEffect(()=>{
        if (!setShouldRender){return}
        setIsLoading(true)
        // console.log("retrieving new productswfiuleber;kjl")
        // console.log("from homepage",ctx.recItems)
        const vercelUrl = process.env.NEXT_PUBLIC_CUSTOM_URL;
        try {
            const obj = {items:ctx.recItems}
            // console.log("*****obj",obj)
            const options={
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(obj)
            }

            fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Products/getProductsFromApi`, options)
            .then(async response => await response.json())
            .then(jsonData => {
                // console.log("direct",jsonData)
                // console.log("*********************puoerfhq************",jsonData.products)
                setUids(jsonData.products);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
        } catch (error) {
            console.log("***********error*************",error)
        }
    },[ctx.recItems,shouldRender])

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
            <SearchBar type={true}></SearchBar>
            {data ? <Recommendation data={data?[data[0],data[1]]:{}} questions={questions}></Recommendation>:undefined}
            {data ? <HomeGrid questions={questions} data={data?data.slice(2):{}}></HomeGrid>:undefined}
            <div className={styles.resetBtn}>
                <button onClick={()=>{localStorage.removeItem('data');localStorage.removeItem('ques');setTrigger(prev=>!prev)}}>Reset Reccomendation</button>
            </div>
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