import { getOrders } from "lib/prisma/orders";
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
        const{email} = req.body;

        const newOrder = await getOrders(email);

        if (!newOrder){
            res.status(500).json({message:'Error in getting all orders'})
            throw new Error('Error in getting all orders');
        }
        console.log("new Order,",JSON.stringify(newOrder));

        res.status(200).json({"orders":newOrder});

       
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}