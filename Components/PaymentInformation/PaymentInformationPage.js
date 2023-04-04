import { Fragment } from "react";
// import Header from "../../../Components/Header/Header";
import Header from "Components/Header/Header";
import DeliveryPath from "Components/DeliveryInformation/DeliveryPath";
import PaymentInformation from "Components/PaymentInformation/PaymentInformation";
const DeliveryInfo=(props)=>{
    return(
        <Fragment>
            <Header></Header>
            <DeliveryPath PaymentInfo={true}></DeliveryPath>
            <PaymentInformation prodData={props.prodData} prodCost={props.prodCost} onConfirmPayment={props.onConfirmPayment}></PaymentInformation>
        </Fragment>
    );
};
export default DeliveryInfo;