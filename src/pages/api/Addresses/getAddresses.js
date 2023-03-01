import { getUserbyemail,getSavedAddresses } from "lib/prisma/users";
export default async function handler(req,res){
    console.log("in getadd")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        const {email} = req.body;
        console.log("email: ",email);
        //check duplicate user
        const checkexisting = (await getUserbyemail(email));
        console.log("check existing,",checkexisting)
        if (checkexisting){
            const addresses = await getSavedAddresses(email)
            if(addresses){

                console.log("****address***",addresses)
                res.status(200).json({message:addresses});
            }
        }
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}