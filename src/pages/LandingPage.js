import Authenticate from "Components/Authenticate/Authenticate";
const LandingPage=(props)=>{
    return (<Authenticate url = {props.url}></Authenticate>);
};
export async function getServerSideProps() {
    const vercelUrl = process.env.VERCEL_URL;
    return {
      props: {
        url: vercelUrl,
      },
    };
  }
export default LandingPage;