import "./App.css";
import ActivitiesStep from "./steps/ActivitiesStep";
import DateStep from "./steps/DateStep";
import TicketsStep from "./steps/TicketsStep";
import ReviewStep from "./steps/ReviewStep";
import useNavigationStore from "./stores/useNavigationStore";
import PaymentStep from "./steps/PaymentStep";
import ConfirmationStep from "./steps/ConfirmationStep";

function App() {
  const step = useNavigationStore((state) => state.step);
  const prevStep = useNavigationStore((state) => state.prevStep);
  const nextStep = useNavigationStore((state) => state.nextStep);

  return (
    <div className="app">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center p-5">Book your day</h1>
        <div className="flex justify-center items-center flex-col gap-5 p-5">
          {step === "Date" && <DateStep />}
          {step === "Tickets" && <TicketsStep />}
          {step === "Activities" && <ActivitiesStep />}
          {step === "Review" && <ReviewStep />}
          {step === "Payment" && <PaymentStep />}
          {step === "Confirmation" && <ConfirmationStep />}

          {step !== "Payment" && (
            <div className="flex justify-between w-full">
              <button
                className="bg-slate-200 px-7 py-2 rounded-xl"
                onClick={prevStep}
                aria-label="Previous step"
              >
                Previous
              </button>
              <button
                className="bg-green-300 px-7 py-2 rounded-xl "
                onClick={nextStep}
                aria-label="Next step"
              >
                {step === "Review" ? "Payment" : "Next"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
