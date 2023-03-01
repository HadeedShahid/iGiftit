import { getOrders } from "lib/prisma/orders";
/*
input:
{"orderToAdd" : {
    "userEmail":"bscs19041@itu.edu.pk",
    "status": "on da way",
    "amount": "20000",
    "date":"12-4-22",
    "wrap":true,
    "card":true,
    "items": [{"name":"Air King","QTY":"1","Color":"Blue"}]
}}
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