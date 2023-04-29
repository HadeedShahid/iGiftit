import { Fragment, useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header'
import HomeGrid from '../../../Components/Products/HomeGrid';
import Recommendation from '../../../Components/Products/Recommendation';
import SearchBar from 'Components/UI/SearchBar';
// import prisma from 'lib/prisma';
const Homepage=(props)=>{
    const data = props.products
   


    const questions={
        question:'What is the person’s age you are buying the gift for ?',
        options:['< 16 Years','< 16-24 Years','< 25-40 Years','> 40 Years',
    '< 16 Years','< 16-24 Years','< 25-40 Years','> 40 Years']
    };
    
    
    // const temp = Array(50).fill(data.slice(2)).reduce((acc, val) => acc.concat(val), []) 
    // const tempdata = temp.map((t, i) => ({...t, name: String(i + 1)}));
    // console.log("tempdata",tempdata)
    return(
        <Fragment>
            {/* <h1>{data?"tr":"fa"}</h1> */}
            <Header></Header>
            <SearchBar></SearchBar>
            <Recommendation data={data?[data[0],data[1]]:{}} questions={questions}></Recommendation>
            <HomeGrid questions={questions} data={data?data.slice(2):{}}></HomeGrid>            
        </Fragment>
    );
};


export async function getServerSideProps() {
    // Access environment variables using process.env on server-side
    const vercelUrl = process.env.NEXT_PUBLIC_CUSTOM_URL;
    // Fetch data using environment variables
    const options={
        method:"GET",
        headers:{'Content-Type':'application/json'}
        // body:JSON.stringify({})
    }
    console.log("url",process.env.NEXT_PUBLIC_CUSTOM_URL)
    // fetch('http://localhost:3000/api/Products/getProducts',options) .then((response) => response.json())
    // .then((data) => {console.log(data.products);setData(data.products)})

    let fetchedData = {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Products/getProducts`,options);
        const jsonData = await response.json();
        fetchedData = jsonData.products;
    } catch (error) {
        console.log("***error",error)
    }
   
  
    // const fetchedData =  await fetch(`http://igiftit.vercel.app/api/Products/getProducts`,options) .then((response) => response.json())
    // .then((data) => {console.log(data.products); return data.products})

    // const fetchedData = await prisma.products.findMany()

    console.log("*****url",vercelUrl);
    console.log("****data",fetchedData)
    // Pass the fetched data as props to the page component
    return {
      props: {
        products: fetchedData,
      },
    };
  }
  
export default Homepage;