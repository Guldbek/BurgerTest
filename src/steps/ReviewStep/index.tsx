import { DateTime } from "luxon";
import useActivitiesStore from "../../stores/useActivityStore";
import useTicketStore from "../../stores/useTicketStore";
import ReviewItem from "../../components/ReviewItem";

const ReviewStep = () => {
  const adultTickets = useTicketStore((state) => state.adultTickets);
  const childTickets = useTicketStore((state) => state.childTickets);
  const familyDiscount = useTicketStore((state) => state.familyDiscount);
  const bookingDate = useTicketStore((state) => state.bookingDate);
  const activities = useActivitiesStore((state) => state.activities);

  const calculateTotalPrice = () => {
    const priceOfAdultTickets = adultTickets * 175;
    const priceOfChildTickets = childTickets * 125;
    const totalTickets = adultTickets + childTickets;

    const activityPrice = activities.reduce((acc, activity) => {
      return acc + activity.price * totalTickets;
    }, 0);

    if (familyDiscount) {
      return {
        price:
          (priceOfAdultTickets + priceOfChildTickets + activityPrice) * 0.9,
      };
    }

    return {
      price: priceOfAdultTickets + priceOfChildTickets + activityPrice,
    };
  };

  if (!bookingDate) return null;

  const priceOfAdultTickets = adultTickets * 175;
  const priceOfChildTickets = childTickets * 125;
  const totalTickets = adultTickets + childTickets;

  const parsedBookingDate =
    DateTime.fromObject(bookingDate).toFormat("LLLL dd yyyy");

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl p-5 border-b-[1px]">Overview of your day</h1>
      <div className="py-5 border-b-[1px]">
        <h2 className="text-xl px-5 ">Date of arrival</h2>
        <h2
          className="text-xl px-5 font-bold"
          aria-label={`Booking date ${parsedBookingDate}`}
        >
          {parsedBookingDate}
        </h2>
      </div>

      <h2 className="text-xl px-5 mt-5">Tickets</h2>
      <ReviewItem
        label="Adult tickets"
        value={adultTickets}
        price={priceOfAdultTickets}
      />
      <ReviewItem
        label="Child tickets"
        value={childTickets}
        price={priceOfChildTickets}
      />
      <h2 className="text-xl px-5 mt-5">Activities</h2>
      {activities
        .filter((activity) => activity.type === "activity")
        .map((activity) => (
          <ReviewItem
            key={activity.name}
            label={activity.name}
            value={""}
            price={activity.price * totalTickets}
          />
        ))}
      <h2 className="text-xl px-5 mt-5">Restaurants</h2>
      {activities
        .filter((activity) => activity.type === "restaurant")
        .map((activity) => (
          <ReviewItem
            key={activity.name}
            label={activity.name}
            value={""}
            price={activity.price * totalTickets}
          />
        ))}

      <div className="p-5 grid grid-cols-3 items-center place-items-center border-t-[1px] mt-8">
        <div className="col-span-2  place-self-start">
          <h1 className="text-xl">Price</h1>
          {familyDiscount && (
            <p className="text-green-500">10% Family discount applied</p>
          )}
        </div>
        <p
          aria-label={`Price ${calculateTotalPrice().price}`}
          className="place-self font-bold"
        >
          {calculateTotalPrice().price},-
        </p>
      </div>
    </div>
  );
};

export default ReviewStep;
