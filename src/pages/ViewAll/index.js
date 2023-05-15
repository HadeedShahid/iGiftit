import { Fragment, useContext, useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header'
import HomeGrid from '../../../Components/Products/HomeGrid';
import Recommendation from '../../../Components/Products/Recommendation';
import SearchBar from 'Components/UI/SearchBar';
import Footer from 'Components/Footer/Footer';
import Spinner from '../../../Components/Spinner/Spinner'
// import { useRouter } from 'next/router'
// import prisma from 'lib/prisma';
// import recContext from 'Contexts/RecContext';
import ViewAllGrid from 'Components/ViewAll/ViewAllGrid';
const Homepage=(props)=>{

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts,setFilteredProducts] = useState();
    useEffect(()=>{
        setIsLoading(true)
            const options = {method: "GET",
                headers: { 'Content-Type': 'application/json' },
            }
            fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Products/getProducts`, options)
            .then(response => response.json())
            .then(jsonData => {
                console.log("*********************puoerfhq************",jsonData.products)
                setData(jsonData.products);
                setFilteredProducts(jsonData.products)
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });

            
    },[])
    
    useEffect(() => {
        if (!data){return;}
        // setFilteredProducts(data)
        console.log("in")
        setFilteredProducts(data.filter((product) => {
            return product.name.toLowerCase().includes(searchQuery.toLowerCase());
          }));
        // console.log(searchQuery)
        // console.log(filteredProducts)
        // setData(filteredProducts)
      }, [searchQuery]);

    return(
        <Fragment>
            <Header></Header>
            <SearchBar value={searchQuery} onChange={(e)=>{setSearchQuery(e)}}></SearchBar>
            <ViewAllGrid searchQuery={searchQuery} data={filteredProducts}></ViewAllGrid>
            <Footer></Footer>
            {isLoading ? <Spinner></Spinner>:undefined}
        </Fragment>
    );
};
  
export default Homepage;