const ConfirmationStep = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      <h1
        className="text-2xl p-5 border-b-[1px] text-center"
        aria-label="Thank you for your purchase!"
      >
        Thank you for your purchase!
      </h1>
      <p className="p-5 text-center">
        You will receive additional details later
      </p>
    </div>
  );
};

export default ConfirmationStep;
