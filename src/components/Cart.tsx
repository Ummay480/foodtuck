"use client"
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart} from "../redux/slices/cartSlice";


import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector((state: RootState) => state.cart);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)!,
    });

    if (!error) {
      console.log("Payment Success:", paymentMethod);
      alert("Payment successful!");
    } else {
      console.log("Payment Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay ${cart.totalAmount}</button>
    </form>
  );
};

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.items.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Cart;
