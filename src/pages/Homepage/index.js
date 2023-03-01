import { Fragment } from 'react';
import Header from '../../../Components/Header/Header'
import HomeGrid from '../../../Components/Products/HomeGrid';
import Recommendation from '../../../Components/Products/Recommendation';
const Homepage=()=>{
    const data = {
        id: '6430yuio34b13078h31',
        name:'Teddy Bear',
        desc:'A home to aviation',
        seller:'Al-Fatah',
        price:'Rs. 2000',
        image:'/static/images/icons/Teddy.png'
    }
    const questions={
        question:'What is the person’s age you are buying the gift for ?',
        options:['< 16 Years','< 16-24 Years','< 25-40 Years','> 40 Years']
    };
    const btnGiftItemHandler=()=>{

    }
    return(
        <Fragment>
            <Header></Header>
            <Recommendation data={data} questions={questions}></Recommendation>
            <HomeGrid data={data}></HomeGrid>
        </Fragment>
    );
};
export default Homepage;