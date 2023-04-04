import { addAddress } from "lib/prisma/users";
export default async function handler(req,res){
    console.log("in handler")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        const{email,addressToAdd} = req.body;
        console.log("email",email)
        console.log("add to add",addressToAdd)
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email})
        }
        // console.log("userid",userId)
        const oldAddresses = await fetch('http://localhost:3000/api/Addresses/getAddresses',options).then(async res=>{return (await res.json()).message});
        // console.log("old Addresses",oldAddresses)
        // console.log(addressToAdd)

        const tempAddressToAdd = addressToAdd;
        // console.log("temp",tempAddressToAdd);
        oldAddresses.push(tempAddressToAdd);
        const updatedUser = await addAddress(email,oldAddresses);
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