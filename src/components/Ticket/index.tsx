const Ticket = ({
  value,
  onIncrease,
  onDecrease,
  title,
  subtitle,
}: {
  value: number;
  title: string;
  subtitle: string;
  onIncrease: () => void;
  onDecrease: () => void;
}) => {
  return (
    <div className="p-5 grid grid-cols-3 items-center">
      <div className="text-left">
        <h1 className="text-xl">{title}</h1>
        <h5 className="text-sm text-gray-600">{subtitle}</h5>
      </div>
      <h3 className="text-xl place-self-center">{value}</h3>
      <div className="flex gap-2">
        <button
          aria-label={title + " increase ticket count"}
          className="rounded-full bg-slate-100 w-16 h-16 text-2xl"
          onClick={onIncrease}
        >
          +
        </button>
        <button
          aria-label={title + " decrease ticket count"}
          className="rounded-full bg-slate-100 w-16 h-16 text-2xl"
          onClick={onDecrease}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Ticket;
