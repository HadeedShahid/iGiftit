import { Fragment, useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header'
import HomeGrid from '../../../Components/Products/HomeGrid';
import Recommendation from '../../../Components/Products/Recommendation';
const Homepage=()=>{
    const[data,setData] = useState(undefined)
    // const data = {
    //     id: '6430yuio34b13078h31',
    //     name:'Teddy Bear',
    //     desc:'A home to aviation',
    //     seller:'Al-Fatah',
    //     price:'Rs. 2000',
    //     image:'/static/images/icons/Teddy.png'
    // }
    const questions={
        question:'What is the person’s age you are buying the gift for ?',
        options:['< 16 Years','< 16-24 Years','< 25-40 Years','> 40 Years']
    };
    useEffect(() => {
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({})
        }
        fetch('http://localhost:3000/api/Products/getProducts',options) .then((response) => response.json())
        .then((data) => {console.log(data.products);setData(data.products)})
    }, []);
    return(
        <Fragment>
            {/* <h1>{data?"tr":"fa"}</h1> */}
            <Header></Header>
            <Recommendation data={data?[data[0],data[1]]:{}} questions={questions}></Recommendation>
            <HomeGrid data={data?data:{}}></HomeGrid>
        </Fragment>
    );
};
export default Homepage;