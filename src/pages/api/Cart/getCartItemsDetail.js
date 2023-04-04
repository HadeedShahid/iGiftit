import { getProductById } from "lib/prisma/products";
export default async function handler(req,res){
    console.log("in handler")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        const {items} = req.body;

        // const items = prods.map((prod)=>{
        //     getProductById(email)
        // })
        // const cartItems = await getProductById(email);

        // if (!cartItems){
        //     res.status(500).json({message:'Error in getting cartItems'})
        //     throw new Error('Error in getting cartItems');
        // }
        console.log("cartItems,",items);
        const keys = items.map((prod)=>{
            return Object.keys(prod)[0]
        })

        const productDetailsPromises = keys.map(async (key) => {
            const data = await getProductById(key);
            return data;
          });

        const productDetails = await Promise.all(productDetailsPromises);

        // console.log("in api route", productDetails)

        res.status(200).json({"cartItems":productDetails});

        
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}