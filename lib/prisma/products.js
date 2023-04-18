import prisma from ".";


export async function getProducts(){
    console.log("**********","in get products")
    try {
        console.log("before")
        const users = await prisma.products.findMany()
        console.log("after data,",users)
        return users
        // return {}
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

export async function getProductById(id){
    console.log("**********","in get products")
    try {
            const product = await prisma.products.findUnique({
            where: {
              id: id,
            },
          })
        // console.log("data",product)
        return product
    } catch (error) {
        console.log("*****Error in getting all the products*****")
        console.log(error)
    }
}
