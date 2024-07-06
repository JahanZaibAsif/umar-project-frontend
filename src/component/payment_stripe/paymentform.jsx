import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from 'sweetalert2';

function PaymentForm() {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Track payment success
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });
      console.log(paymentMethod.id)
     
        setPaymentError(null);
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}//create_token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ paymentMethodId: paymentMethod.id })
        });
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Payment completed successfully.',
            showConfirmButton: false,
            timer: 3000 
          });
        } else if(response.status == 400){
          const data = await response.json();
          const errorMessage = data && data.message ? data.message : 'An error occurred';

          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: data.message,
            confirmButtonText: 'OK'
          });
          setPaymentSuccess(false);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Failed to confirm payment',
            confirmButtonText: 'OK'
          });
          setPaymentSuccess(false);
        }
      
    } catch (error) {
      console.error("Error:", error);
      setPaymentError("An error occurred. Please try again later.");
      setPaymentSuccess(false);
    }
  };
  
  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <label className="pb-5">
        Card details
        <CardElement className="CardElement" />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentError && <div className="error-message">{paymentError}</div>}
      {paymentSuccess && (
        <div className="success-message">Payment successful!</div>
      )}
    </form>
  );
}
export default PaymentForm;