import prisma from ".";

export async function getReminders(email){
    try {
        // console.log("in create user,",user)
        const reminders = (await prisma.reminders.findMany({
            where: {
                userEmail: email
            },
        }))
        return reminders
    } catch (error) {
        console.log(error)
        console.log("*****Error in create user prisma/user.js*****")
    }
}

export async function addReminder(Reminder){
    // console.log("**********",typeof order)
    try {
        const newReminder = await prisma.reminders.create({data:Reminder})
        return newReminder;

    } catch (error) {
        console.log("*****Error in newReminder *****")
        console.log(error)
    }
}


