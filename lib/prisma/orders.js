import prisma from ".";



export async function getOrders(email){
    try {
        // console.log("in create user,",user)
        const orders = (await prisma.order.findMany({
            where: {
                userEmail: email
            },
        }))
        console.log("old orders:", orders);

        const newOrders = await Promise.all(orders.map(async (order)=>{
            // console.log("testing",)
            const jsonItems =  await JSON.parse(order.items)
            console.log("json items",jsonItems)
            // console.log(typeof order.items)
            // console.log(typeof order.items)
            return {...order,items:jsonItems}
            // return order
        }));

        // console.log("new orders:", JSON.stringify(newOrders));
        return newOrders
    } catch (error) {
        console.log(error)
        console.log("*****Error in create user prisma/user.js*****")
    }
}

export async function addOrder(order){
    console.log("**********",typeof order)
    try {
        const newOrder = await prisma.order.create({data:order})
        return newOrder;

    } catch (error) {
        console.log("*****Error in get user by email prisma/user.js*****")
        console.log(error)
    }
}


