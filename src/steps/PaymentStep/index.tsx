import { useState, useEffect } from "react";
import "./index.css";
import useNavigationStore from "../../stores/useNavigationStore";

const PaymentStep = () => {
  const [loading, setLoading] = useState(true);
  const nextStep = useNavigationStore((state) => state.nextStep);
  const [message, setMessage] = useState(0);

  // Simulate payment processing delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      nextStep();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const messages = [
    "Grilling the patties",
    "Chopping the onions",
    "Adding the secret sauce",
    "Assembling the burger",
  ];

  setInterval(() => {
    setMessage((message) => (message + 1) % messages.length);
  }, 1250);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      {loading && (
        <>
          <h2
            className="text-xl text-center p-5"
            aria-label="Processing your payment!"
          >
            Processing your payment!
          </h2>
          <div className="spinner mx-auto p-5"></div>
          <p className="font-italic text-center p-5 text-slate-500">
            {messages[message]}
          </p>
        </>
      )}
    </div>
  );
};

export default PaymentStep;
