import { setCartItems } from "lib/prisma/users";
export default async function handler(req,res){
    console.log("in handler")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        const{email, cartitem} = req.body;
        console.log("email" ,email)
        console.log("items",cartitem)
        const cartItems = await setCartItems(email,cartitem);

        if (!cartItems){
            res.status(500).json({message:'Error in setting cart item'})
            throw new Error('Error in setting cart item');
        }
        console.log("new cartItems,",cartItems);

        res.status(200).json({"cartItems":cartItems});
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}