import { addReminder } from "lib/prisma/reminders";
export default async function handler(req,res){
    console.log("in handler")
    if (req.method==='POST'){
        if(!req.body){return res.status(404).json({error:'No data'})}
        const{reminderToAdd} = req.body;
        // console.log("*********orders to add**********",orderToAdd)
        // const neworderToAdd={...orderToAdd,items:JSON.stringify(orderToAdd.items)}
        // console.log("******orders to add*********",neworderToAdd)

        const newReminder = await addReminder(reminderToAdd)

        if (!newReminder){
            res.status(500).json({message:'Error in creating new Reminder'})
            throw new Error("Error in creating new Reminder");
        }
        // console.log("new reminder, api",newOrder);

        res.status(200).json({"newReminder":newReminder});

       
    }   
    else{
       res.status(500).json({message:'Method Error'})

    }
}