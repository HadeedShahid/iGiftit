import { Fragment } from "react";
import Header from "../../Components/Header/Header";
import DeliveryInformation from "./DeliveryInformation";
import DeliveryPath from "./DeliveryPath";
// import { useRouter } from 'next/router'
const DeliveryInfo=(props)=>{
    // const router = useRouter()

    return(
        <Fragment>
            <Header></Header>
            <DeliveryPath DeliveryInfo={true}></DeliveryPath>
            <DeliveryInformation prodData={props.prodData} prodCost={props.prodCost} setDeliveryInfoHandler={(data)=>{
                props.onSaveDelivery(data)
                // router.push("/PaymentInfo");
                }}></DeliveryInformation>
        </Fragment>
    );
};
export default DeliveryInfo;