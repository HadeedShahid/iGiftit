import { addAddress } from "lib/prisma/users";
export default async function handler(req,res){
    console.log("in handler")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        const{email,addressToAdd} = req.body;
        console.log("email",email)
        console.log("add to add",addressToAdd)
        const updatedUser = await addAddress(email,addressToAdd);
        if (!updatedUser){
             throw new Error(error);
        }
        // console.log("updateduser,",updatedUser);
        res.status(200).json({updatedUser:updatedUser});

       
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}