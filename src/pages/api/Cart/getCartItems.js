import { getCartItems } from "lib/prisma/users";
export default async function handler(req,res){
    console.log("in handler")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        const{email} = req.body;

        const cartItems = await getCartItems(email);

        if (!cartItems){
            res.status(500).json({message:'Error in getting all orders'})
            throw new Error('Error in getting all orders');
        }
        console.log("cartItems,",cartItems);

        res.status(200).json({"cartItems":cartItems});

       
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}