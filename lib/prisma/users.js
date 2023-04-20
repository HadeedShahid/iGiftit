import prisma from ".";



export async function createUser(user){
    try {
        // console.log("in create user,",user)
        // const userFromDb = await prisma.user.create({data:user});
        const temp = {...user,cart: {
            create:{
                items: "[]"
            }, // Populates authorId with user's id
        }}
        console.log("temp=-=-=-=-=-=-=,",temp);
        const userFromDb = await prisma.user.create({
            data:temp
          })
        return {user:userFromDb}
    } catch (error) {
        console.log(error)
        console.log("*****Error in create user prisma/user.js*****")
    }
}

export async function getUserbyemail(email){
    try {
        console.log("in prisma",email)
        const user = await prisma.user.findFirst({where:{email:email}})
        console.log('log',{user})
        return {user}
    } catch (error) {
        console.log("*****Error in get user by email prisma/user.js*****")
        console.log(error)
    }
}
export async function getUserIdbyemail(email){
    try {
        const user = (await prisma.user.findFirst({where:{email:email}})).id
        return user;
    } catch (error) {
        console.log("*****Error in get user by email prisma/user.js*****")
        console.log(error)
    }
}
export async function getSavedAddresses(email){
    try {
        return JSON.parse((await getUserbyemail(email)).user.addresses);
    } catch (error) {
        console.log("*****Error in get user by email prisma/user.js*****")
        console.log(error)
    }
}

export async function addAddress(email,newAddresses){
    console.log("email",email)
    try {
        const updateUser = await prisma.user.update({
            where: {
                email:email,
            },
            data: {
              addresses: await JSON.stringify(newAddresses),
            },
        })
        return updateUser;

    } catch (error) {
        console.log("*****Error in get user by email prisma/user.js*****")
        console.log(error)
    }
}

export async function AddCartItem(email,cartItem){
    console.log("cart",cartItem)
    try {
        const updateUser = await prisma.user.update({
            where: {
                email:email,
            },
            data: {
              items: await JSON.stringify(newAddresses),
            },
        })
        return updateUser;

    } catch (error) {
        console.log("*****Error in AddCartItem prisma/user.js*****")
        console.log(error)
    }
}
export async function getCartItems(email){
    try {
        const user = (await prisma.user.findFirst(
            {
                where:{email:email},
                include: {cart: {select: {items: true}},},
            }
        ))
        const temp = await JSON.parse({...user,items:user.cart.items}.items)
        return temp;
    } catch (error) {
        console.log("*****Error in get user by email prisma/user.js*****")
        console.log(error)
    }
}
export async function setCartItems(email,cartItems){
    const items = await JSON.stringify(cartItems)
    console.log("inf unrcion")
    console.log(typeof items)
    console.log( items)
    try {
        const user = (await prisma.user.update(
            {
                where:{email:email},
                data: {cart: {update: {items: items}},},
            }
        ))

        return {items:await JSON.parse(items)};
    } catch (error) {
        console.log("*****Error in setting catr items by email prisma/user.js*****")
        console.log(error)
    }
}

export async function emptyCart(email){
    console.log("Emptying cart");
    const items = "[]"
    try {
        const user = (await prisma.user.update(
            {
                where:{email:email},
                data: {cart: {update: {items: items}},},
            }
        ))

        return {items:[]};
    } catch (error) {
        console.log("*****Error in emptying cart items*****")
        console.log(error)
    }
}