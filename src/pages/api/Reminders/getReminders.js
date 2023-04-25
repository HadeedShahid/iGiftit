import { getReminders } from "lib/prisma/reminders";

export default async function handler(req,res){
    console.log("in handler")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        const{email} = req.body;

        const reminders = await getReminders(email);

        if (!reminders){
            res.status(500).json({message:'Error in getting reminders'})
            throw new Error('Error in getting all reminders');
        }
        // console.log("new Order,",JSON.stringify(newOrder));

        res.status(200).json({"reminders":reminders});

       
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}