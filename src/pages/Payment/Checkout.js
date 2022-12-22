import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../../context/ContextApi";

const Checkout = ({ tour }) => {
  const { user } = Context();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!elements || !stripe) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      console.log(intentError);
    }

    if (paymentIntent) {
      toast.success("Payment Success");
    }
    if (error) {
      setCardError(error);
    } else {
      setCardError("");
    }
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_DOMAIN_NAME}/api/v1/payment`,
        {
          method: "POST",
          body: JSON.stringify({ price: tour.price }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      const result = await res.json();
      setClientSecret(result.clientSecret);
    };

    getClientSecret();
  }, [tour.price]);

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <CardElement className="px-5 py-5 rounded w-full bg-gray-100" />
      <button
        type="submit"
        disabled={!stripe}
        className="my-3 px-4 py-4 bg-slate-900 text-white rounded w-full"
      >
        Pay
      </button>

      {cardError && <p className="my-3 text-red-500">{cardError}</p>}
    </form>
  );
};

export default Checkout;
