import { Fragment, useState, useContext, useEffect } from "react";
import DeliveryInformationPage from "../../../Components/DeliveryInformation/DeliveryInformationPage";
import PaymentInformationPage from "../../../Components/PaymentInformation/PaymentInformationPage";
import userCartContext from "Contexts/CartContext";
import { useSession } from "next-auth/react"
// import OrderConfirmation from "./OrderConfirmation/OrderConfirmation";
import { useRouter } from 'next/router'
import LoadingSpinner from "Components/Spinner/Spinner";
const Checkout=()=>{

    const ctx = useContext(userCartContext)
    const { data: session } = useSession()
    const [deliveryInfo,setDeliveryInfo] = useState()
    const [orderPlaced,setOrderPlaced] = useState(false);

    const [productData,setProductData] = useState();
    const [total,setTotal] = useState(0);
    const [loading,setIsLoading] = useState(false);
    const router = useRouter()
    

    useEffect(()=>{
        console.log("in use effect",ctx.cartItems)
        const fetchData = async () => {
            let cost = 0
            const options={
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({items:ctx.cartItems})
            }

            await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Cart/getCartItemsDetail`,options)
            .then((response) => response.json())
            .then((data) => setProductData(
                ()=>{
                    // data.cartItems
                    let final = []
                    cost=0;
                    // console.log(ctx.cartItems)
                    data.cartItems.forEach(function (value, i) {
                        const it = (ctx.cartItems[i])
                        // console.log("it",it)
                        const alias = Object.values(it)[0]
                        cost += Number(value.price*alias.quantity)
                        // console.log("alias",alias) 
                        final.push({
                            image:(value.images)[0],
                            name:value.name,
                            price : value.price,
                            color : alias.color ? alias.color : undefined,
                            quantity : alias.quantity,
                            sizes : alias.sizes ? alias.sizes:undefined,
                            wrap : alias.wrap ? alias.wrap:undefined,
                            card : alias.card ? alias.card:undefined,
                        })
                    });
                    setTotal(cost);
                    return final
                    // console.log("final",final)
                }
            ));
        }

        ctx.cartItems ? fetchData():undefined;  
        // console.log(productData)          
    },[ctx.cartItems])

    const getdate=()=>{
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        // This arrangement can be altered based on how we want the date's format to appear.
        return `${month}-${day}-${year}`;
    }
    const getProducts=async()=>{
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({items:ctx.cartItems})
        }
        const productNames =  await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Cart/getCartItemsDetail`,options)
        .then((response) => response.json())
        .then((data) =>
            {
                // data.cartItems
                let final = []
                // console.log(ctx.cartItems)
                data.cartItems.forEach(function (value, i) {
                    const it = (ctx.cartItems[i])
                    // console.log("it",it)
                    const alias = Object.values(it)[0]
                    // console.log("alias",value) 
                    final.push({
                        item:{name:value.name,prodId:value.id}
                        // name:value.name,
                    })
                });
                return final
                // console.log("final",final)
            }
        );
        // console.log(await productNames,"product name")
        return await productNames.map((name, index) => {
            const det = ctx.cartItems[index][Object.keys(ctx.cartItems[index])[0]]
            // console.log("name",name)
            const nam = name.item.name
            const prodId = name.item.prodId
            // console.log("nam",nam)
            // console.log("nam",proId)

            return {...det,name:nam,prodId:prodId};
        });
    }
    const placeOrderHandler=async()=>{
        setIsLoading(true);
        console.log("pressed")
        const email = session.user.email;
        const status = 'In Transit';
        const amount = ((await ctx.totalAmount())+200).toString();
        const date = getdate();
        const items = await getProducts()
        
        const newOrder = {userEmail:email,status,amount,date,items}
        
        console.log("new order func",newOrder);

       
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({orderToAdd:newOrder})
        }
        await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_CUSTOM_URL}/api/Orders/setOrders`,options)
        .then((response) => {
            response.json()
            if (response.ok){
                setIsLoading(false);
                setOrderPlaced(true);
                router.push({
                    pathname: '/Checkout/OrderConfirmation',
                    query: { 
                        data: JSON.stringify(productData),
                        cost:total
                    }})
            } 
        })
        .then((data) =>
            {
                console.log("in log",data)
            }
        ).catch(e=>{setIsLoading(false)})

        ctx.clearCart()

    }
    console.log(ctx.cartItems)
    return(
        <Fragment>
            {/* <OrderConfirmation prodData={productData} prodCost={total}></OrderConfirmation> */}
            {!deliveryInfo ? <DeliveryInformationPage prodData={productData} prodCost={total} onSaveDelivery={(e)=>{setDeliveryInfo(e)}}></DeliveryInformationPage>:undefined}
            {deliveryInfo ? <PaymentInformationPage prodData={productData} prodCost={total} onConfirmPayment={
                // placeOrderHandler
                async()=>{
                    console.log("prod name",await placeOrderHandler())
                }
                }></PaymentInformationPage>:undefined}
            {loading ? <LoadingSpinner></LoadingSpinner>:undefined}
        </Fragment>
    );
}
export default Checkout