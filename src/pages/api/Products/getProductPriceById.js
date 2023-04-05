import { getProductById } from "lib/prisma/products";

export default async function handler(req,res){
    console.log("in handler")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        // const{email} = req.body;
        const {id} = req.body
        console.log("product id",typeof id)
        const product = await getProductById(id);

        if (!product){
            res.status(500).json({message:'Error in getting the product'})
            throw new Error('Error in getting the product');
        }
        // console.log("new Order,",JSON.stringify(newOrder));

        res.status(200).json({"price":product.price});

       
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}