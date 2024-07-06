// App.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './paymentform';
import './stripe.css'



const stripePromise = loadStripe('pk_test_51OOBlKBfdxqXGszeLAHd19Qct8M4oaEI2arrPDCdLA6NOhBfOvKqayzG0Z1YUV6TWDfBKsmXgLqQcOTESwNARyQo00NJn3scEH');

const Stripe = () => {

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm/>
    </Elements>
  );
};

export default Stripe;
