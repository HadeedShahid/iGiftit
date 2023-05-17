const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000, // The amount in cents
    currency: 'usd',
    metadata: { integration_check: 'accept_a_payment' },
  });

  res.status(200).json({ clientSecret: paymentIntent.client_secret });
};