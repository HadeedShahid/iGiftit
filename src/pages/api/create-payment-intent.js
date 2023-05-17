const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function(req, res){
  // console.log("ininininin")
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000, // The amount in cents
    currency: 'usd',
    metadata: { integration_check: 'accept_a_payment' },
  });

  res.status(200).json({ clientSecret: paymentIntent.client_secret });


  // const session = await stripe.checkout.sessions.create({
  //   // payment_method_types: ["card"],
  //   line_items: [
  //     {
  //       price_data: {
  //         currency: "usd",
  //         product_data: {
  //           name: "T-shirt",
  //         },
  //         unit_amount: 2000,
  //       },
  //       quantity: 1,
  //     },
  //   ],
  //   mode: "payment",
  //   success_url: "http://localhost:8000/success",
  //   cancel_url: "http://localhost:8000/cancel",
  // });
  // console.log("in api",session)
  // res.json({url: session.url}) // <-- this is the changed line
}