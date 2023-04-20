import { emptyCart } from 'lib/prisma/users';

export default async function handler(req,res){
    console.log("in handler")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        const{email} = req.body;

        const cartItems = await emptyCart(email);

        if (!cartItems){
            res.status(500).json({message:'Error in getting cartItems'})
            throw new Error('Error in getting cartItems');
        }
        console.log("cartItems,",cartItems);

        res.status(200).json({"cartItems":cartItems});

       
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}