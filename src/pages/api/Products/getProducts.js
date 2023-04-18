import { getProducts } from "lib/prisma/products";
/*
input: array of product ids
[

]

output: fetch the image, name, price, maker, short desc, 
*/
export default async function handler(req,res){
    console.log("in handler")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        // const{email} = req.body;

        const products = await getProducts();

        if (!products){
            res.status(500).json({message:'Error in getting all products'})
            throw new Error('Error in getting all products');
        }
        // console.log("new Order,",JSON.stringify(newOrder));
        // console.log("***Fetched products",products)
        res.status(200).json({"products":products});

       
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}