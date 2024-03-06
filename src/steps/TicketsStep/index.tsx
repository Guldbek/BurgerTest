import Ticket from "../../components/Ticket";
import useTicketStore from "../../stores/useTicketStore";

const TicketsStep = () => {
  const adultTickets = useTicketStore((state) => state.adultTickets);
  const childTickets = useTicketStore((state) => state.childTickets);
  const increaseAdultTickets = useTicketStore(
    (state) => state.increaseAdultTickets
  );
  const decreaseAdultTickets = useTicketStore(
    (state) => state.decreaseAdultTickets
  );
  const increaseKidTickets = useTicketStore(
    (state) => state.increaseChildTickets
  );
  const decreaseKidTickets = useTicketStore(
    (state) => state.decreaseChildTickets
  );

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl p-5 border-b-[1px]">Tickets</h1>
      <Ticket
        value={adultTickets}
        onIncrease={increaseAdultTickets}
        onDecrease={decreaseAdultTickets}
        title="Adults"
        subtitle="Age 13 and up"
      />
      <Ticket
        value={childTickets}
        onIncrease={increaseKidTickets}
        onDecrease={decreaseKidTickets}
        title="Children"
        subtitle="Age 12 and under"
      />

      <div className="p-5 grid grid-cols-3 items-center">
        <div className="col-span-2">
          <h1 className="text-xl">Family?</h1>
          <p className="text-gray-500">We offer a discount for families</p>
        </div>
        <input
          type="checkbox"
          className="rounded-md h-5 w-5 place-self-end"
          aria-label="Family discount"
          checked={useTicketStore((state) => state.familyDiscount)}
          onChange={(e) => {
            useTicketStore.setState({ familyDiscount: e.target.checked });
          }}
        />
      </div>
    </div>
  );
};

export default TicketsStep;
