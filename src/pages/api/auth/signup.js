import { createUser,getUserbyemail } from "lib/prisma/users";
import { hash } from "bcryptjs";
export default async function handler(req,res){
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        const{email,password,name} = req.body;
        //check duplicate user
        console.log(email);
        const checkexisting = (await getUserbyemail(email)).user;
        console.log("check existing,",checkexisting)
        if (checkexisting){return res.status(422).json({message:"User Already exists"});}

        const {user, error} = createUser({username:name,email,password:await hash(password,12),addresses:await JSON.stringify([])});
        if (error){
            throw new Error(error);
        }
        res.status(200).json({message:'User Created successfully'})
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}


// import connectMongo from "database/conn";
// import Users from "model/Schema";
// import { hash } from "bcryptjs";
// export default async function handler(req,res){
//     connectMongo().catch(error=>res.json({error:'Connection failed'}))

//     if (req.method==='POST'){
//         if(!req.body){return res.status(404).json({error:'No data'})}
//         const{email,password,name} = req.body;
//         //check duplicate user

//         const checkexisting = await Users.findOne({email});
//         if (checkexisting){return res.status(422).json({message:'User Already exists'});}

//         // console.log(await hash(password,12));
//         // console.log('--------------------');
//         Users.create({username:name,email,password:await hash(password,12)},(err,data)=>{
//             if (err){return res.status(404).json({err})}
//             return res.status(201).json({status:true, user:data})
//         });
//     }   
//     else{
//         res.status(500).json({message:'Method Error'})
//     }
// }