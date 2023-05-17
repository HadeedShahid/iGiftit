import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import styles from './StripPaymentInfo.module.css'
import Card from 'Components/UI/Card';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      // Redirect user here
    //   router.push('/Checkout/OrderConfirmation'); // Replace '/success' with your desired success page URL
      props.onConfirmPayment()
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay Now</button>
    </form>
  );
};

const Checkout = (props) => {
    const onConfirmPaymentHandler=()=>{
        props.onConfirmPayment();
    }
  return (
    <Card classes={styles.card}>
        <div className={styles.Cont}>
            <h1 >Checkout</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm onConfirmPayment={onConfirmPaymentHandler} />
            </Elements>
        </div>
    </Card>
    
  );
};

export default Checkout;
