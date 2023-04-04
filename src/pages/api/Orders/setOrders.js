// import { addOrder } from "lib/prisma/orders";
// export default async function handler(req,res){
//     console.log("in handler")
//     if (req.method==='POST'){
//         if(!req.body){return res.status(404).json({error:'No data'})}
//         const{orderToAdd} = req.body;
//         console.log("*********orders to add**********",orderToAdd)
//         const neworderToAdd={...orderToAdd,items:JSON.stringify(orderToAdd.items)}
//         console.log("******orders to add*********",neworderToAdd)

//         const newOrder = await addOrder(neworderToAdd)

//         if (!newOrder){
//             res.status(500).json({message:'Error in creating new order'})
//             throw new Error("Error in creating new order");
//         }
//         console.log("new Order,",newOrder);

//         res.status(200).json({"new order":newOrder});

       
//     }   
//     else{
//        res.status(500).json({message:'Method Error'})

//     }
// }
import { addOrder } from "lib/prisma/orders";
export default async function handler(req,res){
    console.log("in handler")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        const{orderToAdd} = req.body;
        console.log("*********orders to add**********",orderToAdd)
        const neworderToAdd={...orderToAdd,items:JSON.stringify(orderToAdd.items)}
        console.log("******orders to add*********",neworderToAdd)

        const newOrder = await addOrder(neworderToAdd)

        if (!newOrder){
            res.status(500).json({message:'Error in creating new order'})
            throw new Error("Error in creating new order");
        }
        console.log("new Order, api",newOrder);

        res.status(200).json({"new order":newOrder});

       
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}