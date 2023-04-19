// import { createUser,getUserbyemail } from "lib/prisma/users";
// import { hash } from "bcryptjs";
// export default async function handler(req,res){
//     if (req.method==='POST'){
//         if(!req.body){return res.status(404).json({error:'No data'})}
//         const{email,password,name} = req.body;
//         //check duplicate user
//         console.log(email);
//         const checkexisting = (await getUserbyemail(email)).user;
//         console.log("check existing,",checkexisting)
//         if (checkexisting){return res.status(422).json({message:"User Already exists"});}

//         const {user, error} = createUser({username:name,email,password:await hash(password,12),addresses:await JSON.stringify([])});
//         if (error){
//             throw new Error(error);
//         }
//         res.status(200).json({message:'User Created successfully'})
//     }   
//     else{
//        res.status(500).json({message:'Method Error'})

//     }
// }


// // import connectMongo from "database/conn";
// // import Users from "model/Schema";
// // import { hash } from "bcryptjs";
// // export default async function handler(req,res){
// //     connectMongo().catch(error=>res.json({error:'Connection failed'}))

// //     if (req.method==='POST'){
// //         if(!req.body){return res.status(404).json({error:'No data'})}
// //         const{email,password,name} = req.body;
// //         //check duplicate user

// //         const checkexisting = await Users.findOne({email});
// //         if (checkexisting){return res.status(422).json({message:'User Already exists'});}

// //         // console.log(await hash(password,12));
// //         // console.log('--------------------');
// //         Users.create({username:name,email,password:await hash(password,12)},(err,data)=>{
// //             if (err){return res.status(404).json({err})}
// //             return res.status(201).json({status:true, user:data})
// //         });
// //     }   
// //     else{
// //         res.status(500).json({message:'Method Error'})
// //     }
// // }




import { createUser, getUserbyemail } from "lib/prisma/users";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      try {
        const { email, password, name } = req.body;
        // Check for existing user
        const checkExisting = await getUserbyemail(email);
        if (checkExisting.user) {
          return res.status(409).json({ message: 'User already exists' });
        }
        // Create new user
        const { user, error } = await createUser({
          username: name,
          email,
          password: await hash(password, 12),
          addresses: await JSON.stringify([]),
        });
        if (error) {
          throw new Error(error);
        }
        console.log("****user",user)
        return res.status(201).json({ message: 'User created successfully', user });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error' });
      }
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
